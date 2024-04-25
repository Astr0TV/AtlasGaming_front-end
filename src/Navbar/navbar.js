import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, Button, NavDropdown } from 'react-bootstrap';
import { useUser } from '../UserContext'; // Importez le hook useUser depuis le contexte utilisateur
import './navbar.css'

function CustomNavbar() {
    const { user, updateUser } = useUser(); // Obtenez l'état de connexion depuis le contexte utilisateur

    const handleLogout = () => {
        // Videz le contexte utilisateur en définissant l'utilisateur sur null
        updateUser(null);
        // Supprimez l'entrée de l'utilisateur dans le localStorage
        localStorage.removeItem('useUser');
    };

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">AtlasGaming</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Actualités</Nav.Link>
                        <Nav.Link href="#pricing">Rapports de Recherche</Nav.Link>
                        <NavDropdown title="Ressources" id="collasible-nav-dropdown" className="wide-dropdown">
                            <NavDropdown.Item as={Link} to="/rankings">Ranking</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/resources">Blog</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/resources" >Raports Gratuits</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Entreprise" id="collasible-nav-dropdown" className="wide-dropdown">
                            <NavDropdown.Item as={Link} to="/about">À propos de nous</NavDropdown.Item> {/* Utilisez Link */}
                            <NavDropdown.Item href="#action/3.2">l'equipe</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/contact">Contact</NavDropdown.Item> {/* Utilisez Link */}
                            <NavDropdown.Divider />
                            <NavDropdown.Item as={Link} to="/subscribe">Subscribe</NavDropdown.Item> {/* Utilisez Link */}
                        </NavDropdown>
                    </Nav>
                    <Nav>
                        <Button variant="outline-primary" as={Link} to="/contact-sales" className="mr-2">Contact sales</Button>
                        <Button variant="success" as={Link} to="/Demo" className="mr-2">Demande de démo</Button>
                        {/* Conditionnez l'affichage du lien "Login" ou "Déconnexion" en fonction de l'état de connexion */}
                        {localStorage.getItem('useUser') ? (
                            // Si l'utilisateur est dans le localStorage, afficher le bouton de déconnexion
                            <Button variant="outline-danger" onClick={handleLogout} className="mr-2">Déconnexion</Button>
                        ) : (
                            // Si l'utilisateur n'est pas dans le localStorage, afficher le lien de connexion
                            <Link to="/login" className="nav-link">Login</Link>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CustomNavbar;
