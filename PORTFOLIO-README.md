# Personal Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 **Modern Design**: Clean and professional layout with dark/light theme support
- 📱 **Responsive**: Fully responsive design that works on all devices
- ⚡ **Fast**: Built with Vite for optimal performance
- 🎭 **Animations**: Smooth animations powered by Framer Motion
- 🎯 **Type Safe**: Full TypeScript support for better development experience
- 🎨 **Tailwind CSS**: Utility-first CSS framework for rapid UI development
- 📦 **Component-Based**: Modular components for easy maintenance

## Sections

- **Hero**: Eye-catching landing section with introduction
- **About**: Personal information and background
- **Skills**: Technical skills organized by categories
- **Projects**: Showcase of featured and other projects
- **Experience**: Professional work history timeline
- **Contact**: Contact form and information
- **Footer**: Social links and copyright

## Tech Stack

- **Frontend**: React 19, TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Utilities**: clsx, class-variance-authority, tailwind-merge

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## Customization

### Personal Information

Edit the configuration file at `src/config/portfolio.ts` to update:
- Personal details (name, email, location)
- Social media links
- Skills and technologies
- Projects information
- Work experience

### Styling

The project uses Tailwind CSS. You can:
- Modify the theme in `tailwind.config.js`
- Customize components in the `src/components/` directory
- Update section layouts in the `src/sections/` directory

### Adding New Sections

1. Create a new component in `src/sections/`
2. Import and add it to `src/App.tsx`
3. Update the navigation in `src/components/Navbar.tsx`

## Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Navbar.tsx
│   ├── ProjectCard.tsx
│   └── SectionTitle.tsx
├── sections/            # Main page sections
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── SkillsSection.tsx
│   ├── ProjectsSection.tsx
│   ├── ExperienceSection.tsx
│   ├── ContactSection.tsx
│   └── Footer.tsx
├── config/              # Configuration files
│   └── portfolio.ts
├── hooks/               # Custom React hooks
│   └── useTheme.ts
├── lib/                 # Utility functions
│   └── utils.ts
└── App.tsx             # Main application component
```

## License

MIT License - feel free to use this project for your own portfolio!

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.