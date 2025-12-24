import { motion } from 'framer-motion';
import { Download, ChevronDown } from 'lucide-react';
import Button from '../components/Button';
import { fadeIn, slideUp } from '../utils/animations';
import ShinyText from '../components/ShinyText';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Removed for minimal design */}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="space-y-6 sm:space-y-8"
        >
          {/* Greeting */}
          <motion.p
            variants={slideUp}
            className="text-base sm:text-lg text-white font-medium"
          >
            Hi, I'm
          </motion.p>

          {/* Name with SHINY EFFECT */}
          <motion.h1
            variants={slideUp}
            className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold"
          >
            <ShinyText
              text="Anoop Tripathi"
              speed={3}
              className="inline-block"
            />
          </motion.h1>

          {/* Tagline */}
          <motion.p
            variants={slideUp}
            className="text-xl sm:text-2xl lg:text-3xl text-white font-semibold"
          >
            Aspiring Developer | AI Enthusiast | Tech Explorer
          </motion.p>

          {/* Description */}
          <motion.p
            variants={slideUp}
            className="text-base sm:text-lg lg:text-xl text-white max-w-3xl mx-auto leading-relaxed"
          >
            Exploring the world of technology through code, creativity, and a growing passion for AI and intelligent systems.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={slideUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
          >
             <Button
              variant="outline"
              size="lg"
              onClick={scrollToProjects}
              aria-label="View Projects"
            >
              View Projects
            </Button>
            <Button
              variant="primary1"
              size="lg"
              // icon={Download}
              href="/anoop-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Resume"
            >
              Resume
            </Button>
           
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {/* <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="text-white"
          >
            <ChevronDown size={32} />
          </motion.div> */}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
