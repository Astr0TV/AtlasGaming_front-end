import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './PalworldReport.css'; // Assurez-vous d'importer votre fichier CSS avec les styles personnalisés
import CustomNavbar from '../../Navbar/navbar';
import Footer from '../../footer/footer';

const PalworldReport = () => {
    return (
        <div>
            <CustomNavbar></CustomNavbar>
        <div className="report-container">
            <h1 className="report-title">Rapport sur Palworld</h1>
            <p className="report-note">Note : Ce focus couvre les données de janvier 2024, basées sur un agrégat de 37 marchés, à l'exclusion de la Chine et de l'Inde.</p>

            <div className="report-section">
                <h2 className="section-title">Introduction</h2>
                <p>Développé et publié par le studio indépendant Pocket Pair, Palworld est un jeu d'action en monde ouvert, de survie et de capture de monstres où les joueurs interagissent avec des créatures appelées "Pals" (combat, capture et utilisation à d'autres fins).</p>
                <p>Le jeu a été lancé le 19 janvier et a vendu huit millions d'unités au cours de ses six premiers jours. Il a également attiré plus de deux millions de joueurs simultanés sur Steam.</p>
            </div>

            <div className="report-section">
                <h2 className="section-title">Performance du jeu</h2>
                <ul>
                    <li>Palworld était le deuxième jeu le plus regardé et le plus joué dans le genre aventure.</li>
                    <li>En janvier 2024, Palworld s'est classé onzième en termes d'utilisateurs actifs mensuels (UAM) sur PC et Xbox.</li>
                    <li>7,4 % des joueurs de jeux vidéo ont exploré le monde ouvert peuplé de Pals, en moyenne, passant 16 heures par mois en jeu.</li>
                    <li>En ce qui concerne l'audience, Palworld a revendiqué la deuxième place dans le genre aventure et la cinquième dans tous les genres.</li>
                </ul>
            </div>

            <div className="report-section">
                <h2 className="section-title">Revenus et acquisition</h2>
                <p>Palworld s'est classé premier en termes de revenus premium aux États-Unis et au Royaume-Uni ce mois-ci. De plus, diverses informations sur l'acquisition de joueurs sont également fournies.</p>
            </div>

            <div className="button-group">
                <Button variant="primary">Télécharger l'infographie</Button>
            </div>
        </div>
        <Footer></Footer>
        </div>
    );
}

export default PalworldReport;
