import { motion } from 'framer-motion';
import { ChevronDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/Button';
import { portfolioConfig } from '@/config/portfolio';

export function HeroSection() {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-blue-50 to-indigo-100 theme-dark:from-gray-900 theme-dark:to-gray-800">
      <div className="px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className='flex flex-col gap-4'
        >
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 theme-dark:text-white my-10">
            Hi, I'm{' '}
            <span className="text-blue-600 theme-dark:text-blue-400">
              {portfolioConfig.name}
            </span>
          </h1>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl font-medium text-gray-600 theme-dark:text-gray-300 my-12"
          >
            {portfolioConfig.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-600 theme-dark:text-gray-400 max-w-3xl mx-auto mb-20"
          >
            {portfolioConfig.bio}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-24"
          >
            <Button size="lg" className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Get In Touch
            </Button>
            <Button variant="outline" size="lg" className="flex items-center gap-2">
              <Download className="h-5 w-5" />
              Download Resume
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex justify-center gap-8 mb-24"
          >
            <a
              href={portfolioConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            >
              <Github className="h-8 w-8" />
            </a>
            <a
              href={portfolioConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors"
            >
              <Linkedin className="h-8 w-8" />
            </a>
          </motion.div>
        </motion.div>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-600 theme-dark:text-gray-400 hover:text-blue-600 theme-dark:hover:text-blue-400 transition-colors animate-bounce cursor-pointer"
        >
          <ChevronDown className="h-8 w-8" />
        </motion.button>
      </div>
    </section>
  );
}