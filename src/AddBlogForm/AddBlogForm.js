import React, { useState, useEffect, useRef } from 'react';
import './AddBlogForm.css';
import CustomNavbar from '../Navbar/navbar';
import Footer from '../footer/footer';
import { useNavigate, useParams } from 'react-router-dom'; // Import de useParams
import Alert from 'react-bootstrap/Alert';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { addBlog } from '../services/services'; // Importez la fonction addBlog depuis services.js

const AddBlogForm = () => {
    const { id } = useParams(); // Utilisation de useParams pour récupérer les paramètres d'URL
    const [title, setTitle] = useState('');
    const [image, setImage] = useState('');
    const [type, setType] = useState('');
    const [editorState, setEditorState] = useState(() => EditorState.createEmpty()); // Utilisation d'une fonction pour créer l'état initial de l'éditeur
    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const navigate = useNavigate();
    const isMounted = useRef(true); // Utilisation d'une référence de composant pour suivre le montage du composant

    useEffect(() => {
        // Définit le drapeau de montage du composant sur true lors du montage
        isMounted.current = true;
        // Nettoie la référence de composant lors du démontage
        return () => {
            isMounted.current = false;
        };
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!title || !image || !type) {
            alert('Veuillez remplir tous les champs');
            return;
        }
        try {
            const formData = new URLSearchParams();
            formData.append('title', title);
            formData.append('content', draftToHtml(convertToRaw(editorState.getCurrentContent())));
            formData.append('image', image);
            formData.append('type', type);

            const data = await addBlog(formData); // Utilisez la fonction addBlog pour ajouter un blog
            if (isMounted.current) { // Vérifie si le composant est monté avant de mettre à jour l'état
                setShowSuccessAlert(true);
                setTitle('');
                setImage('');
                setType('');
                setEditorState(EditorState.createEmpty());
            }
        } catch (error) {
            console.error('Error:', error);
            alert('Une erreur s\'est produite. Veuillez réessayer plus tard.');
        }
    };

    const isUrlValid = (url) => {
        return url.startsWith('https://');
    };

    return (
        <div>
            <CustomNavbar />
            {showSuccessAlert && (
                <Alert variant="success" onClose={() => setShowSuccessAlert(false)} dismissible>
                    Article ajouté avec succès
                </Alert>
            )}
            <div className="add-blog-form">
                <h2>Ajouter un nouvel article</h2>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Titre"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <Editor
                        editorState={editorState}
                        wrapperClassName="wrapper-class"
                        editorClassName="editor-class"
                        toolbarClassName="toolbar-class"
                        onEditorStateChange={(editorState) => isMounted.current && setEditorState(editorState)} // Vérifie si le composant est monté avant de mettre à jour l'état
                    />
                    <input
                        type="text"
                        placeholder="Image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                    {image && !isUrlValid(image) && (
                        <p className="error-message">L'URL de l'image doit commencer par "https://"</p>
                    )}
                    <input
                        type="text"
                        placeholder="Type"
                        value={type}
                        onChange={(e) => setType(e.target.value)}
                    />
                    <button type="submit">Ajouter</button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default AddBlogForm;
