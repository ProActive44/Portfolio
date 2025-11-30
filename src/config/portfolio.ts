/**
 * Portfolio configuration with personal information, skills, projects, and experience data.
 */

export const portfolioConfig = {
  // Personal Information
  name: "Prasad Mhaske",
  title: "Full Stack Developer",
  bio: "Passionate Full Stack Developer with 2+ years of experience building modern web applications. Specialized in React, TypeScript, and creating exceptional user experiences.",
  email: "prasadmhaske2001@gmail.com",
  location: "Mumbai, India",

  // Social Links
  socials: {
    github: "https://github.com/ProActive44",
    linkedin: "https://www.linkedin.com/in/prasad-mhaske-88a177247",
  },

  // Skills with categories
  skills: {
    "Frontend": [
      "React", "TypeScript", "Next.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript"
    ],
    "Backend": [
      "Node.js", "Express.js", "PostgreSQL", "MongoDB", "REST APIs", "Prisma"
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
      title: "Enterprise Resource Management Platform",
      description: "Built a role-based Enterprise Resource Management (ERM) frontend used by internal teams for product, quotation, and customer operations. Developed responsive UI screens for product management, quotation builder, templates, dashboard, and user management using React + MUI. Integrated REST APIs for all modules: create, update, view, delete, and ensured seamless end-to-end workflows. Implemented advanced table functionalities using TanStack Table: server-side search, sort, filters, pagination, and status indicators. Built a fully dynamic quotation system with template selection, item listing, pricing, discounting, and follow- up history tracking. Added bulk upload(CSV / XLSX) feature enabling enterprises to upload a large product catalog efficiently. Implemented Export to CSV and Web Sync to sync product data with the main e- commerce site. Developed a visually rich analytics dashboard with KPI cards, pie - charts, and activity summaries for real - time business insights. Ensured smooth role - based access control(RBAC) across modules with UI - level permission handling. Optimized performance and improved UX across complex workflows involving thousands of SKUs.",
      image: "/api/placeholder/400/250",
      technologies: ["React", "TypeScript", "Bootstrap", "MUI", "TanStack Table", "REST APIs"],
      // githubUrl: "https://github.com/yourusername/task-manager",
      // liveUrl: "https://your-taskapp-demo.com",
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
      title: "Full Stack Developer",
      company: "Metaphi Innovations",
      duration: "Sep 2025 - Present",
      description: [
        "Developed and maintained ERM system modules using React, Node.js, Express.js, MongoDB, PostgreSQL, and Prisma.",
        "Built scalable REST APIs and optimized backend workflows for efficient data handling across ERM components.",
        "Implemented secure authentication and authorization using JWT and OAuth.",
        "Improved front-end performance and ensured responsive, cross-browser compatibility.",
        "Collaborated with product, design, and QA teams to deliver reliable and production-ready features."
      ]
    },
    {
      id: 2,
      title: "Full Stack Developer",
      company: "Kalvium",
      duration: "Oct 2023 - May 2025",
      description: [
        "Built and improved full-stack features for internal platforms using React, Node.js, Express.js, MongoDB.",
        "Redesigned the Student Profile module, enhancing UI/UX and performance.",
        "Developed REST APIs and optimized database interactions for reliable data flow.",
        "Collaborated with product and engineering teams to deliver stable, production-ready features.",
        "Contributed to code quality through reviews and best-practice implementation."
      ]
    }
  ]
};