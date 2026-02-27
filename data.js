// Portfolio Data
const portfolioData = {
    personal: {
        name: "Gezahegn Yeshiye",
        title: "Frontend Developer | Tech Blogger",
        bio: "Passionate frontend developer with expertise in building modern, responsive web applications. I love creating intuitive user experiences and sharing knowledge through tech blogging.",
        email: "gezahegn@example.com",
        phone: "+251 912 345 678",
        location: "Addis Ababa, Ethiopia"
    },
    
    about: {
        description: [
            "Hello! I'm Gezahegn Yeshiye, a passionate frontend developer specializing in creating beautiful, functional, and user-friendly websites and applications.",
            "With a strong foundation in HTML, CSS, JavaScript, and React, I bring ideas to life through clean code and modern design principles. I'm constantly learning and staying up-to-date with the latest web technologies.",
            "When I'm not coding, I enjoy writing technical blog posts to share my knowledge and experiences with the developer community."
        ]
    },
    
    skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "React", level: 85 },
        { name: "Responsive Design", level: 92 },
        { name: "Git/GitHub", level: 88 }
    ],
    
    projects: [
        {
            id: 1,
            title: "E-Commerce Platform",
            description: "A full-featured e-commerce website with shopping cart, product filtering, and checkout functionality.",
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=500&h=300&fit=crop",
            technologies: ["React", "CSS3", "JavaScript"],
            github: "https://github.com/gezahegn/ecommerce",
            demo: "https://demo-ecommerce.netlify.app"
        },
        {
            id: 2,
            title: "Weather Dashboard",
            description: "Real-time weather application with location search and 7-day forecast using weather API.",
            image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&h=300&fit=crop",
            technologies: ["JavaScript", "API", "CSS3"],
            github: "https://github.com/gezahegn/weather-app",
            demo: "https://weather-dashboard-demo.netlify.app"
        },
        {
            id: 3,
            title: "Task Management App",
            description: "Productivity app for managing tasks with drag-and-drop functionality and local storage.",
            image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=500&h=300&fit=crop",
            technologies: ["React", "LocalStorage", "CSS3"],
            github: "https://github.com/gezahegn/task-manager",
            demo: "https://task-manager-demo.netlify.app"
        },
        {
            id: 4,
            title: "Restaurant Website",
            description: "Modern restaurant website with menu display, online reservation system, and contact form.",
            image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=500&h=300&fit=crop",
            technologies: ["HTML5", "CSS3", "JavaScript"],
            github: "https://github.com/gezahegn/restaurant-site",
            demo: "https://restaurant-demo.netlify.app"
        },
        {
            id: 5,
            title: "Portfolio Generator",
            description: "Tool that helps developers create beautiful portfolio websites with customizable templates.",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop",
            technologies: ["React", "CSS3", "JavaScript"],
            github: "https://github.com/gezahegn/portfolio-generator",
            demo: "https://portfolio-gen-demo.netlify.app"
        },
        {
            id: 6,
            title: "Blog Platform",
            description: "Full-featured blogging platform with markdown support, categories, and search functionality.",
            image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&h=300&fit=crop",
            technologies: ["React", "Markdown", "CSS3"],
            github: "https://github.com/gezahegn/blog-platform",
            demo: "https://blog-platform-demo.netlify.app"
        }
    ],
    
    blogPosts: [
        {
            id: 1,
            title: "Getting Started with React Hooks",
            excerpt: "Learn how to use React Hooks to manage state and side effects in functional components. This comprehensive guide covers useState, useEffect, and custom hooks.",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&h=300&fit=crop",
            date: "2024-01-15",
            category: "React",
            content: "Full article content here..."
        },
        {
            id: 2,
            title: "CSS Grid vs Flexbox: When to Use Which",
            excerpt: "Understanding the differences between CSS Grid and Flexbox, and knowing when to use each layout system for optimal results.",
            image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?w=500&h=300&fit=crop",
            date: "2024-01-10",
            category: "CSS",
            content: "Full article content here..."
        },
        {
            id: 3,
            title: "JavaScript ES6+ Features You Should Know",
            excerpt: "Explore modern JavaScript features including arrow functions, destructuring, spread operators, and more that will improve your code.",
            image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=500&h=300&fit=crop",
            date: "2024-01-05",
            category: "JavaScript",
            content: "Full article content here..."
        },
        {
            id: 4,
            title: "Building Responsive Websites: Best Practices",
            excerpt: "Master the art of creating responsive websites that look great on all devices. Learn about mobile-first design and media queries.",
            image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&h=300&fit=crop",
            date: "2023-12-28",
            category: "Web Design",
            content: "Full article content here..."
        },
        {
            id: 5,
            title: "Web Performance Optimization Tips",
            excerpt: "Improve your website's loading speed and performance with these practical optimization techniques and best practices.",
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
            date: "2023-12-20",
            category: "Performance",
            content: "Full article content here..."
        },
        {
            id: 6,
            title: "Introduction to Web Accessibility",
            excerpt: "Learn why web accessibility matters and how to make your websites accessible to everyone, including users with disabilities.",
            image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=500&h=300&fit=crop",
            date: "2023-12-15",
            category: "Accessibility",
            content: "Full article content here..."
        }
    ],
    
    social: {
        github: "https://github.com/gezahegn",
        linkedin: "https://linkedin.com/in/gezahegn-yeshiye",
        twitter: "https://twitter.com/gezahegn"
    }
};
