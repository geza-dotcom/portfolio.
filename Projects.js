const Projects = ({ data }) => {
    return (
        <section id="projects">
            <h2 className="section-title">My Projects</h2>
            <div className="projects-grid fade-in">
                {data.projects.map((project) => (
                    <div key={project.id} className="project-card">
                        <img src={project.image} alt={project.title} className="project-image" />
                        <div className="project-content">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-tech">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="tech-tag">{tech}</span>
                                ))}
                            </div>
                            <div className="project-links">
                                <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                                    <i className="fab fa-github"></i> GitHub
                                </a>
                                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="project-link">
                                    <i className="fas fa-external-link-alt"></i> Live Demo
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
