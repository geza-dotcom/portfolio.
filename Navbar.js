const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    return (
        <nav className="navbar">
            <div className="nav-container">
                <a href="#" className="logo">GY</a>
                
                <ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
                    <li><a href="#home" className="nav-link" onClick={() => scrollToSection('home')}>Home</a></li>
                    <li><a href="#about" className="nav-link" onClick={() => scrollToSection('about')}>About</a></li>
                    <li><a href="#projects" className="nav-link" onClick={() => scrollToSection('projects')}>Projects</a></li>
                    <li><a href="#blog" className="nav-link" onClick={() => scrollToSection('blog')}>Blog</a></li>
                    <li><a href="#contact" className="nav-link" onClick={() => scrollToSection('contact')}>Contact</a></li>
                    <li>
                        <button className="theme-toggle" onClick={toggleDarkMode}>
                            <i className={`fas ${darkMode ? 'fa-sun' : 'fa-moon'}`}></i>
                        </button>
                    </li>
                </ul>
                
                <button 
                    className="mobile-menu-btn" 
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
                </button>
            </div>
        </nav>
    );
};
