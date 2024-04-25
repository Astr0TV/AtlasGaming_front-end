import React, { useState } from 'react';
import './contact.css'; // Assurez-vous d'importer votre fichier CSS avec les styles personnalisés
import CustomNavbar from '../Navbar/navbar';
import Footer from '../footer/footer';

const Contact = () => {
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
    const [insights, setInsights] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            const response = await fetch('http://localhost:8090/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email,
                    firstName,
                    lastName,
                    phoneNumber,
                    companyName,
                    companySize,
                    jobTitle,
                    seniority,
                    department,
                    insights
                })
            });
    
            if (response.ok) {
                console.log('E-mail envoyé avec succès');
                // Réinitialiser les champs du formulaire ou afficher un message de confirmation
            } else {
                console.error('Une erreur s\'est produite lors de l\'envoi de l\'e-mail');
            }
        } catch (error) {
            console.error('Une erreur s\'est produite lors de l\'envoi de l\'e-mail :', error);
        }
    };

    return (
        <div className='contact-form-bg'>
            <CustomNavbar />
            <div className='text-form-container ' >
            <h1>Prenez contact</h1>
            </div>
            <div className="contact-form-container">
                <p>Veuillez remplir le formulaire ci-dessous et nous vous contacterons bientôt !</p>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Adresse e-mail professionnelle*</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

                    <label htmlFor="firstName">Prénom*</label>
                    <input type="text" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />

                    <label htmlFor="lastName">Nom de famille*</label>
                    <input type="text" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />

                    <label htmlFor="phoneNumber">Numéro de téléphone (ajoutez l'indicatif du pays)</label>
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

                    <label htmlFor="jobTitle">Titre du poste*</label>
                    <input type="text" id="jobTitle" value={jobTitle} onChange={(e) => setJobTitle(e.target.value)} required />

                    <label htmlFor="seniority">Ancienneté*</label>
                    <select id="seniority" value={seniority} onChange={(e) => setSeniority(e.target.value)} required>
                        <option value="">Veuillez sélectionner</option>
                        <option value="Junior">Junior</option>
                        <option value="Intermédiaire">Intermédiaire</option>
                        <option value="Sénior">Sénior</option>
                    </select>

                    <label htmlFor="department">Département*</label>
                    <select id="department" value={department} onChange={(e) => setDepartment(e.target.value)} required>
                        <option value="">Veuillez sélectionner</option>
                        <option value="Marketing">Marketing</option>
                        <option value="Ventes">Ventes</option>
                        <option value="Produit">Produit</option>
                        <option value="Autre">Autre</option>
                    </select>

                    <label htmlFor="insights">Quels insights recherchez-vous ?*</label>
                    <textarea id="insights" value={insights} onChange={(e) => setInsights(e.target.value)} required></textarea>

                    <button type="submit">Prenez contact</button>
                </form>
            </div>
            <div className='text-form-container'></div>
            <Footer />
        </div>
    );
}

export default Contact;
