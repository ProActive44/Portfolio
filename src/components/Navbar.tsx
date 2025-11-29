import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from './Button';
import { useTheme } from '@/hooks/useTheme';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full',
        isScrolled
          ? 'bg-background/80 backdrop-blur-lg border-b shadow-sm'
          : 'bg-transparent'
      )}
    >
      <nav className="relative mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center space-x-2"
        >
          <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Portfolio
          </span>
        </a>

        {/* Desktop Navigation (centered) */}
        <div className="pointer-events-auto absolute left-1/2 hidden -translate-x-1/2 md:flex md:items-center md:gap-6 min-w-[520px] justify-center">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className={cn(
                'relative px-6 py-2 text-sm font-medium rounded-full transition-colors',
                // 👇 light + dark explicit text colors
                'text-slate-700 theme-dark:text-slate-200',
                'hover:text-slate-900 theme-dark:hover:text-white',
                // keep your hover background
                'hover:bg-accent', 'hover:cursor-pointer'
              )}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {/* Theme Toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full text-slate-700 theme-dark:text-slate-200"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all theme-dark:-rotate-90 theme-dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all theme-dark:rotate-0 theme-dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* CTA Button - Desktop */}
          <Button
            size="sm"
            className="hidden sm:inline-flex w-full rounded-full px-5 whitespace-nowrap text-slate-1000 theme-dark:text-slate-200"
            onClick={() => scrollToSection('#contact')}
          >
            Get in Touch
          </Button>



          {/* Mobile Menu Toggle */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full text-slate-700 theme-dark:text-slate-200"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className={cn('h-5 w-5 transition-all', isOpen && 'rotate-90 scale-0')} />
            <X className={cn('absolute h-5 w-5 transition-all', !isOpen && '-rotate-90 scale-0')} />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden overflow-hidden border-b bg-background/95 backdrop-blur-lg"
          >
            <div className="space-y-1 px-4 py-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => scrollToSection(item.href)}
                  className={cn(
                    'flex w-full items-center rounded-lg px-4 py-3 text-base font-medium transition-colors',
                    'text-slate-700 theme-dark:text-slate-200',
                    'hover:text-slate-900 theme-dark:hover:text-white',
                    'hover:bg-accent'
                  )}
                >
                  {item.name}
                </motion.button>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                className="pt-2"
              >
                <Button
                  className="w-full rounded-full text-slate-50 theme-dark:text-slate-50"
                  onClick={() => scrollToSection('#contact')}
                >
                  Get in Touch
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
