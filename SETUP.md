# Portfolio Website Setup Guide

Complete guide to set up and run your portfolio website with backend server and database.

## Quick Start

### Option 1: Static Website (No Server Required)
Simply open `index.html` in your browser. This uses static data from `js/data.js`.

### Option 2: With Backend Server (Dynamic Data)
1. Run `START_SERVER.bat` (Windows) to start the backend server
2. Open `index-with-api.html` in your browser
3. The website will now load data from the database

## Detailed Setup

### Prerequisites

**For Static Version:**
- Any modern web browser

**For Backend Version:**
- Python 3.7 or higher
- pip (comes with Python)

### Installing Python (Windows)

1. Download Python from https://www.python.org/downloads/
2. Run the installer
3. ✅ **IMPORTANT:** Check "Add Python to PATH" during installation
4. Click "Install Now"
5. Verify installation:
   ```bash
   python --version
   ```

### Backend Server Setup

#### Windows

1. Double-click `START_SERVER.bat`
2. The script will:
   - Check Python installation
   - Install required packages (Flask, flask-cors)
   - Create and initialize the database
   - Start the server on http://localhost:5000

#### Manual Setup (All Platforms)

```bash
# Navigate to server directory
cd server

# Install dependencies
pip install -r requirements.txt

# Start the server
python app.py
```

### Viewing the Website

**Static Version:**
- Open `index.html` in your browser

**API Version:**
- Make sure the server is running
- Open `index-with-api.html` in your browser

## Project Structure

```
portfolio/
├── index.html              # Static version (no server needed)
├── index-with-api.html     # Dynamic version (requires server)
├── styles/
│   └── main.css           # All styles
├── js/
│   ├── data.js            # Static data (fallback)
│   ├── api.js             # API helper functions
│   ├── App.js             # Main React app
│   └── components/        # React components
│       ├── Navbar.js
│       ├── Hero.js
│       ├── About.js       # Static version
│       ├── AboutAPI.js    # API version
│       ├── Projects.js    # Static version
│       ├── ProjectsAPI.js # API version
│       ├── Blog.js        # Static version
│       ├── BlogAPI.js     # API version
│       ├── Contact.js
│       ├── Footer.js
│       └── ScrollToTop.js
├── server/
│   ├── app.py            # Flask backend server
│   ├── requirements.txt  # Python dependencies
│   ├── portfolio.db      # SQLite database (auto-created)
│   └── README.md         # Server documentation
└── START_SERVER.bat      # Windows server startup script
```

## Features

### Static Version (index.html)
✅ All UI features work
✅ No installation required
✅ Contact form shows success message (no actual sending)
✅ Data from js/data.js

### API Version (index-with-api.html)
✅ All UI features work
✅ Data loaded from database
✅ Contact form saves to database
✅ Can add/edit projects, blog posts, skills via API
✅ Persistent data storage

## Customization

### Update Personal Information

Edit `js/data.js`:
```javascript
const portfolioData = {
    personal: {
        name: "Your Name",
        title: "Your Title",
        bio: "Your bio...",
        // ...
    }
    // ...
};
```

### Add Projects via API

```bash
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My Project",
    "description": "Description",
    "technologies": ["React", "CSS"],
    "github_url": "https://github.com/...",
    "demo_url": "https://..."
  }'
```

### Add Blog Posts via API

```bash
curl -X POST http://localhost:5000/api/blog \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My Blog Post",
    "excerpt": "Short description",
    "content": "Full content...",
    "category": "React",
    "date": "2024-01-15"
  }'
```

## Deployment

### Static Version

**GitHub Pages:**
1. Push code to GitHub
2. Settings > Pages > Select main branch
3. Site live at `https://username.github.io/repo-name`

**Netlify:**
1. Drag and drop project folder
2. Site live instantly

### Backend Version

**Heroku:**
1. Add `Procfile`: `web: cd server && gunicorn app:app`
2. Add `runtime.txt`: `python-3.11.0`
3. Deploy via Heroku CLI or GitHub integration

**Railway/Render:**
- Connect GitHub repo
- Set start command: `cd server && python app.py`
- Deploy automatically

## Troubleshooting

### Server Won't Start

**"Python not found"**
- Install Python from python.org
- Make sure "Add to PATH" was checked during installation

**"Port 5000 already in use"**
- Another application is using port 5000
- Change port in `server/app.py`: `app.run(port=5001)`

**"Module not found"**
- Run: `pip install -r server/requirements.txt`

### Website Issues

**"Server is offline" message**
- Make sure backend server is running
- Check http://localhost:5000/api/health in browser

**Data not loading**
- Check browser console for errors (F12)
- Verify server is running on port 5000
- Check CORS settings if using different ports

**Contact form not working**
- Static version: Shows success message only
- API version: Check server is running and check server logs

## API Documentation

See `server/README.md` for complete API documentation including:
- All available endpoints
- Request/response examples
- Database schema
- Security considerations

## Support

For issues or questions:
1. Check this guide
2. Check `server/README.md`
3. Check browser console (F12) for errors
4. Check server logs in terminal

## Next Steps

1. ✅ Replace placeholder images with your photos
2. ✅ Update personal information in `js/data.js`
3. ✅ Add your real projects via API or data.js
4. ✅ Write your blog posts
5. ✅ Add your actual CV file
6. ✅ Configure contact form email service (EmailJS, Formspree)
7. ✅ Deploy to hosting platform
8. ✅ Add custom domain
9. ✅ Set up analytics (Google Analytics)
10. ✅ Optimize images and performance

---

Made with ❤️ by Gezahegn Yeshiye
