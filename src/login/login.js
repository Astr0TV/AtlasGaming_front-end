import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './login.css';
import { useUser } from '../UserContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { updateUser } = useUser();
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!email || !password) {
            setError('Veuillez remplir tous les champs');
            return;
        }
        const formData = {
            email: email,
            mdp: password
        };
        try {
            const response = await fetch('http://localhost:8090/connexion', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });
            if (response.ok) {
                console.log('Connexion réussie');
                // Stocker les informations de connexion de l'utilisateur dans le localStorage
                localStorage.setItem('useUser', JSON.stringify({ email: email }));
                updateUser({ email: email });
                navigate('/');
            }
                         else if (response.status === 401) {
                setError('Adresse e-mail ou mot de passe incorrect');
            } else {
                setError('Erreur de connexion');
            }
        } catch (error) {
            console.error('Erreur:', error);
        }
    };

    return (
        <div className="login-page">
            <Container className="d-flex justify-content-center align-items-center h-100">
                <div className="login-form" style={{ width: '340px' }}>
                    <h2 className="text-center mb-4 text-black">The AtlasGaming Platform</h2> {/* Ajoutez la classe text-black ici */}
                    {error && <p className="text-danger text-black">{error}</p>} {/* Ajoutez la classe text-black ici */}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label className="text-black">Email</Form.Label> {/* Ajoutez la classe text-black ici */}
                            <Form.Control
                                type="email"
                                placeholder="Entrez votre e-mail"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label className="text-black">Mot de passe</Form.Label> {/* Ajoutez la classe text-black ici */}
                            <Form.Control
                                type="password"
                                placeholder="Mot de passe"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit" className="w-100 mb-3">
                            Se connecter
                        </Button>
                        <p className="text-center mb-0">
                            <a href="#" className="text-black">J'ai oublié mon mot de passe</a> {/* Ajoutez la classe text-black ici */}
                        </p>
                        <p className="text-center text-black"> {/* Ajoutez la classe text-black ici */}
                            Impossible de se connecter ? Contactez <a href="mailto:clientsupport@atlasgaming.com" className="text-black">clientsupport@atlasgaming.com</a>. {/* Ajoutez la classe text-black ici */}
                        </p>
                    </Form>
                </div>
            </Container>
        </div>
    );
}

export default Login;
