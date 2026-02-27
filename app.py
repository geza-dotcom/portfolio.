from flask import Flask, request, jsonify
from flask_cors import CORS
import sqlite3
import json
from datetime import datetime
import os

app = Flask(__name__)
CORS(app)

# Database setup
DB_PATH = 'portfolio.db'

def init_db():
    """Initialize the database with tables"""
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    # Projects table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS projects (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            description TEXT,
            image TEXT,
            technologies TEXT,
            github_url TEXT,
            demo_url TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    
    # Blog posts table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS blog_posts (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            excerpt TEXT,
            content TEXT,
            image TEXT,
            category TEXT,
            date TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    ''')
    
    # Contact messages table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS contact_messages (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL,
            message TEXT NOT NULL,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            read BOOLEAN DEFAULT 0
        )
    ''')
    
    # Skills table
    cursor.execute('''
        CREATE TABLE IF NOT EXISTS skills (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            level INTEGER NOT NULL,
            category TEXT
        )
    ''')
    
    conn.commit()
    conn.close()

def seed_data():
    """Seed initial data if tables are empty"""
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    # Check if data exists
    cursor.execute('SELECT COUNT(*) FROM projects')
    if cursor.fetchone()[0] == 0:
        # Insert sample projects
        projects = [
            ("E-Commerce Platform", "A full-featured e-commerce website with shopping cart", 
             "https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop",
             '["React", "CSS3", "JavaScript"]', "https://github.com/gezahegn/ecommerce", 
             "https://demo-ecommerce.netlify.app"),
            ("Weather Dashboard", "Real-time weather application with location search",
             "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&h=300&fit=crop",
             '["JavaScript", "API", "CSS3"]', "https://github.com/gezahegn/weather-app",
             "https://weather-dashboard-demo.netlify.app")
        ]
        
        cursor.executemany('''
            INSERT INTO projects (title, description, image, technologies, github_url, demo_url)
            VALUES (?, ?, ?, ?, ?, ?)
        ''', projects)
        
        # Insert sample skills
        skills = [
            ("HTML/CSS", 95, "Frontend"),
            ("JavaScript", 90, "Frontend"),
            ("React", 85, "Frontend"),
            ("Python", 80, "Backend"),
            ("SQL", 75, "Database")
        ]
        
        cursor.executemany('''
            INSERT INTO skills (name, level, category)
            VALUES (?, ?, ?)
        ''', skills)
        
        # Insert sample blog posts
        blog_posts = [
            ("Getting Started with React Hooks", 
             "Learn how to use React Hooks to manage state and side effects",
             "Full article content about React Hooks...",
             "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=300&fit=crop",
             "React", "2024-01-15"),
            ("CSS Grid vs Flexbox", 
             "Understanding the differences between CSS Grid and Flexbox",
             "Full article content about CSS layouts...",
             "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=500&h=300&fit=crop",
             "CSS", "2024-01-10")
        ]
        
        cursor.executemany('''
            INSERT INTO blog_posts (title, excerpt, content, image, category, date)
            VALUES (?, ?, ?, ?, ?, ?)
        ''', blog_posts)
    
    conn.commit()
    conn.close()

# API Routes

@app.route('/api/projects', methods=['GET'])
def get_projects():
    """Get all projects"""
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    
    cursor.execute('SELECT * FROM projects ORDER BY created_at DESC')
    projects = [dict(row) for row in cursor.fetchall()]
    
    # Parse technologies JSON
    for project in projects:
        project['technologies'] = json.loads(project['technologies'])
    
    conn.close()
    return jsonify(projects)

@app.route('/api/projects', methods=['POST'])
def create_project():
    """Create a new project"""
    data = request.json
    
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    cursor.execute('''
        INSERT INTO projects (title, description, image, technologies, github_url, demo_url)
        VALUES (?, ?, ?, ?, ?, ?)
    ''', (
        data['title'],
        data['description'],
        data.get('image', ''),
        json.dumps(data.get('technologies', [])),
        data.get('github_url', ''),
        data.get('demo_url', '')
    ))
    
    conn.commit()
    project_id = cursor.lastrowid
    conn.close()
    
    return jsonify({'id': project_id, 'message': 'Project created successfully'}), 201

@app.route('/api/blog', methods=['GET'])
def get_blog_posts():
    """Get all blog posts"""
    category = request.args.get('category')
    
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    
    if category and category != 'All':
        cursor.execute('SELECT * FROM blog_posts WHERE category = ? ORDER BY date DESC', (category,))
    else:
        cursor.execute('SELECT * FROM blog_posts ORDER BY date DESC')
    
    posts = [dict(row) for row in cursor.fetchall()]
    conn.close()
    
    return jsonify(posts)

@app.route('/api/blog/<int:post_id>', methods=['GET'])
def get_blog_post(post_id):
    """Get a single blog post"""
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    
    cursor.execute('SELECT * FROM blog_posts WHERE id = ?', (post_id,))
    post = cursor.fetchone()
    conn.close()
    
    if post:
        return jsonify(dict(post))
    return jsonify({'error': 'Post not found'}), 404

@app.route('/api/blog', methods=['POST'])
def create_blog_post():
    """Create a new blog post"""
    data = request.json
    
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    cursor.execute('''
        INSERT INTO blog_posts (title, excerpt, content, image, category, date)
        VALUES (?, ?, ?, ?, ?, ?)
    ''', (
        data['title'],
        data['excerpt'],
        data['content'],
        data.get('image', ''),
        data['category'],
        data.get('date', datetime.now().strftime('%Y-%m-%d'))
    ))
    
    conn.commit()
    post_id = cursor.lastrowid
    conn.close()
    
    return jsonify({'id': post_id, 'message': 'Blog post created successfully'}), 201

@app.route('/api/contact', methods=['POST'])
def submit_contact():
    """Submit a contact form message"""
    data = request.json
    
    # Validate required fields
    if not all(key in data for key in ['name', 'email', 'message']):
        return jsonify({'error': 'Missing required fields'}), 400
    
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    cursor.execute('''
        INSERT INTO contact_messages (name, email, message)
        VALUES (?, ?, ?)
    ''', (data['name'], data['email'], data['message']))
    
    conn.commit()
    message_id = cursor.lastrowid
    conn.close()
    
    return jsonify({'id': message_id, 'message': 'Message sent successfully'}), 201

@app.route('/api/contact', methods=['GET'])
def get_contact_messages():
    """Get all contact messages (admin only)"""
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    
    cursor.execute('SELECT * FROM contact_messages ORDER BY created_at DESC')
    messages = [dict(row) for row in cursor.fetchall()]
    conn.close()
    
    return jsonify(messages)

@app.route('/api/skills', methods=['GET'])
def get_skills():
    """Get all skills"""
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    cursor = conn.cursor()
    
    cursor.execute('SELECT * FROM skills ORDER BY level DESC')
    skills = [dict(row) for row in cursor.fetchall()]
    conn.close()
    
    return jsonify(skills)

@app.route('/api/skills', methods=['POST'])
def create_skill():
    """Create a new skill"""
    data = request.json
    
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    cursor.execute('''
        INSERT INTO skills (name, level, category)
        VALUES (?, ?, ?)
    ''', (data['name'], data['level'], data.get('category', 'General')))
    
    conn.commit()
    skill_id = cursor.lastrowid
    conn.close()
    
    return jsonify({'id': skill_id, 'message': 'Skill created successfully'}), 201

@app.route('/api/health', methods=['GET'])
def health_check():
    """Health check endpoint"""
    return jsonify({'status': 'healthy', 'message': 'Server is running'})

if __name__ == '__main__':
    # Initialize database
    if not os.path.exists(DB_PATH):
        print("Initializing database...")
        init_db()
        seed_data()
        print("Database initialized with sample data!")
    
    print("Starting Flask server on http://localhost:5000")
    print("API endpoints available at http://localhost:5000/api/")
    app.run(debug=True, host='0.0.0.0', port=5000)
