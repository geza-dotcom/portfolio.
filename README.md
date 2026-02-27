# Gezahegn Yeshiye - Personal Portfolio & Tech Blog

A modern, responsive personal portfolio and tech blog website built with HTML, CSS, JavaScript, and React (via CDN). Includes optional backend server with SQLite database for dynamic content management.

## Two Versions Available

### 1. Static Version (index.html)
- No server required
- Data from `js/data.js`
- Perfect for GitHub Pages, Netlify
- Just open in browser

### 2. Dynamic Version (index-with-api.html)
- Backend server with database
- REST API for data management
- Persistent storage
- Contact form saves to database

## Features

✨ **Modern Design**
- Clean, professional UI with smooth animations
- Dark/Light mode toggle
- Responsive mobile-first design
- Smooth scrolling navigation

🎯 **Sections**
- Hero section with animated typing effect
- About section with animated skill progress bars
- Projects showcase with 6 sample projects
- Tech blog with category filtering
- Contact form with validation
- Social media integration

🚀 **Technical Highlights**
- React functional components
- Form validation
- Local storage for theme preference
- Intersection Observer for animations
- Fully responsive (mobile, tablet, desktop)
- No build tools required - runs directly in browser

💾 **Backend Features** (Optional)
- Flask REST API server
- SQLite database
- CRUD operations for projects, blog posts, skills
- Contact form submission storage
- Auto-initialization with sample data

## Project Structure

```
├── index.html              # Main HTML file
├── styles/
│   └── main.css           # All CSS styles
├── js/
│   ├── data.js            # Portfolio data
│   ├── App.js             # Main React app
│   └── components/
│       ├── Navbar.js      # Navigation component
│       ├── Hero.js        # Hero section
│       ├── About.js       # About section
│       ├── Projects.js    # Projects showcase
│       ├── Blog.js        # Blog section
│       ├── Contact.js     # Contact form
│       ├── Footer.js      # Footer component
│       └── ScrollToTop.js # Scroll to top button
└── README.md
```

## Quick Start

### Static Version (Easiest)
1. Open `index.html` in your browser
2. Done! 🎉

### With Backend Server
1. Run `START_SERVER.bat` (Windows)
2. Open `index-with-api.html` in your browser
3. Data now loads from database

📖 **For detailed setup instructions, see [SETUP.md](SETUP.md)**

## Getting Started

### Local Development

**Static Version:**
1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! No installation or build process needed.

**Backend Version:**
1. Install Python 3.7+ from [python.org](https://www.python.org/)
2. Run `START_SERVER.bat` (Windows) or:
   ```bash
   cd server
   pip install -r requirements.txt
   python app.py
   ```
3. Open `index-with-api.html` in your browser

### Customization

**Static Version:**
Edit `js/data.js` to customize:
- Personal information
- Skills and skill levels
- Projects
- Blog posts
- Social media links

**Backend Version:**
Use the REST API to add/edit content:
```bash
# Add a project
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -d '{"title":"My Project","description":"..."}'
```

See `server/README.md` for complete API documentation.

## Deployment

### GitHub Pages

1. Create a new repository on GitHub
2. Push your code to the repository
3. Go to Settings > Pages
4. Select your main branch as the source
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify

1. Create a Netlify account
2. Drag and drop your project folder to Netlify
3. Your site will be live instantly with a custom URL

### Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in your project directory
3. Follow the prompts to deploy

## Features to Implement

To make this production-ready, consider adding:

- [ ] Replace placeholder images with actual photos
- [ ] Add real project links
- [ ] Create actual blog post pages
- [ ] Add a real CV file for download
- [ ] Implement backend for contact form (EmailJS, Formspree, etc.)
- [ ] Add Google Analytics
- [ ] Optimize images
- [ ] Add meta tags for SEO
- [ ] Create a favicon

## Backend API Endpoints

When using the backend server, these endpoints are available:

### Projects
- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create new project

### Blog
- `GET /api/blog` - Get all blog posts
- `GET /api/blog?category=React` - Filter by category
- `GET /api/blog/:id` - Get single post
- `POST /api/blog` - Create new post

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all messages (admin)

### Skills
- `GET /api/skills` - Get all skills
- `POST /api/skills` - Add new skill

### Health
- `GET /api/health` - Check server status

📖 **Full API documentation: [server/README.md](server/README.md)**

## Database Management

View database contents:
```bash
cd server
python db_viewer.py
```

Reset database:
1. Stop the server
2. Delete `server/portfolio.db`
3. Restart server (auto-recreates with sample data)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- JavaScript (ES6+)
- React 18 (via CDN)
- Font Awesome Icons

## License

This project is open source and available under the MIT License.

## Contact

Gezahegn Yeshiye
- GitHub: [@gezahegn](https://github.com/gezahegn)
- LinkedIn: [gezahegn-yeshiye](https://linkedin.com/in/gezahegn-yeshiye)
- Twitter: [@gezahegn](https://twitter.com/gezahegn)

---

Made with ❤️ by Gezahegn Yeshiye
