const App = () => {
    const [darkMode, setDarkMode] = React.useState(false);

    React.useEffect(() => {
        // Check for saved theme preference
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setDarkMode(true);
            document.body.classList.add('dark-mode');
        }
    }, []);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark-mode');
        
        // Save theme preference
        localStorage.setItem('theme', !darkMode ? 'dark' : 'light');
    };

    return (
        <div className="app">
            <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <Hero data={portfolioData} />
            <About data={portfolioData} />
            <Projects data={portfolioData} />
            <Blog data={portfolioData} />
            <Contact data={portfolioData} />
            <Footer />
            <ScrollToTop />
        </div>
    );
};

// Render the app
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
