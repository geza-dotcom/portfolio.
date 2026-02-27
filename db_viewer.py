"""
Simple database viewer to inspect the portfolio database
"""
import sqlite3
import json
from datetime import datetime

DB_PATH = 'portfolio.db'

def print_table(title, headers, rows):
    """Print a formatted table"""
    print(f"\n{'='*80}")
    print(f"{title}")
    print(f"{'='*80}")
    
    if not rows:
        print("No data found.")
        return
    
    # Print headers
    print(" | ".join(headers))
    print("-" * 80)
    
    # Print rows
    for row in rows:
        print(" | ".join(str(item)[:30] for item in row))
    
    print(f"\nTotal: {len(rows)} records")

def view_projects():
    """View all projects"""
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    cursor.execute('SELECT id, title, description, technologies FROM projects')
    rows = cursor.fetchall()
    
    print_table("PROJECTS", ["ID", "Title", "Description", "Technologies"], rows)
    conn.close()

def view_blog_posts():
    """View all blog posts"""
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    cursor.execute('SELECT id, title, category, date FROM blog_posts')
    rows = cursor.fetchall()
    
    print_table("BLOG POSTS", ["ID", "Title", "Category", "Date"], rows)
    conn.close()

def view_contact_messages():
    """View all contact messages"""
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    cursor.execute('SELECT id, name, email, message, created_at FROM contact_messages')
    rows = cursor.fetchall()
    
    print_table("CONTACT MESSAGES", ["ID", "Name", "Email", "Message", "Date"], rows)
    conn.close()

def view_skills():
    """View all skills"""
    conn = sqlite3.connect(DB_PATH)
    cursor = conn.cursor()
    
    cursor.execute('SELECT id, name, level, category FROM skills')
    rows = cursor.fetchall()
    
    print_table("SKILLS", ["ID", "Name", "Level", "Category"], rows)
    conn.close()

def main():
    """Main function"""
    print("\n" + "="*80)
    print("PORTFOLIO DATABASE VIEWER")
    print("="*80)
    
    try:
        view_projects()
        view_blog_posts()
        view_skills()
        view_contact_messages()
        
        print("\n" + "="*80)
        print("Database viewing complete!")
        print("="*80 + "\n")
        
    except sqlite3.OperationalError as e:
        print(f"\nError: {e}")
        print("Make sure the database exists. Run the server first to create it.")
    except Exception as e:
        print(f"\nUnexpected error: {e}")

if __name__ == '__main__':
    main()
