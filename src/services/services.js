const API_URL = 'http://localhost:8090/api';

export const getAllBlogs = async () => {
    try {
        const response = await fetch(`${API_URL}/blogs/allBlog`);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error('Error fetching blogs');
        }
    } catch (error) {
        throw new Error('Error fetching blogs: ' + error.message);
    }
};

export const addBlog = async (formData) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData,
        });
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error('Error adding blog');
        }
    } catch (error) {
        throw new Error('Error adding blog: ' + error.message);
    }
};

export const getBlogsByType = async (type) => {
    try {
        const response = await fetch(`http://localhost:8090/api/blogs/byType/${type}`);
        if (response.ok) {
            const data = await response.json();
            return data;
        } else {
            throw new Error('Error fetching blogs by type');
        }
    } catch (error) {
        throw new Error('Error fetching blogs by type: ' + error.message);
    }
};