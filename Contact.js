const Contact = ({ data }) => {
    const [formData, setFormData] = React.useState({
        name: '',
        email: '',
        message: ''
    });
    
    const [errors, setErrors] = React.useState({});
    const [submitted, setSubmitted] = React.useState(false);

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.name.trim()) {
            newErrors.name = 'Name is required';
        }
        
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        
        if (!formData.message.trim()) {
            newErrors.message = 'Message is required';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Message must be at least 10 characters';
        }
        
        return newErrors;
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear error for this field when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const newErrors = validateForm();
        
        if (Object.keys(newErrors).length === 0) {
            try {
                // Submit to API
                await api.submitContact(formData);
                console.log('Form submitted:', formData);
                setSubmitted(true);
                setFormData({ name: '', email: '', message: '' });
                
                setTimeout(() => {
                    setSubmitted(false);
                }, 5000);
            } catch (error) {
                console.error('Failed to submit form:', error);
                alert('Failed to send message. Please try again.');
            }
        } else {
            setErrors(newErrors);
        }
    };

    return (
        <section id="contact">
            <h2 className="section-title">Get In Touch</h2>
            <div className="contact-container fade-in">
                <div className="contact-info">
                    <h3>Let's Connect</h3>
                    <p>
                        I'm always interested in hearing about new projects and opportunities. 
                        Whether you have a question or just want to say hi, feel free to reach out!
                    </p>
                    <div className="social-links">
                        <a href={data.social.github} target="_blank" rel="noopener noreferrer" className="social-link">
                            <i className="fab fa-github"></i>
                        </a>
                        <a href={data.social.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href={data.social.twitter} target="_blank" rel="noopener noreferrer" className="social-link">
                            <i className="fab fa-twitter"></i>
                        </a>
                    </div>
                </div>
                
                <form className="contact-form" onSubmit={handleSubmit}>
                    {submitted && (
                        <div style={{
                            padding: '1rem',
                            background: '#10b981',
                            color: 'white',
                            borderRadius: '8px',
                            marginBottom: '1rem'
                        }}>
                            Thank you! Your message has been sent successfully.
                        </div>
                    )}
                    
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                        />
                        {errors.name && <span className="error-message">{errors.name}</span>}
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="your.email@example.com"
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your message here..."
                        ></textarea>
                        {errors.message && <span className="error-message">{errors.message}</span>}
                    </div>
                    
                    <button type="submit" className="btn btn-primary">
                        <i className="fas fa-paper-plane"></i> Send Message
                    </button>
                </form>
            </div>
        </section>
    );
};
