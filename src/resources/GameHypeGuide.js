import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './GameHypeGuide.css'; // Assurez-vous d'importer votre fichier CSS avec les styles personnalisés
import CustomNavbar from '../Navbar/navbar';
import { FaCheck } from 'react-icons/fa';
import Footer from '../footer/footer';

const GameHypeGuide = () => {
    const [checked, setChecked] = useState({
        preLaunchHype: false,
        exploreAwareness: false,
        identifyOpportunities: false,
        maintainGrowth: false,
        trackMetrics: false
    });

    const handleChange = (event) => {
        const { name, checked } = event.target;
        setChecked({ ...checked, [name]: checked });
    };
    return (
        <div>
            <CustomNavbar />
            <section className="hero-section">
                <h1 className='titelcolor'>Rapport Gratuit</h1>
                <p>Le guide ultime de suivi de l'engouement pour les jeux</p>
                <div>
                    <label>
                        <FaCheck className='facheck' style={{ color: 'green' }} />
                        Suivi de l'engouement avant le lancement du jeu
                    </label>
                    <br />
                    <label>
                        <FaCheck className='facheck' style={{ color: 'green' }} />
                        Explorez la notoriété assistée et non assistée, l'intention d'achat, et plus encore
                    </label>
                    <br />
                    <label>
                        <FaCheck className='facheck' style={{ color: 'green' }} />
                        Identification des opportunités pour les joueurs
                    </label>
                    <br />
                    <label>
                        <FaCheck className='facheck' style={{ color: 'green' }} />
                        Maintien et croissance de l'engouement
                    </label>
                    <br />
                    <label>
                        <FaCheck className='facheck' style={{ color: 'green' }} />
                        Suivez les principales métriques après la sortie, telles que les motivations à jouer et les événements du jeu
                    </label>
                </div>
            </section>
            <div className="guide-container">
                <h1 className="guide-title">Guide de suivi de l'engouement pour les jeux</h1>
                <p>Les jeux sur PC et console évoluent à une vitesse fulgurante, avec une gamme toujours croissante de jeux rivalisant pour le temps, l'attention et l'argent des joueurs. Générer suffisamment de notoriété assistée et non assistée (le buzz de votre jeu) est devenu de plus en plus difficile.</p>
                <p>C'est pourquoi nous avons utilisé notre Game Health Tracker pour produire notre premier guide sur le suivi de l'engouement pour les jeux.</p>
                <p>Ce guide gratuit plonge dans les principaux indicateurs permettant de suivre l'engouement d'un jeu depuis avant sa sortie jusqu'à bien après sa durée de vie. Rassemblant des données sur les consommateurs de jeux vidéo et des informations exclusives, le guide vous aide à répondre à la question essentielle : votre jeu suscite-t-il l'engouement qu'il mérite ?</p>
                <div className="content-container">
                    <div className="guide-details">
                        <h2>Qu'obtenez-vous avec le guide de suivi de l'engouement pour les jeux ?</h2>
                        <ul>
                            <li>Le premier guide gratuit de Newzoo de 2024 explore comment suivre l'engouement pour les jeux vidéo depuis la pré-lancement et au-delà, répondant à des questions pressantes telles que :</li>
                            <li>Est-ce que votre jeu a une visibilité suffisante avant le lancement ? Le guide plonge dans des indicateurs comme la notoriété non assistée, la notoriété assistée, l'intention d'achat et les taux de conversion.</li>
                            <li>Qui est le plus susceptible de choisir votre jeu, et quelle est la meilleure façon d'atteindre ces joueurs ? Nous utilisons les données démographiques des joueurs pour identifier les audiences de jeu primaire et secondaire et où elles vont pour s'enthousiasmer à propos des jeux.</li>
                            <li>Comment mesurer la performance post-lancement et suivre votre jeu aux côtés de ses concurrents les plus proches ? Le guide examine plusieurs grandes sorties de 2023, y compris Baldur’s Gate 3 et Starfield, comme des études de cas précieuses.</li>
                            <li>Quelles variables sont les plus utiles pour peaufiner votre message et assurer un succès à long terme ? Parmi d'autres variables, nous examinons les motivations pour jouer pour perfectionner les stratégies marketing.</li>
                        </ul>
                        <p>Ce ressource gratuite offre un aperçu des données et des informations disponibles dans le Game Health Tracker de Newzoo, notre outil de la Plateforme pour cartographier les parcours d'achat de jeux vidéo. Vous voulez en savoir plus sur ce que nous offrons ? Parlons-en.</p>
                    </div>
                    <div className="form-container">
                        <h3>Recevez le rapport gratuit dans votre boîte de réception</h3>
                        <form action="#" method="post">
                            <div class="form-group">
                                <label for="workEmail">Adresse e-mail professionnelle *</label>
                                <input type="email" id="workEmail" name="workEmail" required />
                            </div>
                            <div class="form-group">
                                <label for="firstName">Prénom *</label>
                                <input type="text" id="firstName" name="firstName" required />
                            </div>
                            <div class="form-group">
                                <label for="lastName">Nom de famille *</label>
                                <input type="text" id="lastName" name="lastName" required />
                            </div>
                            <div class="form-group">
                                <label for="companyName">Nom de l'entreprise *</label>
                                <input type="text" id="companyName" name="companyName" required />
                            </div>
                            <div class="form-group">
                                <label for="jobTitle">Titre du poste *</label>
                                <input type="text" id="jobTitle" name="jobTitle" required />
                            </div>
                            <div class="form-group">
                                <label for="seniority">Ancienneté *</label>
                                <select id="seniority" name="seniority" required>
                                    <option value="">Veuillez sélectionner</option>
                                    <option value="VP-Niveau">VP-Niveau</option>
                                    <option value="Étudiant">Étudiant</option>
                                    <option value="Gestionnaire Senior">Gestionnaire Senior</option>
                                    <option value="Non-Gestionnaire">Non-Gestionnaire</option>
                                    <option value="Gestionnaire">Gestionnaire</option>
                                    <option value="Stagiaire">Stagiaire</option>
                                    <option value="Directeur">Directeur</option>
                                    <option value="Niveau C">Niveau C</option>
                                    <option value="Tous">Tous</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="department">Service *</label>
                                <select id="department" name="department" required>
                                    <option value="">Veuillez sélectionner</option>
                                    <option value="Direction Générale">Direction Générale</option>
                                    <option value="Marketing">Marketing</option>
                                    <option value="Ingénierie et Technique">Ingénierie et Technique</option>
                                    <option value="Recherche et Analyse">Recherche et Analyse</option>
                                    <option value="Technologies de l'Information">Technologies de l'Information</option>
                                    <option value="Ventes">Ventes</option>
                                    <option value="Finance">Finance</option>
                                    <option value="Opérations">Opérations</option>
                                    <option value="Ressources Humaines">Ressources Humaines</option>
                                    <option value="Juridique">Juridique</option>
                                    <option value="Médical et Santé">Médical et Santé</option>
                                </select>
                            </div>
                            <div class="checkbox-group">
                                <input type="checkbox" id="subscribeNewsletter" name="subscribeNewsletter" />
                                <label for="subscribeNewsletter">Cochez la case si vous souhaitez également vous abonner à notre newsletter bimensuelle</label>
                            </div>
                            <p>AtlasGaming utilise les informations que vous nous fournissez pour vous contacter concernant notre contenu et nos services pertinents. Vous pouvez vous désabonner de ces communications à tout moment. Pour plus d'informations, consultez notre <a href="#">Politique de confidentialité</a>.</p>
                            <button type="submit" class="btn-submit">Soumettre</button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default GameHypeGuide;
