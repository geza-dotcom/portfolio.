const Hero = ({ data }) => {
    const [displayText, setDisplayText] = React.useState('');
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const fullText = data.personal.title;

    React.useEffect(() => {
        if (currentIndex < fullText.length) {
            const timeout = setTimeout(() => {
                setDisplayText(prev => prev + fullText[currentIndex]);
                setCurrentIndex(prev => prev + 1);
            }, 100);
            return () => clearTimeout(timeout);
        }
    }, [currentIndex, fullText]);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section id="home" className="hero">
            <div className="hero-container fade-in">
                <div className="hero-content">
                    <h1>Hi, I'm {data.personal.name}</h1>
                    <p className="title">
                        <span className="typing-text">{displayText}</span>
                    </p>
                    <p>{data.personal.bio}</p>
                    <div className="hero-buttons">
                        <button className="btn btn-primary" onClick={() => scrollToSection('projects')}>
                            View Projects
                        </button>
                        <button className="btn btn-secondary" onClick={() => scrollToSection('contact')}>
                            Contact Me
                        </button>
                    </div>
                </div>
                <div className="hero-image">
                    <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop" 
                        alt={data.personal.name}
                        className="profile-img"
                    />
                </div>
            </div>
        </section>
    );
};
