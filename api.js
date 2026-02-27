// API Configuration
const API_BASE_URL = 'http://localhost:5000/api';

// API Helper Functions
const api = {
    // Projects
    async getProjects() {
        try {
            const response = await fetch(`${API_BASE_URL}/projects`);
            if (!response.ok) throw new Error('Failed to fetch projects');
            return await response.json();
        } catch (error) {
            console.error('Error fetching projects:', error);
            return [];
        }
    },

    async createProject(projectData) {
        try {
            const response = await fetch(`${API_BASE_URL}/projects`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(projectData)
            });
            if (!response.ok) throw new Error('Failed to create project');
            return await response.json();
        } catch (error) {
            console.error('Error creating project:', error);
            throw error;
        }
    },

    // Blog Posts
    async getBlogPosts(category = null) {
        try {
            const url = category && category !== 'All' 
                ? `${API_BASE_URL}/blog?category=${category}`
                : `${API_BASE_URL}/blog`;
            const response = await fetch(url);
            if (!response.ok) throw new Error('Failed to fetch blog posts');
            return await response.json();
        } catch (error) {
            console.error('Error fetching blog posts:', error);
            return [];
        }
    },

    async getBlogPost(id) {
        try {
            const response = await fetch(`${API_BASE_URL}/blog/${id}`);
            if (!response.ok) throw new Error('Failed to fetch blog post');
            return await response.json();
        } catch (error) {
            console.error('Error fetching blog post:', error);
            return null;
        }
    },

    async createBlogPost(postData) {
        try {
            const response = await fetch(`${API_BASE_URL}/blog`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData)
            });
            if (!response.ok) throw new Error('Failed to create blog post');
            return await response.json();
        } catch (error) {
            console.error('Error creating blog post:', error);
            throw error;
        }
    },

    // Contact
    async submitContact(contactData) {
        try {
            const response = await fetch(`${API_BASE_URL}/contact`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(contactData)
            });
            if (!response.ok) throw new Error('Failed to submit contact form');
            return await response.json();
        } catch (error) {
            console.error('Error submitting contact form:', error);
            throw error;
        }
    },

    async getContactMessages() {
        try {
            const response = await fetch(`${API_BASE_URL}/contact`);
            if (!response.ok) throw new Error('Failed to fetch contact messages');
            return await response.json();
        } catch (error) {
            console.error('Error fetching contact messages:', error);
            return [];
        }
    },

    // Skills
    async getSkills() {
        try {
            const response = await fetch(`${API_BASE_URL}/skills`);
            if (!response.ok) throw new Error('Failed to fetch skills');
            return await response.json();
        } catch (error) {
            console.error('Error fetching skills:', error);
            return [];
        }
    },

    async createSkill(skillData) {
        try {
            const response = await fetch(`${API_BASE_URL}/skills`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(skillData)
            });
            if (!response.ok) throw new Error('Failed to create skill');
            return await response.json();
        } catch (error) {
            console.error('Error creating skill:', error);
            throw error;
        }
    },

    // Health Check
    async healthCheck() {
        try {
            const response = await fetch(`${API_BASE_URL}/health`);
            if (!response.ok) throw new Error('Server is not responding');
            return await response.json();
        } catch (error) {
            console.error('Health check failed:', error);
            return { status: 'error', message: 'Server is not available' };
        }
    }
};
