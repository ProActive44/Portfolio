import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/SectionTitle';
import { portfolioConfig } from '@/config/portfolio';

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white theme-dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="About Me"
          subtitle="Get to know me better"
        />
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="aspect-square bg-gradient-to-br from-blue-400 to-purple-600 rounded-2xl mb-8 flex items-center justify-center">
              <div className="text-white text-6xl font-bold">
                {portfolioConfig.name.split(' ').map(n => n[0]).join('')}
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 theme-dark:text-white mb-6">
              {portfolioConfig.title}
            </h3>
            <p className="text-lg text-gray-600 theme-dark:text-gray-300 mb-6 leading-relaxed">
              {portfolioConfig.bio}
            </p>
            <div className="space-y-4">
              <div>
                <span className="font-semibold text-gray-900 theme-dark:text-white">Location: </span>
                <span className="text-gray-600 theme-dark:text-gray-300">{portfolioConfig.location}</span>
              </div>
              <div>
                <span className="font-semibold text-gray-900 theme-dark:text-white">Email: </span>
                <a
                  href={`mailto:${portfolioConfig.email}`}
                  className="text-blue-600 hover:text-blue-700 theme-dark:text-blue-400 theme-dark:hover:text-blue-300"
                >
                  {portfolioConfig.email}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}