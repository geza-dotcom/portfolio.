const Footer = () => {
    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <a href="#home" className="footer-link" onClick={() => scrollToSection('home')}>Home</a>
                    <a href="#about" className="footer-link" onClick={() => scrollToSection('about')}>About</a>
                    <a href="#projects" className="footer-link" onClick={() => scrollToSection('projects')}>Projects</a>
                    <a href="#blog" className="footer-link" onClick={() => scrollToSection('blog')}>Blog</a>
                    <a href="#contact" className="footer-link" onClick={() => scrollToSection('contact')}>Contact</a>
                </div>
                <p className="copyright">
                    &copy; {new Date().getFullYear()} Gezahegn Yeshiye. All rights reserved.
                </p>
            </div>
        </footer>
    );
};
