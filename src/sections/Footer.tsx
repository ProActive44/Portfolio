import { Github, Linkedin, Mail } from 'lucide-react';
import { portfolioConfig } from '@/config/portfolio';

export function Footer() {
  return (
    <footer className="bg-gray-900 theme-dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">{portfolioConfig.name}</h3>
            <p className="text-gray-400">{portfolioConfig.title}</p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href={portfolioConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href={portfolioConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href={`mailto:${portfolioConfig.email}`}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} {portfolioConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}