# Portfolio Backend Server

Flask-based REST API server with SQLite database for the portfolio website.

## Features

- RESTful API endpoints
- SQLite database for data persistence
- CORS enabled for frontend integration
- Automatic database initialization with sample data
- Contact form submission handling
- Blog post management
- Project management
- Skills management

## Prerequisites

- Python 3.7 or higher
- pip (Python package manager)

## Installation

1. Navigate to the server directory:
```bash
cd server
```

2. Install required packages:
```bash
pip install -r requirements.txt
```

Or install manually:
```bash
pip install Flask flask-cors
```

## Running the Server

Start the server:
```bash
python app.py
```

The server will start on `http://localhost:5000`

On first run, the database will be automatically created and populated with sample data.

## API Endpoints

### Health Check
- `GET /api/health` - Check server status

### Projects
- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create a new project

### Blog Posts
- `GET /api/blog` - Get all blog posts
- `GET /api/blog?category=React` - Get blog posts by category
- `GET /api/blog/:id` - Get a single blog post
- `POST /api/blog` - Create a new blog post

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Get all contact messages (admin)

### Skills
- `GET /api/skills` - Get all skills
- `POST /api/skills` - Create a new skill

## API Examples

### Get All Projects
```bash
curl http://localhost:5000/api/projects
```

### Create a Project
```bash
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -d '{
    "title": "My New Project",
    "description": "Project description",
    "image": "https://example.com/image.jpg",
    "technologies": ["React", "Node.js"],
    "github_url": "https://github.com/user/repo",
    "demo_url": "https://demo.example.com"
  }'
```

### Submit Contact Form
```bash
curl -X POST http://localhost:5000/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john@example.com",
    "message": "Hello, I would like to connect!"
  }'
```

### Get Blog Posts by Category
```bash
curl http://localhost:5000/api/blog?category=React
```

## Database Schema

### projects
- id (INTEGER PRIMARY KEY)
- title (TEXT)
- description (TEXT)
- image (TEXT)
- technologies (TEXT - JSON array)
- github_url (TEXT)
- demo_url (TEXT)
- created_at (TIMESTAMP)

### blog_posts
- id (INTEGER PRIMARY KEY)
- title (TEXT)
- excerpt (TEXT)
- content (TEXT)
- image (TEXT)
- category (TEXT)
- date (TEXT)
- created_at (TIMESTAMP)

### contact_messages
- id (INTEGER PRIMARY KEY)
- name (TEXT)
- email (TEXT)
- message (TEXT)
- created_at (TIMESTAMP)
- read (BOOLEAN)

### skills
- id (INTEGER PRIMARY KEY)
- name (TEXT)
- level (INTEGER)
- category (TEXT)

## Database Management

The database file `portfolio.db` is created automatically in the server directory.

To reset the database:
1. Stop the server
2. Delete `portfolio.db`
3. Restart the server (it will recreate with sample data)

## Development

The server runs in debug mode by default, which provides:
- Auto-reload on code changes
- Detailed error messages
- Interactive debugger

For production, set `debug=False` in `app.py`.

## Troubleshooting

### Port Already in Use
If port 5000 is already in use, change the port in `app.py`:
```python
app.run(debug=True, host='0.0.0.0', port=5001)
```

### CORS Issues
CORS is enabled for all origins. For production, restrict origins in `app.py`:
```python
CORS(app, origins=['https://yourdomain.com'])
```

### Database Locked
If you get a "database is locked" error, ensure only one instance of the server is running.

## Security Notes

This is a development server. For production:
- Add authentication for admin endpoints
- Implement rate limiting
- Use environment variables for configuration
- Add input validation and sanitization
- Use a production WSGI server (gunicorn, waitress)
- Enable HTTPS
- Restrict CORS origins
