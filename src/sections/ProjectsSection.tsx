import { motion } from 'framer-motion';
import { SectionTitle } from '@/components/SectionTitle';
import { ProjectCard } from '@/components/ProjectCard';
import { portfolioConfig } from '@/config/portfolio';

export function ProjectsSection() {
  const featuredProjects = portfolioConfig.projects.filter(project => project.featured);
  const otherProjects = portfolioConfig.projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-white theme-dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Featured Projects"
          subtitle="Some of my recent work"
        />
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
        
        {otherProjects.length > 0 && (
          <>
            <h3 className="text-2xl font-bold text-gray-900 theme-dark:text-white text-center mb-8">
              Other Projects
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}