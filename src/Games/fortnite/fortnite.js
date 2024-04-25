import React from 'react';
import './fortnite.css'
import CustomNavbar from '../../Navbar/navbar';
import Footer from '../../footer/footer';
import { Container, Card, Row, Col } from 'react-bootstrap';

const Fortnite = () => {
    return (
        <div>
            <CustomNavbar></CustomNavbar>
            <div className="w-full bg-black/80 py-8 backdrop-blur-3xl md:py-16">
                <div className="container w-full gap-12 text-white md:flex">
                    <br></br>
                    <div className="mb-8 basis-1/5 md:mb-0">
                        <img src="https://newzoo.com/wp-content/uploads/2024/04/game--fortnite.png" alt="Fortnite" className="h-auto w-2/5 rounded md:w-full" />
                    </div>
                    <div className="basis-4/5 text-sm">
                        <div className="mb-2 text-xs opacity-50">
                            Last updated on: <time dateTime="2024-04-05 02:51:39">April 5, 2024</time>
                        </div>
                        <h1 className="text-3xl mb-4">
                            Fortnite
                        </h1>
                        <div id="game--summary" className="mb-4">
                            Fortnite was the #1 most played game in February 2024, based on the number of monthly active users or players.

                            Fortnite is a Battle Royale game developed by Epic Games/People Can Fly that can be played on Windows, Xbox One, Mac, PlayStation 5, iOS, Android, Xbox Series X|S, Nintendo Switch, PlayStation 4.

                            In March 2024, Fortnite was ranked #5 on popular streaming platform Twitch, based on 54.3M hours watched.

                            The game was published by Epic Games on July 21, 2017.
                        </div>
                        <Container>

                            <Row className="text-black">
                                <Col>
                                    <Card className="mb-4">
                                        <Card.Body>
                                            <Card.Title>Released on</Card.Title>
                                            <Card.Text>
                                                Nos insights et notre expertise peuvent vous aider à réussir dans l'industrie du développement et de l'édition de jeux.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                    <Card className="mb-4 ">
                                        <Card.Body>
                                            <Card.Title>Developers</Card.Title>
                                            <Card.Text>
                                                Epic Games, People Can Fly
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card className="mb-4">
                                        <Card.Body>
                                            <Card.Title>Release dates</Card.Title>
                                            <Card.Text>
                                                <ul>
                                                    <li>Jul 21, 2017 - Windows, PlayStation 4, Mac, Xbox One</li>
                                                    <li>Apr 02, 2018 - iOS</li>
                                                    <li>Jun 12, 2018 - Nintendo Switch</li>
                                                    <li>Aug 09, 2018 - Android</li>
                                                    <li>Nov 10, 2020 - Xbox Series X|S</li>
                                                    <li>Nov 12, 2020 - PlayStation 5</li>
                                                </ul>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                <div id="game--data" className="container -mb-40 mt-20 flex w-full justify-center pb-40">
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Rank</Card.Title>
                            <Card.Text>
                                <ul>
                                    February 2024
                                    #1
                                    Played game based on MAU
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>Viewership statistics (Twitch)</Card.Title>
                            <Card.Text>
                                <ul>
                                    March 2024
                                    54.3M
                                    -12.1M
                                    Hours watched
                                    #5
                                    -1
                                    Global rank
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                    <Card className="mb-4">
                        <Card.Body>
                            <Card.Title>rating</Card.Title>
                            <Card.Text>
                                <ul>
                                    February 2024
                                    Reviews
                                    16

                                    Critic score
                                    84 / 100
                                </ul>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </div>
                <section className="hero-section">
                    <h1>Player metrics</h1>
                    <p>PC | Playstation | Xbox | Switch</p>
                </section>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Fortnite;
