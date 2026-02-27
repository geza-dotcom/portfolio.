"""
Simple API test script to verify all endpoints are working
"""
import requests
import json

BASE_URL = 'http://localhost:5000/api'

def test_health():
    """Test health check endpoint"""
    print("\n1. Testing Health Check...")
    try:
        response = requests.get(f'{BASE_URL}/health')
        print(f"   Status: {response.status_code}")
        print(f"   Response: {response.json()}")
        return response.status_code == 200
    except Exception as e:
        print(f"   Error: {e}")
        return False

def test_get_projects():
    """Test getting projects"""
    print("\n2. Testing GET Projects...")
    try:
        response = requests.get(f'{BASE_URL}/projects')
        print(f"   Status: {response.status_code}")
        data = response.json()
        print(f"   Found {len(data)} projects")
        if data:
            print(f"   First project: {data[0]['title']}")
        return response.status_code == 200
    except Exception as e:
        print(f"   Error: {e}")
        return False

def test_get_blog_posts():
    """Test getting blog posts"""
    print("\n3. Testing GET Blog Posts...")
    try:
        response = requests.get(f'{BASE_URL}/blog')
        print(f"   Status: {response.status_code}")
        data = response.json()
        print(f"   Found {len(data)} blog posts")
        if data:
            print(f"   First post: {data[0]['title']}")
        return response.status_code == 200
    except Exception as e:
        print(f"   Error: {e}")
        return False

def test_get_skills():
    """Test getting skills"""
    print("\n4. Testing GET Skills...")
    try:
        response = requests.get(f'{BASE_URL}/skills')
        print(f"   Status: {response.status_code}")
        data = response.json()
        print(f"   Found {len(data)} skills")
        if data:
            print(f"   First skill: {data[0]['name']} - {data[0]['level']}%")
        return response.status_code == 200
    except Exception as e:
        print(f"   Error: {e}")
        return False

def test_create_contact():
    """Test creating a contact message"""
    print("\n5. Testing POST Contact...")
    try:
        contact_data = {
            "name": "Test User",
            "email": "test@example.com",
            "message": "This is a test message from the API test script."
        }
        response = requests.post(
            f'{BASE_URL}/contact',
            json=contact_data,
            headers={'Content-Type': 'application/json'}
        )
        print(f"   Status: {response.status_code}")
        print(f"   Response: {response.json()}")
        return response.status_code == 201
    except Exception as e:
        print(f"   Error: {e}")
        return False

def test_create_project():
    """Test creating a project"""
    print("\n6. Testing POST Project...")
    try:
        project_data = {
            "title": "Test Project",
            "description": "This is a test project created by the API test script",
            "image": "https://via.placeholder.com/500x300",
            "technologies": ["Python", "Flask", "SQLite"],
            "github_url": "https://github.com/test/project",
            "demo_url": "https://test-project.com"
        }
        response = requests.post(
            f'{BASE_URL}/projects',
            json=project_data,
            headers={'Content-Type': 'application/json'}
        )
        print(f"   Status: {response.status_code}")
        print(f"   Response: {response.json()}")
        return response.status_code == 201
    except Exception as e:
        print(f"   Error: {e}")
        return False

def main():
    """Run all tests"""
    print("="*60)
    print("PORTFOLIO API TEST SUITE")
    print("="*60)
    print("\nMake sure the server is running on http://localhost:5000")
    print("="*60)
    
    tests = [
        test_health,
        test_get_projects,
        test_get_blog_posts,
        test_get_skills,
        test_create_contact,
        test_create_project
    ]
    
    results = []
    for test in tests:
        try:
            result = test()
            results.append(result)
        except Exception as e:
            print(f"   Test failed with error: {e}")
            results.append(False)
    
    print("\n" + "="*60)
    print("TEST RESULTS")
    print("="*60)
    passed = sum(results)
    total = len(results)
    print(f"Passed: {passed}/{total}")
    
    if passed == total:
        print("✅ All tests passed!")
    else:
        print("❌ Some tests failed. Check the output above.")
    
    print("="*60 + "\n")

if __name__ == '__main__':
    try:
        main()
    except KeyboardInterrupt:
        print("\n\nTests interrupted by user.")
    except Exception as e:
        print(f"\n\nUnexpected error: {e}")
        print("\nMake sure:")
        print("1. The server is running (python app.py)")
        print("2. requests library is installed (pip install requests)")
