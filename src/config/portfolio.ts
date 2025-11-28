/**
 * Portfolio configuration with personal information, skills, projects, and experience data.
 */

export const portfolioConfig = {
  // Personal Information
  name: "Your Name",
  title: "Full Stack Developer",
  bio: "Passionate Full Stack Developer with 3+ years of experience building modern web applications. Specialized in React, TypeScript, and creating exceptional user experiences.",
  email: "your.email@example.com",
  location: "Your City, Country",
  
  // Social Links
  socials: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    twitter: "https://twitter.com/yourusername",
  },

  // Skills with categories
  skills: {
    "Frontend": [
      "React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"
    ],
    "Backend": [
      "Node.js", "Express.js", "Python", "PostgreSQL", "MongoDB", "REST APIs"
    ],
    "Tools & Others": [
      "Git", "Docker", "AWS", "Figma", "VS Code", "Webpack", "Vite"
    ]
  },

  // Projects
  projects: [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform built with React, Node.js, and PostgreSQL. Features include user authentication, payment processing, and admin dashboard.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "Tailwind CSS"],
      githubUrl: "https://github.com/yourusername/ecommerce-platform",
      liveUrl: "https://your-ecommerce-demo.com",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "TypeScript", "Socket.io", "MongoDB", "Express.js"],
      githubUrl: "https://github.com/yourusername/task-manager",
      liveUrl: "https://your-taskapp-demo.com",
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather dashboard with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "TypeScript", "OpenWeather API", "Chart.js"],
      githubUrl: "https://github.com/yourusername/weather-dashboard",
      liveUrl: "https://your-weather-demo.com",
      featured: false
    }
  ],

  // Work Experience
  experience: [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "Tech Company Inc.",
      duration: "2023 - Present",
      description: [
        "Led development of React-based web applications serving 100k+ users",
        "Implemented modern frontend architecture using TypeScript and Next.js",
        "Mentored junior developers and conducted code reviews",
        "Improved application performance by 40% through optimization techniques"
      ]
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Startup Solutions",
      duration: "2022 - 2023",
      description: [
        "Built and maintained full-stack applications using React and Node.js",
        "Designed and implemented RESTful APIs and database schemas",
        "Collaborated with design team to create responsive user interfaces",
        "Deployed applications on AWS with CI/CD pipelines"
      ]
    },
    {
      id: 3,
      title: "Junior Web Developer",
      company: "Digital Agency",
      duration: "2021 - 2022",
      description: [
        "Developed responsive websites using HTML, CSS, and JavaScript",
        "Integrated third-party APIs and payment gateways",
        "Worked closely with designers to implement pixel-perfect interfaces",
        "Participated in agile development processes and daily standups"
      ]
    }
  ]
};