import React, { useState } from 'react';
import './Demo.css'; // Assurez-vous d'importer votre fichier CSS avec les styles personnalisés
import CustomNavbar from '../Navbar/navbar';
import Footer from '../footer/footer';

const DemoForm = () => {
    // Définir les états pour les champs de formulaire
    const [email, setEmail] = useState('');
    const [prenom, setPrenom] = useState('');
    const [nom, setNom] = useState('');
    const [numeroTel, setNumeroTel] = useState('');
    const [nomSociete, setNomSociete] = useState('');
    const [tailleSociete, setTailleSociete] = useState('');
    const [titrePoste, setTitrePoste] = useState('');
    const [anciennete, setAnciennete] = useState('');
    const [departement, setDepartement] = useState('');
    const [besoins, setBesoins] = useState('');

    // Gérer la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        // Envoyer les données du formulaire à votre backend ou traiter les données localement
        console.log({
            email,
            prenom,
            nom,
            numeroTel,
            nomSociete,
            tailleSociete,
            titrePoste,
            anciennete,
            departement,
            besoins
        });
    };

    return (
        <div className='demobg'>
            <CustomNavbar></CustomNavbar>
            <div className="demo-form-container">
                <h2>Demandez votre démo du Moniteur de Performance de Jeu</h2>
                <p>Nous examinerons votre demande et vous répondrons dès que possible. Seules les adresses e-mail d'entreprise valides seront acceptées.</p>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Adresse e-mail professionnelle*</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                    <label htmlFor="prenom">Prénom*</label>
                    <input type="text" id="prenom" value={prenom} onChange={(e) => setPrenom(e.target.value)} required />

                    <label htmlFor="nom">Nom de famille*</label>
                    <input type="text" id="nom" value={nom} onChange={(e) => setNom(e.target.value)} required />

                    <label htmlFor="numeroTel">Numéro de téléphone (ajoutez l'indicatif du pays)</label>
                    <input type="text" id="numeroTel" value={numeroTel} onChange={(e) => setNumeroTel(e.target.value)} />

                    <label htmlFor="nomSociete">Nom de la société*</label>
                    <input type="text" id="nomSociete" value={nomSociete} onChange={(e) => setNomSociete(e.target.value)} required />

                    <label htmlFor="tailleSociete">Taille de la société*</label>
                    <select id="tailleSociete" value={tailleSociete} onChange={(e) => setTailleSociete(e.target.value)} required>
                        <option value="">Veuillez sélectionner</option>
                        <option value="Petite">Petite</option>
                        <option value="Moyenne">Moyenne</option>
                        <option value="Grande">Grande</option>
                    </select>

                    <label htmlFor="titrePoste">Titre du poste*</label>
                    <input type="text" id="titrePoste" value={titrePoste} onChange={(e) => setTitrePoste(e.target.value)} required />

                    <label htmlFor="anciennete">Ancienneté*</label>
                    <select id="anciennete" value={anciennete} onChange={(e) => setAnciennete(e.target.value)} required>
                        <option value="">Veuillez sélectionner</option>
                        <option value="Junior">Junior</option>
                        <option value="Intermédiaire">Intermédiaire</option>
                        <option value="Senior">Senior</option>
                    </select>

                    <label htmlFor="departement">Département*</label>
                    <select id="departement" value={departement} onChange={(e) => setDepartement(e.target.value)} required>
                        <option value="">Veuillez sélectionner</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Ventes">Ventes</option>
                        <option value="Produit">Produit</option>
                        <option value="Autre">Autre</option>
                    </select>

                    <label htmlFor="besoins">Quels insights recherchez-vous ?*</label>
                    <textarea id="besoins" value={besoins} onChange={(e) => setBesoins(e.target.value)} required></textarea>

                    <button type="submit">Envoyer</button>
                </form>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default DemoForm;
