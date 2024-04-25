import React from 'react';
import './footer.css'; // Import du fichier CSS contenant les styles
import { Container, Row, Col } from 'react-bootstrap';

function Footer() {
    return (
        <footer className="footer">
        <Container>
            <Row>
                <Col md={3}>
                    <div className="footer-column">
                        <h3>AtlasGaming</h3>
                        <ul>
                            <li><a href="about">About AtlasGaming</a></li>
                            <li><a href="#">Clients</a></li>
                            <li><a href="#">L'equipe</a></li>
                            <li><a href="contact">Contact</a></li>
                        </ul>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="footer-column">
                        <h3>Products & Services</h3>
                        <ul>
                            <li><a href="#">DATA</a></li>
                            <li><a href="#">Game Performance Monitor</a></li>
                            <li><a href="#">Steam Data Suite</a></li>
                            <li><a href="#">GAMER RESEARCH</a></li>
                            <li><a href="#">Global Gamer Study</a></li>
                            <li><a href="#">Game Health Tracker</a></li>
                        </ul>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="footer-column">
                        <h3>MARKET ANALYSIS AND CONSULTING</h3>
                        <ul>
                            <li><a href="#">Games Market Reports and Forecasts</a></li>
                            <li><a href="#">Consulting</a></li>
                            <li><a href="#">Solutions</a></li>
                        </ul>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="footer-column">
                        <h3>Your Business</h3>
                        <ul>
                            <li><a href="#">Case Studies</a></li>
                            <li><a href="#">Resources</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Free Reports</a></li>
                            <li><a href="#">Rankings</a></li>
                        </ul>
                    </div>
                </Col>
            </Row>
            <Row className="align-items-center">
                <Col md={6}>
                    <div className="newsletter-section">
                        <p> stay up to date with our latest news & insights</p>
                        <form action="#" method="post">
                            <input type="email" name="email" placeholder="Email Address" required />
                            <button type="submit">Subscribe</button>
                        </form>
                        <p className="privacy-text">By signing up you agree to our Privacy Policy.</p>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="footer-bottom">
                        <p>© 2024 AtlasGaming International B.V.</p>
                        <ul className="footer-links">
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Cookies Settings</a></li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
    </footer>
    );
}

export default Footer;
