import React from 'react';
import './About.css';
import CustomNavbar from '../Navbar/navbar';
import Footer from '../footer/footer';
import { Container, Button, Card, Spinner, Row, Col } from 'react-bootstrap';
import { dropRight } from 'lodash';

const About = () => {
    return (
        <div>
            <CustomNavbar />
            <section className="hero-section">
                <h1>À propos de AtlasGaming</h1>
                <p>AtlasGaming est le leader dans les données sur les jeux vidéo et les joueurs. Nous offrons une vue panoramique de la manière dont et pourquoi les gens s'engagent dans les jeux.</p>
            </section>
            <div className="container">
                <div className="about-content">
                    <div className="about-text">
                        <h3>Nous sommes AtlasGaming</h3>
                        <p>Guidez et renforcez votre prise de décision avec les outils et l'expertise de Newzoo, des données au niveau du jeu à la recherche sur les joueurs et les prévisions du marché des jeux.</p>
                        <Row className="no-gutters">
                            <Col>
                                {['Success'].map((variant) => (
                                    <Card
                                        bg={variant.toLowerCase()}
                                        key={variant}
                                        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                                        style={{ width: '24rem' }}
                                        className="mb-4"
                                    >
                                        <Card.Header><h2>Notre But</h2></Card.Header>
                                        <Card.Body>
                                            <Card.Title>{variant} Fournir les meilleurs outils, données et conseils pour prospérer sur le marché des jeux.</Card.Title>
                                        </Card.Body>
                                    </Card>
                                ))}
                            </Col>
                            <Col>
                                {['Primary'].map((variant) => (
                                    <Card
                                        bg={variant.toLowerCase()}
                                        key={variant}
                                        text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
                                        style={{ width: '24rem' }}
                                        className="mb-4"
                                    >
                                        <Card.Header><h2>Notre Vision</h2></Card.Header>
                                        <Card.Body>
                                            <Card.Title>{variant} Accélérer l'avenir du jeu.</Card.Title>
                                        </Card.Body>
                                    </Card>
                                ))}
                            </Col>
                        </Row>
                        <h1>Nos Valeurs</h1>
                        <ul>
                            <li><strong><h1><img src='https://icons.iconarchive.com/icons/fa-team/fontawesome/256/FontAwesome-User-Astronaut-icon.png' className='icon'></img>Soyez Votre Propre Personnage </h1></strong> Nous sommes nous-mêmes sans excuses et embrassons nos différences. Nous créons et trouvons de la joie dans notre travail en suivant nos passions.</li>
                            <li><strong><h1><img src='https://icons.iconarchive.com/icons/iconsmind/outline/256/Telescope-icon.png'  className='icon'></img>Explorez </h1></strong> Nous restons curieux, osant questionner, remettre en question les hypothèses et encourager le débat. Nous nous lançons dans de nouvelles idées dans des territoires inexplorés.</li>
                            <li><strong><h1><img src='https://icons.iconarchive.com/icons/pictogrammers/material/256/gauge-low-icon.png' className='icon'></img>Montez de Niveau </h1></strong> Nous nous poussons vers le niveau suivant et aidons les autres à faire de même. Nous assumons nos responsabilités, accueillons les retours et apprenons de nos erreurs.</li>
                            <li><strong><h1><img src='https://icons.iconarchive.com/icons/iconsmind/outline/256/Medal-2-icon.png' className='icon'></img>Les Yeux sur le Prix </h1></strong> Nous nous concentrons sur ce qui importe le plus et avançons rapidement vers nos objectifs. Nous nous en tenons à moins, mais des priorités plus grandes et meilleures.</li>
                            <li><strong><h1><img src='https://icons.iconarchive.com/icons/arturo-wibawa/akar/256/people-group-icon.png' className='icon'></img>Mode Coopératif </h1></strong> Nous sommes meilleurs ensemble et sommes autorisés à partager nos opinions. Nous coopérons, jouons sur les forces des autres et travaillons vers un objectif commun.</li>
                        </ul>
                        <h3>Services aux Clients du Monde Entier</h3>
                        <p>Nous sommes fiers d'avoir une base de clients qui, tout comme l'industrie du jeu elle-même, est vraiment mondiale. Au sein de l'entreprise, nous avons plus de 30 nationalités contribuant à notre succès, basées dans des villes du monde entier.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default About;
