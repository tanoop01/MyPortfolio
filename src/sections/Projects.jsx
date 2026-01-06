import { motion } from 'framer-motion';
import { Github, ExternalLink, Star } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import Button from '../components/Button';
import { projectsData } from '../data/projectsData';
import { staggerContainer, slideUp } from '../utils/animations';

const Projects = () => {
  return (
    <SectionWrapper id="projects" background="alt">
      <SectionTitle
        title={projectsData.title}
        subtitle={projectsData.description}
      />

      <motion.div
        className="flex justify-center max-w-4xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projectsData.projects.map((project) => (
          <motion.div key={project.id} variants={slideUp} className="w-full max-w-xl">
            {/* Mobile responsive project cards */}
            <Card className="p-4 xs:p-5 sm:p-6 flex flex-col h-full group">
              {/* Featured Badge */}
              {project.featured && (
                <div className="flex items-center gap-1 text-white mb-2 sm:mb-3">
                  <Star size={14} className="sm:w-4 sm:h-4" fill="currentColor" />
                  <span className="text-[10px] sm:text-xs font-semibold uppercase">Featured</span>
                </div>
              )}

              {/* Project Title - Mobile responsive */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3 transition-colors">
                {project.title}
              </h3>

              {/* Project Description - Mobile responsive */}
              <p className="text-sm sm:text-base text-white mb-3 sm:mb-4 flex-grow">
                {project.description}
              </p>

              {/* Tech Stack - Mobile responsive */}
              <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-2 py-0.5 sm:px-3 sm:py-1 text-[10px] sm:text-xs font-medium bg-black/40 backdrop-blur-md border border-white/60 text-white rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links - Mobile responsive */}
              <div className="flex gap-2 sm:gap-3 pt-3 sm:pt-4 border-t border-white">
                <Button
                  variant="outline"
                  size="sm"
                  icon={Github}
                  href={project.github}
                  className="flex-1"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  Code
                </Button>
                {project.demo && (
                  <Button
                    variant="primary1"
                    size="sm"
                    icon={ExternalLink}
                    href={project.demo}
                    className="flex-1"
                    aria-label={`View ${project.title} live demo`}
                  >
                    Demo
                  </Button>
                )}
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
};

export default Projects;
