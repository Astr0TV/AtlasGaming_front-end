import React, { useState } from 'react';
import './home.css';
import { Container, Button, Card, Spinner, Row, Col } from 'react-bootstrap';
import Footer from '../footer/footer';
import { Link } from 'react-router-dom';
import CustomNavbar from '../Navbar/navbar';
import { useUser } from '../UserContext';



const Home = () => {
    const [partners, setPartners] = useState(['Nexon', 'Zynga', 'Google', 'SteelSeries', 'Sony']);
    const [loading, setLoading] = useState(false);
    const [showStats, setShowStats] = useState(false);
    const totalCards = 3;
    const [currentCard, setCurrentCard] = useState(0);
    const [isLoggedIn, setIsLoggedIn] = useState(false); // Ajoutez un état pour suivre l'état de connexion

    const handleShowMore = () => {
        setLoading(true);
        setTimeout(() => {
            setPartners([...partners, 'Autre partenaire 1', 'Autre partenaire 2', 'Autre partenaire 3']);
            setLoading(false);
        }, 2000);
    };

    const handleNextCard = () => {
        setCurrentCard(currentCard < totalCards - 1 ? currentCard + 1 : 0);
    };

    const handlePrevCard = () => {
        setCurrentCard(currentCard > 0 ? currentCard - 1 : totalCards - 1);
    };

    // Fonction pour gérer la connexion réussie
    const handleLoginSuccess = () => {
        setIsLoggedIn(true); // Mettez à jour l'état de connexion à true
    };

    const { user } = useUser();

    return (
        <div className="home-page">
            <CustomNavbar isLoggedIn={isLoggedIn} />
            <header>
                <section className="hero-section">
                    <h1>Nous vous aidons à prospérer dans le marché du jeu</h1>
                    <p>Données | Recherche | Conseil</p>
                </section>
                <Container>

                    <Row className="text-black">
                        {user && user.email && (
                            <p>Bienvenue, {user.email} !</p>
                        )}
                        <h2>Dans quel domaine êtes-vous ?</h2>
                        <p>Quels que soient vos objectifs, nos insights et notre expertise peuvent vous aider à prendre des décisions fondées sur les données, rapidement.</p>

                        <Col>
                            <Card className="mb-4">
                                <Card.Body>
                                    <img src="https://newzoo.com/wp-content/uploads/2020/04/game-dev-2x.png" alt="Game Development and Publishing" loading="lazy" className="card-img" />
                                    <Card.Title>Développement et Édition de Jeux</Card.Title>
                                    <Card.Text>
                                        Nos insights et notre expertise peuvent vous aider à réussir dans l'industrie du développement et de l'édition de jeux.
                                    </Card.Text>
                                    <Button className="float-end" variant="primary">
                                        En savoir plus <i className="bi bi-arrow-right"></i>
                                    </Button>
                                </Card.Body>
                            </Card>
                            <Card className="mb-4">
                                <Card.Body>
                                    <img src="https://newzoo.com/wp-content/uploads/2021/01/brands-sports-media.svg" alt="Game Development and Publishing" loading="lazy" className="card-img" />
                                    <Card.Title>Matériel & Périphériques de Jeu</Card.Title>
                                    <Card.Text>
                                        Découvrez comment nos données et nos analyses peuvent améliorer votre stratégie dans le domaine du matériel et des périphériques de jeu.
                                    </Card.Text>
                                    <Button className="float-end" variant="primary">
                                        En savoir plus <i className="bi bi-arrow-right"></i>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="mb-4">
                                <Card.Body>
                                    <img src="https://newzoo.com/wp-content/uploads/2021/01/gaming-peripherals.svg" alt="Game Development and Publishing" loading="lazy" className="card-img" />
                                    <Card.Title>Marques, Sports et Médias</Card.Title>
                                    <Card.Text>
                                        Explorez nos insights sur la façon dont les marques, les sports et les médias interagissent avec l'industrie du jeu.
                                    </Card.Text>
                                    <Button className="float-end" variant="primary">
                                        En savoir plus <i className="bi bi-arrow-right"></i>
                                    </Button>
                                </Card.Body>
                            </Card>
                            <Card className="mb-4">
                                <Card.Body>
                                    <img src="https://newzoo.com/wp-content/uploads/2021/01/finance-banking.svg" alt="Game Development and Publishing" loading="lazy" className="card-img" />
                                    <Card.Title>Finance et Conseil</Card.Title>
                                    <Card.Text>
                                        Découvrez comment nos solutions peuvent aider dans le secteur financier et le conseil lié à l'industrie du jeu.
                                    </Card.Text>
                                    <Button className="float-end" variant="primary">
                                        En savoir plus <i className="bi bi-arrow-right"></i>
                                    </Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
                <section className="popular-products-section">
                <h2>Dernières analyses</h2>
                        <p>Ces analyses sont alimentées par les données et la recherche de marché de AtlasGaming.</p>
                    <div className="card-container">
                        <Card className={`card ${currentCard === 0 ? 'd-block' : 'd-none'}`} style={{ width: '1300px' }} bg="light" text="dark">
                            <Card.Body>
                                <Card.Title>Guide ultime de suivi de l'engouement pour les jeux</Card.Title>
                                <Card.Text>
                                    Les jeux sur PC et console évoluent à une vitesse fulgurante, avec une gamme toujours croissante de jeux rivalisant pour le temps, l'attention et l'argent des joueurs. Générer suffisamment de notoriété assistée et non assistée (le buzz de votre jeu) est devenu de plus en plus difficile. C'est pourquoi nous avons utilisé notre Game Health Tracker pour produire notre premier guide sur le suivi de l'engouement pour les jeux. Ce guide gratuit plonge...
                                </Card.Text>
                                <Button  as={Link} to="/Resources/GameHypeGuide" className="float-centre" variant="primary">
                                    En savoir plus <i className="bi bi-arrow-right"></i>
                                </Button>
                            </Card.Body>
                        </Card>
                        <Card className={`card ${currentCard === 1 ? 'd-block' : 'd-none'}`} style={{ width: '1300px' }} bg="light" text="dark">
                            <Card.Body>
                                <Card.Title>Palworld était le jeu n°1 en termes de revenus premium aux États-Unis et au Royaume-Uni en janvier 2024 - AtlasGaming Spotlight</Card.Title>
                                <Card.Text>
                                    Note : Ce spotlight couvre les données de janvier 2024 basées sur un agrégat de 37 marchés, à l'exclusion de la Chine et de l'Inde. Bienvenue dans un autre Spotlight de Newzoo, où nous vous donnons un aperçu des métriques essentielles d'un titre impactant. Dans ce Spotlight, nous nous rendons à Palworld. Développé et publié par le studio indépendant Pocket Pair,...
                                </Card.Text>
                                <Button as={Link} to="/Resources/blog/PalworldReport" className="float-centre" variant="primary">
                                    En savoir plus <i className="bi bi-arrow-right"></i>
                                </Button>
                            </Card.Body>
                        </Card>
                        <Card className={`card ${currentCard === 2 ? 'd-block' : 'd-none'}`} style={{ width: '1300px' }} bg="light" text="dark">
                            <Card.Body>
                                <Card.Title>Comment développer des marques de jeux avec Christian Fonnesbech de Leverage | AtlasGaming industry spotlights</Card.Title>
                                <Card.Text>
                                    Que faut-il pour construire une marque de jeu réussie ? Et comment les stratégies transmédias peuvent-elles soutenir cette quête de franchisage IP scalable ? Selon Christian Fonnesbech, le PDG et responsable du développement de l'IP chez Leverage, tout se résume à construire un engagement émotionnel unique et appropriable. Si l'année dernière nous a appris quelque chose, c'est...
                                </Card.Text>
                                <Button  className="float-centre" variant="primary">
                                    En savoir plus <i className="bi bi-arrow-right"></i>
                                </Button>
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="button-group">
                        <Button onClick={handlePrevCard} variant="outline-primary">Précédent</Button>
                        <Button onClick={handleNextCard} variant="outline-primary">Suivant</Button>
                    </div>
                </section>
            </header>
            {/* Contenu de la page */}
            <Footer>
            </Footer>
        </div>

    );
}

export default Home;
