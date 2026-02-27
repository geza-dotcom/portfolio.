const AboutAPI = ({ data }) => {
    const [skills, setSkills] = React.useState([]);
    const [skillsVisible, setSkillsVisible] = React.useState(false);
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        loadSkills();
        
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setSkillsVisible(true);
                    }
                });
            },
            { threshold: 0.3 }
        );

        const aboutSection = document.getElementById('about');
        if (aboutSection) {
            observer.observe(aboutSection);
        }

        return () => observer.disconnect();
    }, []);

    const loadSkills = async () => {
        setLoading(true);
        const data = await api.getSkills();
        setSkills(data);
        setLoading(false);
    };

    const downloadCV = () => {
        alert('CV download functionality would be implemented here with an actual CV file.');
    };

    return (
        <section id="about">
            <h2 className="section-title">About Me</h2>
            <div className="about-content fade-in">
                <div className="about-text">
                    {data.about.description.map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                    ))}
                    <button className="btn btn-primary" onClick={downloadCV} style={{ marginTop: '1.5rem' }}>
                        <i className="fas fa-download"></i> Download CV
                    </button>
                </div>
                <div className="skills-container">
                    <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-dark)' }}>My Skills</h3>
                    {loading ? (
                        <p>Loading skills...</p>
                    ) : (
                        skills.map((skill, index) => (
                            <div key={index} className="skill">
                                <div className="skill-name">
                                    <span>{skill.name}</span>
                                    <span>{skill.level}%</span>
                                </div>
                                <div className="skill-bar">
                                    <div 
                                        className="skill-progress" 
                                        style={{ 
                                            width: skillsVisible ? `${skill.level}%` : '0%'
                                        }}
                                    ></div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </section>
    );
};
