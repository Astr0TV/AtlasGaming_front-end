import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './BlogDetails.css';
import CustomNavbar from '../../Navbar/navbar';
import Footer from '../../footer/footer';

const BlogDetails = () => {
    const { id } = useParams(); // Récupérer l'ID du blog à partir de l'URL
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        const fetchBlogDetails = async () => {
            try {
                const response = await fetch(`http://localhost:8090/api/blogs/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setBlog(data); // Mettre à jour l'état du blog avec les détails récupérés depuis l'API
                } else {
                    console.error('Error fetching blog details:', response.statusText);
                }
            } catch (error) {
                console.error('Error fetching blog details:', error);
            }
        };

        fetchBlogDetails();
    }, [id]); // Effectuer la requête chaque fois que l'ID change

    if (!blog) {
        return <div>Loading...</div>; // Afficher un indicateur de chargement tant que les détails du blog sont récupérés
    }

    return (
        <div>
            <CustomNavbar />
            <div class="BlogDetails-header" >
                <h1 class="max-w-3xl mb-3 max-w-4xl text-balance text-2xl leading-tight text-white sm:line-clamp-4 sm:text-2xl md:line-clamp-3 lg:text-4xl">
                    {blog.title}
                </h1>
                <h3 className='BlogDetails-headertime'>
                    {new Date(blog.createdAt).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric',
                        year: 'numeric',
                    })}</h3>
            </div>
            <div className="blog-details" dangerouslySetInnerHTML={{ __html: blog.content }} />
            <Footer />
        </div>
    );
}

export default BlogDetails;
