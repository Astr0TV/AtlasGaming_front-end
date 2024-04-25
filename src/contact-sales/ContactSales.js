import React, { useState } from 'react';
import './ContactSales.css'; // Assurez-vous d'importer votre fichier CSS avec les styles personnalisés
import CustomNavbar from '../Navbar/navbar';
import Footer from '../footer/footer';
import { Button, Card, Container, Row, Col } from 'react-bootstrap';

const ContactSales = () => {
    // Définir les états pour les champs de formulaire
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [companySize, setCompanySize] = useState('');
    const [jobTitle, setJobTitle] = useState('');
    const [seniority, setSeniority] = useState('');
    const [department, setDepartment] = useState('');
    const [interests, setInterests] = useState('');
    const [businessNeeds, setBusinessNeeds] = useState('');

    // Gérer la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        // Envoyer les données du formulaire à votre backend ou traiter les données localement
        console.log({
            email,
            firstName,
            lastName,
            phoneNumber,
            companyName,
            companySize,
            jobTitle,
            seniority,
            department,
            interests,
            businessNeeds
        });
    };

    return (
        <div className='contact-sales-bg' >
            <CustomNavbar></CustomNavbar>
            <Row >
                <Col>
                    <div className="mb-4 text-sales-container ">
                        <h2>Contactez les Ventes</h2>
                        <p>Avec AtlasGamoing, vous pouvez :</p>
                        <ul>
                            <li>Explorer votre opportunité de marché</li>
                            <li>Comprendre, suivre et atteindre votre audience</li>
                            <li>Prendre des décisions stratégiques et financières</li>
                        </ul>
                        <p>Vous êtes entre de bonnes mains</p>
                        <ul>
                            <li>Google</li>
                            <li>Microsoft</li>
                            <li>Warner Bros</li>
                            <li>NVIDIA</li>
                            <li>Activision Blizzard</li>
                            <li>2K</li>
                        </ul>
                    </div>
                </Col>
                <Col>
                    <div className="mb-4">
                        <div className="contact-sales-container">
                            <form onSubmit={handleSubmit}>
                                <label htmlFor="email">Email professionnel*</label>
                                <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                                <label htmlFor="firstName">Prénom*</label>
                                <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />

                                <label htmlFor="lastName">Nom de famille*</label>
                                <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />

                                <label htmlFor="phoneNumber">Numéro de téléphone</label>
                                <input type="text" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />

                                <label htmlFor="companyName">Nom de l'entreprise*</label>
                                <input type="text" id="companyName" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required />

                                <label htmlFor="companySize">Taille de l'entreprise*</label>
                                <select id="companySize" value={companySize} onChange={(e) => setCompanySize(e.target.value)} required>
                                    <option value="">Veuillez sélectionner</option>
                                    <option value="Petite">Petite</option>
                                    <option value="Moyenne">Moyenne</option>
                                    <option value="Grande">Grande</option>
                                </select>

                                <label htmlFor="jobTitle">Poste occupé*</label>
                                <input type="text" id="jobTitle" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} required />

                                <label htmlFor="seniority">Niveau hiérarchique*</label>
                                <select id="seniority" value={seniority} onChange={(e) => setSeniority(e.target.value)} required>
                                    <option value="">Veuillez sélectionner</option>
                                    <option value="Junior">Junior</option>
                                    <option value="Intermédiaire">Intermédiaire</option>
                                    <option value="Senior">Senior</option>
                                </select>

                                <label htmlFor="department">Département*</label>
                                <select id="department" value={department} onChange={(e) => setDepartment(e.target.value)} required>
                                    <option value="">Veuillez sélectionner</option>
                                    <option value="Marketing">Marketing</option>
                                    <option value="Ventes">Ventes</option>
                                    <option value="Produit">Produit</option>
                                    <option value="Autre">Autre</option>
                                </select>

                                <label htmlFor="interests">Quelles données et informations vous intéressent ?*</label>
                                <textarea id="interests" value={interests} onChange={(e) => setInterests(e.target.value)} required></textarea>

                                <label htmlFor="businessNeeds">Comment pouvons-nous aider votre entreprise ?*</label>
                                <textarea id="businessNeeds" value={businessNeeds} onChange={(e) => setBusinessNeeds(e.target.value)} required></textarea>
                                <button type="submit">Soumettre</button>
                            </form>
                        </div>
                    </div>
                </Col>
            </Row>
            <section className="hero-section">
                <h1>Au service des clients à travers le monde</h1>
                <p>Nous sommes fiers d'avoir une base de clients qui, tout comme l'industrie du jeu elle-même, est vraiment mondiale. Au sein de l'entreprise, nous avons plus de 30 nationalités contribuant à notre succès, basées dans des villes du monde entier.</p>
            </section>
            <Footer></Footer>
        </div>
    );
}

export default ContactSales;
