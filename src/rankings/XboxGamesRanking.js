import React from 'react';
import { Link } from 'react-router-dom';
import './XboxGamesRanking.css'; // Import du fichier CSS contenant les styles
import { Container, Nav, Navbar, Button, Table, Card, Spinner, Row, Col } from 'react-bootstrap';
import Footer from '../footer/footer';
import CustomNavbar from '../Navbar/navbar';

// Supposons que vous avez des liens vers les images des jeux
const gameImages = {
    "Fortnite": "https://api.newzoo.com/v1.0/metadata/game/boxart?name=Fortnite",
    "Call of Duty: Modern Warfare II/III/Warzone 2.0": "https://api.newzoo.com/v1.0/metadata/game/boxart?name=Call%20of%20Duty:%20Modern%20Warfare%20II/III/Warzone%202.0",
    "Palworld": "https://api.newzoo.com/v1.0/metadata/game/boxart?name=Palworld",
    "Tom Clancy's Rainbow Six: Siege": "https://api.newzoo.com/v1.0/metadata/game/boxart?name=Tom%20Clancy%27s%20Rainbow%20Six:%20Siege",
    "Minecraft": "https://api.newzoo.com/v1.0/metadata/game/boxart?name=Minecraft",
    "Madden NFL 24": "https://api.newzoo.com/v1.0/metadata/game/boxart?name=Madden%20NFL%2024",
    "ROBLOX": "https://api.newzoo.com/v1.0/metadata/game/boxart?name=ROBLOX",
    "Grand Theft Auto V": "https://api.newzoo.com/v1.0/metadata/game/boxart?name=Grand%20Theft%20Auto%20V",
    "Rocket League": "https://api.newzoo.com/v1.0/metadata/game/boxart?name=Rocket%20League",
    "Apex Legends": "https://api.newzoo.com/v1.0/metadata/game/boxart?name=Apex%20Legends",
    "Dead Island 2": "https://api.newzoo.com/v1.0/metadata/game/boxart?name=Dead%20Island%202",
    "NBA 2K24": "https://api.newzoo.com/v1.0/metadata/game/boxart?name=NBA%202K24",
    "EA Sports FC 24": "https://api.newzoo.com/v1.0/metadata/game/boxart?name=EA%20Sports%20FC%2024",
    "Halo: Infinite": "https://api.newzoo.com/v1.0/metadata/game/boxart?name=Halo:%20Infinite",
    "Forza Horizon 5": "https://api.newzoo.com/v1.0/metadata/game/boxart?name=Forza%20Horizon%205",
    "Overwatch 1 & 2": "https://api.newzoo.com/v1.0/metadata/game/boxart?name=Overwatch%201%20&%202",
    "Hell Let Loose": "https://api.newzoo.com/v1.0/metadata/game/boxart?name=Hell%20Let%20Loose",
    "Red Dead Redemption 2": "https://api.newzoo.com/v1.0/metadata/game/boxart?name=Red%20Dead%20Redemption%202",
    "THE FINALS": "https://api.newzoo.com/v1.0/metadata/game/boxart?name=THE%20FINALS",
    "Destiny 2": "https://api.newzoo.com/v1.0/metadata/game/boxart?name=Destiny%202"
};

function XboxGamesRanking() {
    // Fonction pour obtenir le lien de l'image du jeu
    const getGameImage = (gameTitle) => {
        return gameImages[gameTitle] || "lien_vers_image_par_défaut.jpg";
    };

    return (
        <div className="ranking-container">
            <CustomNavbar></CustomNavbar>
            <div class="ranking-header">
                <h6 class="mb-1 text-lg font-medium text-green-200">
                    <a class="hover:underline" href="/resources?type=rankings">Ranking</a>
                </h6>
                <h1 title="Top Xbox games by monthly active users (MAU) – 37 markets" class="max-w-3xl mb-3 max-w-4xl text-balance text-2xl leading-tight text-white sm:line-clamp-4 sm:text-2xl md:line-clamp-3 lg:text-4xl">
                    Top Xbox games by monthly active users (MAU) – 37 markets
                </h1>
                <button data-scroll-to="#table--scroller" data-scroll-to--offset-y="75" id className="button mt-2 " target>
                    <span className='textcolor'>View the ranking <i class="ml-3 fa-regular fa-arrow-down"></i></span>
                    <span class="button--loading hidden flex-nowrap justify-center group-[.loading]:flex">
                        <div class="component--loZading pointer-events-none h-full"></div>
                    </span>
                </button>
            </div>
            {/* Utilisation de Bootstrap pour styliser le tableau */}
            <div className="table-container" style={{ overflowX: 'auto' }}>
                <Container fluid>
                    <h3>Top Xbox Games - February 2024</h3>
                    <Table sstriped bordered hover responsive>
                        <thead className="table-header"> {/* Utilisez .table-header */}
                            <tr>
                                <th>#</th>
                                <th>Game Title</th>
                                <th>Publisher</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>
                                    <img src={getGameImage("Fortnite")} alt="Fortnite" width="50" height="50" />
                                    Fortnite
                                </td>
                                <td>Epic Games</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>
                                    <img src={getGameImage("Call of Duty: Modern Warfare II/III/Warzone 2.0")} alt="Call of Duty: Modern Warfare II/III/Warzone 2.0" width="50" height="50" />
                                    Call of Duty: Modern Warfare II/III/Warzone 2.0
                                </td>
                                <td>Activision Publishing</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>
                                    <img src={getGameImage("Palworld")} alt="Palworld" width="50" height="50" />
                                    Palworld
                                </td>
                                <td>Pocketpair</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>
                                    <img src={getGameImage("Tom Clancy's Rainbow Six: Siege")} alt="Tom Clancy's Rainbow Six: Siege" width="50" height="50" />
                                    Tom Clancy's Rainbow Six: Siege
                                </td>
                                <td>Ubisoft</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>
                                    <img src={getGameImage("Minecraft")} alt="Minecraft" width="50" height="50" />
                                    Minecraft
                                </td>
                                <td>Mojang Studios</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>
                                    <img src={getGameImage("Madden NFL 24")} alt="Madden NFL 24" width="50" height="50" />
                                    Madden NFL 24
                                </td>
                                <td>Electronic Arts</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>
                                    <img src={getGameImage("ROBLOX")} alt="ROBLOX" width="50" height="50" />
                                    ROBLOX
                                </td>
                                <td>Roblox Corporation</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>
                                    <img src={getGameImage("Grand Theft Auto V")} alt="Grand Theft Auto V" width="50" height="50" />
                                    Grand Theft Auto V
                                </td>
                                <td>Rockstar Games</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>
                                    <img src={getGameImage("Rocket League")} alt="Rocket League" width="50" height="50" />
                                    Rocket League
                                </td>
                                <td>Psyonix</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>
                                    <img src={getGameImage("Apex Legends")} alt="Apex Legends" width="50" height="50" />
                                    Apex Legends
                                </td>
                                <td>Electronic Arts</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>
                                    <img src={getGameImage("Dead Island 2")} alt="Dead Island 2" width="50" height="50" />
                                    Dead Island 2
                                </td>
                                <td>Deep Silver</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>
                                    <img src={getGameImage("NBA 2K24")} alt="NBA 2K24" width="50" height="50" />
                                    NBA 2K24
                                </td>
                                <td>2K</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>
                                    <img src={getGameImage("EA Sports FC 24")} alt="EA Sports FC 24" width="50" height="50" />
                                    EA Sports FC 24
                                </td>
                                <td>Electronic Arts</td>
                            </tr>
                            <tr>
                                <td>14</td>
                                <td>
                                    <img src={getGameImage("Halo: Infinite")} alt="Halo: Infinite" width="50" height="50" />
                                    Halo: Infinite
                                </td>
                                <td>Xbox Game Studios</td>
                            </tr>
                            <tr>
                                <td>15</td>
                                <td>
                                    <img src={getGameImage("Forza Horizon 5")} alt="Forza Horizon 5" width="50" height="50" />
                                    Forza Horizon 5
                                </td>
                                <td>Xbox Game Studios</td>
                            </tr>
                            <tr>
                                <td>16</td>
                                <td>
                                    <img src={getGameImage("Overwatch 1 & 2")} alt="Overwatch 1 & 2" width="50" height="50" />
                                    Overwatch 1 & 2
                                </td>
                                <td>Blizzard Entertainment</td>
                            </tr>
                            <tr>
                                <td>17</td>
                                <td>
                                    <img src={getGameImage("Hell Let Loose")} alt="Hell Let Loose" width="50" height="50" />
                                    Hell Let Loose
                                </td>
                                <td>Team17</td>
                            </tr>
                            <tr>
                                <td>18</td>
                                <td>
                                    <img src={getGameImage("Red Dead Redemption 2")} alt="Red Dead Redemption 2" width="50" height="50" />
                                    Red Dead Redemption 2
                                </td>
                                <td>Rockstar Games</td>
                            </tr>
                            <tr>
                                <td>19</td>
                                <td>
                                    <img src={getGameImage("THE FINALS")} alt="THE FINALS" width="50" height="50" />
                                    THE FINALS
                                </td>
                                <td>Embark Studios</td>
                            </tr>
                            <tr>
                                <td>20</td>
                                <td>
                                    <img src={getGameImage("Destiny 2")} alt="Destiny 2" width="50" height="50" />
                                    Destiny 2
                                </td>
                                <td>Bungie</td>
                            </tr>
                        </tbody>
                    </Table>
                    <p>*Agrégat de 37 marchés, à l'exclusion de la Chine</p>
                    <div className="text-section">
                        <strong>Fortnite était le jeu le plus populaire sur Xbox en février 2024.</strong>
                        <p>En janvier 2024, les 10 meilleurs jeux Xbox en termes d'utilisateurs actifs mensuels (MAU) étaient Fortnite, Call of Duty: Modern Warfare II/III/Warzone 2.0 (nous les regroupons), Palworld, Tom Clancy’s Rainbow Six: Siege, Minecraft, Madden NFL 24, ROBLOX, Grand Theft Auto V, Rocket League et Apex Legends.
                            Fortnite a continué sa série en tant que jeu n°1 en termes de MAU, tandis que Madden NFL et Apex Legends ont tous deux progressé suffisamment pour figurer dans le top 10.
                        </p>
                    </div>
                    <p>
                        <strong>Jeux tendances et plus grands mouvements sur Xbox en février 2024</strong>
                        <br />
                        De nombreux jeux ont progressé et régressé dans le top 20 des jeux Xbox en termes de MAU en février. Examinons les mouvements les plus significatifs :
                        <ul>
                            <li>Madden NFL 24 et Apex Legends ont tous deux progressé de cinq places pour atteindre respectivement les 6e et 10e places.</li>
                            <li>En revanche, Grand Theft Auto V (#8) a perdu quatre places.</li>
                            <li>Dead Island 2 a progressé de manière spectaculaire de 153 places pour atteindre la 11e place.</li>
                            <li>Hell Let Loose (#17) a perdu huit places, tandis que THE FINALS (#19) a perdu neuf places.</li>
                            <li>Destiny 2 a progressé de trois places pour se classer à la 20e place.</li>
                        </ul>
                    </p>
                    <p>
                        <strong>Principaux éditeurs de jeux sur Xbox en février 2024</strong>
                        <br />
                        Le studio avec le plus de jeux dans le top 20 des jeux Xbox en février était Electronic Arts (EA), qui avait trois titres dans le classement. Rockstar Games et Xbox Game Studios se sont disputés la deuxième place, avec deux jeux chacun dans la liste.
                    </p>
                    <p>
                        <strong>Jeux vidéo tendances sur d'autres plateformes</strong>
                        <br />
                        Chaque mois, nous publions de nouveaux classements Xbox sur cette page. Assurez-vous de la mettre en favori et revenez le mois prochain pour découvrir s'il y a des changements dans le classement des meilleurs jeux Xbox.
                        <br />
                        Cette liste couvre exclusivement les jeux informatiques les plus populaires sur Xbox. Elle n'inclut pas les jeux mobiles et PC, ni les performances des jeux informatiques multiplateformes sur mobile et PC.
                    </p>
                    <p>
                        <strong>Envie d'avoir une vue d'ensemble ?</strong> Consultez nos listes des meilleurs jeux PS5 et PC !
                    </p>
                    <p>
                        <strong>Débloquez l'accès aux données de performance de jeux sur PC et console leaders de l'industrie</strong>
                        <br />
                        Si vous souhaitez accéder à une vue complète de la performance de votre jeu sur tous les appareils, ainsi qu'aux DAU, MAU, revenus et données démographiques au niveau du jeu, consultez Game Performance Monitor, qui couvre plus de 10 000 jeux sur PC et console.
                    </p>
                    <p>
                        <strong>Abonnez-vous à notre newsletter</strong> pour du contenu gratuit régulier tel que des rapports, des analyses approfondies de données et des articles sur les tendances.
                    </p>



                </Container>
            </div >
            <Footer></Footer>
        </div >
    );
}

export default XboxGamesRanking;
