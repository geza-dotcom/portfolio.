const BlogAPI = () => {
    const [blogPosts, setBlogPosts] = React.useState([]);
    const [selectedCategory, setSelectedCategory] = React.useState('All');
    const [loading, setLoading] = React.useState(true);
    
    React.useEffect(() => {
        loadBlogPosts();
    }, [selectedCategory]);

    const loadBlogPosts = async () => {
        setLoading(true);
        const data = await api.getBlogPosts(selectedCategory);
        setBlogPosts(data);
        setLoading(false);
    };

    const categories = ['All', 'React', 'CSS', 'JavaScript', 'Web Design', 'Performance', 'Accessibility'];

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString('en-US', options);
    };

    if (loading) {
        return (
            <section id="blog">
                <h2 className="section-title">Tech Blog</h2>
                <div style={{ textAlign: 'center', padding: '3rem' }}>
                    <p>Loading blog posts...</p>
                </div>
            </section>
        );
    }

    return (
        <section id="blog">
            <h2 className="section-title">Tech Blog</h2>
            
            <div style={{ 
                display: 'flex', 
                justifyContent: 'center', 
                gap: '1rem', 
                marginBottom: '3rem',
                flexWrap: 'wrap'
            }}>
                {categories.map(category => (
                    <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className="btn"
                        style={{
                            background: selectedCategory === category ? 'var(--primary-color)' : 'transparent',
                            color: selectedCategory === category ? 'white' : 'var(--primary-color)',
                            border: '2px solid var(--primary-color)',
                            padding: '0.5rem 1.5rem'
                        }}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className="blog-grid fade-in">
                {blogPosts.map((post) => (
                    <div key={post.id} className="blog-card">
                        <img src={post.image} alt={post.title} className="blog-image" />
                        <div className="blog-content">
                            <h3 className="blog-title">{post.title}</h3>
                            <div className="blog-meta">
                                <i className="fas fa-calendar"></i> {formatDate(post.date)} • 
                                <i className="fas fa-tag" style={{ marginLeft: '0.5rem' }}></i> {post.category}
                            </div>
                            <p className="blog-excerpt">{post.excerpt}</p>
                            <a href="#" className="read-more" onClick={(e) => {
                                e.preventDefault();
                                alert(`Full blog post "${post.title}" would be displayed here.`);
                            }}>
                                Read More <i className="fas fa-arrow-right"></i>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
