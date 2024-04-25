import React from 'react';
import './subscribe.css'; // Assurez-vous d'importer votre fichier CSS avec les styles personnalisés
import CustomNavbar from '../Navbar/navbar';
import Footer from '../footer/footer';

const Subscribe = () => {
    return (
        <div>
            <CustomNavbar></CustomNavbar>
            <div className="container">
                <div className="subscribe-content">
                    <div className="subscribe-text">
                        <h2>Inscrivez-vous à notre Newsletter</h2>
                        <p>Recevez chaque mois des insights et des mises à jour directement dans votre boîte de réception !</p>
                        <ul>
                            <li>Derniers articles et rapports gratuits</li>
                            <li>Données marché PC et console exploitables</li>
                            <li>Tendances de recherche des consommateurs qui façonnent le jeu aujourd'hui</li>
                            <li>Actualités et analyses de l'industrie par nos experts</li>
                            <li>Mises à jour clés sur les produits et services</li>
                        </ul>
                        <form action="#" method="post">
                            <input type="email" name="email" placeholder="Email Address" required />
                            <button type="submit">Subscribe</button>
                        </form>
                        <p>Newzoo utilise les informations que vous nous fournissez pour vous contacter au sujet de notre contenu et de nos services pertinents. Vous pouvez vous désabonner de ces communications à tout moment. Pour plus d'informations, consultez notre <a href="#">Politique de confidentialité</a>.</p>
                    </div>
                    <div className="subscribe-image">
                        <img src="https://newzoo.com/wp-content/themes/newzoo/images/illustrations/NewsletterSignup.svg" alt="Newsletter Image" />
                    </div>
                </div>
            </div>
            <Footer>
            </Footer>
        </div>
    );
}

export default Subscribe;
