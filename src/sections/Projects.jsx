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
        className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {projectsData.projects.map((project) => (
          <motion.div key={project.id} variants={slideUp}>
            <Card className="p-6 flex flex-col h-full group">
              {/* Featured Badge */}
              {project.featured && (
                <div className="flex items-center gap-1 text-white mb-3">
                  <Star size={16} fill="currentColor" />
                  <span className="text-xs font-semibold uppercase">Featured</span>
                </div>
              )}

              {/* Project Title */}
              <h3 className="text-xl font-bold text-white mb-3 transition-colors">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-white mb-4 flex-grow">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs font-medium bg-black/40 backdrop-blur-md border border-white/60 text-white rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-4 border-t border-white">
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
