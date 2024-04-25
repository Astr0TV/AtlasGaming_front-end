import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CustomNavbar from '../Navbar/navbar';
import Footer from '../footer/footer';
import './resources.css';
import { getAllBlogs, getBlogsByType } from '../services/services'; // Importer la fonction getBlogsByType

const Resources = () => {
    const [blogs, setBlogs] = useState([]);
    const [filteredType, setFilteredType] = useState(null); // État pour stocker le type filtré

    useEffect(() => {
        const fetchBlogs = async () => {
            try {
                let data;
                if (filteredType) {
                    // Si un type est filtré, récupérez les blogs par ce type
                    data = await getBlogsByType(filteredType);
                } else {
                    // Sinon, récupérez tous les blogs
                    data = await getAllBlogs();
                }
                setBlogs(data);
            } catch (error) {
                console.error(error.message);
            }
        };

        fetchBlogs();
    }, [filteredType]); // Mettre à jour les blogs lorsque le type filtré change

    const handleFilter = async (type) => {
        // Lorsque le bouton de filtrage est cliqué, mettez à jour le type filtré
        setFilteredType(type);
    };

    return (
        <div> <CustomNavbar />
            <div className="posts-filter posts-filter--post_type flex w-fit max-w-[100vw] overflow-x-auto whitespace-nowrap pr-4 text-center text-sm font-medium text-black [-ms-overflow-style:'none'] [scrollbar-width:'none'] dark:text-gray-400 [&amp;::-webkit-scrollbar]:hidden">
                <h2>Resources</h2>
                <Button className="mr-2 btn" onClick={() => handleFilter(null)} variant="outline-success">All</Button>
                <Button className="mr-2 btn" onClick={() => handleFilter('test')} variant="outline-success">test</Button>
                <Button className="mr-2 btn" onClick={() => handleFilter('trendreports')} variant="outline-success">Raports Gratuits</Button>
                <Button className="mr-2 btn" onClick={() => handleFilter('rankings')} variant="outline-success">Rankings</Button>
                <Button className="mr-2 btn" onClick={() => handleFilter('webinars')} variant="outline-success">Blog</Button>
            </div>
            <div className="Resources-page">
                <Container>
                    <Row xs={1} md={3} className="g-4">
                        {blogs.map((blog, index) => (
                            <Col key={index}>
                                <Card className="ranking-item"  as={Link} to={`/blogs/${blog.id}`}>
                                    <Card.Img variant="top" src={blog.image} />
                                    <Card.Body>
                                        <Card.Title>{blog.title}</Card.Title>
                                        <Card.Text></Card.Text>
                                    </Card.Body>
                                    <Card.Footer className="text-muted">
                                        {new Date(blog.createdAt).toLocaleDateString('en-US', {
                                            month: 'long',
                                            day: 'numeric',
                                            year: 'numeric',
                                        })}
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
                {/* Ajouter les boutons de filtrage ici */}
                <Footer />
            </div>
        </div>
    );
}

export default Resources;
