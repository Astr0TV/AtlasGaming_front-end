import React, { useState, useEffect } from 'react'; // Importez useState et useEffect depuis 'react'
import { Link } from 'react-router-dom';
import './rankings.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import CustomNavbar from '../Navbar/navbar';
import Footer from '../footer/footer';
import { useUser } from '../UserContext';

const Rankings = () => {
    const { user } = useUser(); // Récupérez les informations de l'utilisateur depuis le contexte

    useEffect(() => {
        // Mettez à jour le titre de la page avec le nom de l'utilisateur lorsqu'il est connecté
        if (user) {
            document.title = `Classements | ${user.email}`;
        } else {
            document.title = 'Classements';
        }
    }, [user]);
    return (

        <div className="rankings-page">
            <CustomNavbar></CustomNavbar>
            <Row className="full-width-row justify-content-center align-items-center">
                <Col md={2} className="side-content"></Col>
                <Col md={2} className="side-content">
                    {/* Contenu de la colonne de gauche */}
                    <Card.Img
                        src="https://newzoo.com/wp-content/uploads/2024/04/PCConsole_FeaturedImage-1536x864.png"
                        alt="Image"
                        style={{ maxWidth: '100%', maxHeight: '300px', height: 'auto' }}
                    />
                </Col>
                <Col md={8}>
                    <div className="featured-content">
                        <span className="featured-label">En vedette</span>
                        <h5 className="report-title">Rapport sur les jeux PC et console 2024</h5>
                        <p className="report-description">Découvrez l'état des jeux PC et console dans la deuxième édition de notre rapport gratuit le plus populaire.</p>
                        <Button variant="primary">Téléchargez maintenant</Button>
                    </div>
                </Col>
            </Row>
            <Container>
                <Row xs={1} md={3} className="g-4">
                    <Col>
                        <Card className="ranking-item" as={Link} to="/popular-pc-games">
                            <Card.Img variant="top" src="https://newzoo.com/wp-content/uploads/2019/01/RankingsPC01.png" />
                            <Card.Body>
                                <Card.Title>Jeux PC les plus populaires par utilisateurs actifs mensuels (MAU) – 37 marchés</Card.Title>
                                <Card.Text>Explorez la liste des jeux PC les plus populaires par utilisateurs actifs mensuels dans 37 marchés.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="ranking-item" as={Link} to="/top-ps5-games">
                            <Card.Img variant="top" src="https://newzoo.com/wp-content/uploads/2019/01/RankingsXbox01-1-415x233.png" />
                            <Card.Body>
                                <Card.Title>Les meilleurs jeux PlayStation 5 par utilisateurs actifs mensuels (MAU) - 37 marchés</Card.Title>
                                <Card.Text>Découvrez les meilleurs jeux PlayStation 5 par utilisateurs actifs mensuels dans 37 marchés.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="ranking-item" as={Link} to="/Rankings/XboxGamesRanking">
                            <Card.Img variant="top" src="https://newzoo.com/wp-content/uploads/2019/01/RankingsXbox01-415x233.png" />
                            <Card.Body>
                                <Card.Title>Les meilleurs jeux Xbox par utilisateurs actifs mensuels (MAU) - 37 marchés</Card.Title>
                                <Card.Text>Découvrez les meilleurs jeux Xbox par utilisateurs actifs mensuels dans 37 marchés.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="ranking-item" as={Link} to="/top-switch-games">
                            <Card.Img variant="top" src="https://newzoo.com/wp-content/uploads/2024/02/TopgamesonSwitchbyengagement-2-300x169@2x.png" />
                            <Card.Body>
                                <Card.Title>Les meilleurs jeux Nintendo Switch par MAU - France, Allemagne, Italie, Espagne, États-Unis, Royaume-Uni</Card.Title>
                                <Card.Text>Découvrez les meilleurs jeux Nintendo Switch par utilisateurs actifs mensuels dans plusieurs pays.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="ranking-item" as={Link} to="/top-grossing-games">
                            <Card.Img variant="top" src="https://newzoo.com/wp-content/uploads/2024/02/Topgrossinggames-300x169@2x.png" />
                            <Card.Body>
                                <Card.Title>Les jeux PC et console les plus rentables - France, Allemagne, Italie, Espagne, États-Unis, Royaume-Uni</Card.Title>
                                <Card.Text>Découvrez les jeux PC et console les plus rentables dans divers marchés.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="ranking-item" as={Link} to="/top-video-game-revenues">
                            <Card.Img variant="top" src="https://newzoo.com/wp-content/uploads/2018/06/TopCountriesByVideoGameRevenues-300x169@2x.png" />
                            <Card.Body>
                                <Card.Title>Les pays et marchés les plus rentables en termes de revenus de jeux vidéo</Card.Title>
                                <Card.Text>Découvrez les pays et marchés les plus rentables en termes de revenus de jeux vidéo.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="ranking-item" as={Link} to="/top-public-game-companies">
                            <Card.Img variant="top" src="https://newzoo.com/wp-content/uploads/2019/01/PublicCompanies-1-415x233.png" />
                            <Card.Body>
                                <Card.Title>Les meilleures entreprises de jeux publics par revenus</Card.Title>
                                <Card.Text>Explorez les meilleures entreprises de jeux publics par revenus.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="ranking-item" as={Link} to="/top-twitch-streamers">
                            <Card.Img variant="top" src="https://newzoo.com/wp-content/uploads/2019/01/TwitchStreamers-415x233.png" />
                            <Card.Body>
                                <Card.Title>Les meilleurs streameurs Twitch par heures regardées</Card.Title>
                                <Card.Text>Découvrez les meilleurs streameurs Twitch par heures regardées.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card className="ranking-item" as={Link} to="/top-watched-video-games">
                            <Card.Img variant="top" src="https://newzoo.com/wp-content/uploads/2019/01/MostWatchedGamesTwitch-415x233.png" />
                            <Card.Body>
                                <Card.Title>Jeux vidéo les plus regardés sur Twitch</Card.Title>
                                <Card.Text>Explorez les jeux vidéo les plus regardés sur Twitch.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
            {/* Ajoutez d'autres éléments de classement ici */}
            <Footer></Footer>
        </div >

    );
}

export default Rankings;
