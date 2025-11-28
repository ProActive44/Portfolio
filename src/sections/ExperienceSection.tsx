import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/SectionTitle';
import { portfolioConfig } from '@/config/portfolio';

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 bg-gray-50 theme-dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Work Experience"
          subtitle="My professional journey"
        />
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-600"></div>
            
            {portfolioConfig.experience.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative flex items-start mb-12"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-white theme-dark:border-gray-800"></div>
                
                <div className="ml-20 bg-white theme-dark:bg-gray-900 rounded-xl p-6 shadow-lg w-full">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 theme-dark:text-white">
                        {job.title}
                      </h3>
                      <h4 className="text-lg text-blue-600 theme-dark:text-blue-400">
                        {job.company}
                      </h4>
                    </div>
                    <span className="text-sm text-gray-500 theme-dark:text-gray-400 mt-1 md:mt-0">
                      {job.duration}
                    </span>
                  </div>
                  
                  <ul className="space-y-2">
                    {job.description.map((item, i) => (
                      <li key={i} className="text-gray-600 theme-dark:text-gray-300 flex items-start">
                        <span className="text-blue-600 mr-2 mt-2">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}