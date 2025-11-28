import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/SectionTitle';
import { portfolioConfig } from '@/config/portfolio';

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-gray-50 theme-dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Skills & Technologies"
          subtitle="Tools and technologies I work with"
        />
        
        <div className="grid md:grid-cols-3 gap-8">
          {Object.entries(portfolioConfig.skills).map(([category, skills], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white theme-dark:bg-gray-900 rounded-xl p-6 shadow-lg"
            >
              <h3 className="text-xl font-bold text-gray-900 theme-dark:text-white mb-4">
                {category}
              </h3>
              <div className="space-y-3">
                {skills.map((skill) => (
                  <div key={skill} className="flex items-center justify-between">
                    <span className="text-gray-700 theme-dark:text-gray-300">{skill}</span>
                    <div className="w-24 bg-gray-200 theme-dark:bg-gray-700 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full"
                        style={{ width: `${Math.floor(Math.random() * 30) + 70}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}