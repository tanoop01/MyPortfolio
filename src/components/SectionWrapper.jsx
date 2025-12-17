import { motion } from 'framer-motion';
import { fadeIn } from '../utils/animations';

const SectionWrapper = ({ 
  children, 
  id, 
  className = '',
  background = 'default'
}) => {
  const backgrounds = {
    default: 'bg-transparent',
    alt: 'bg-transparent',
    gradient: 'bg-transparent'
  };
  
  return (
    <motion.section
      id={id}
      className={`py-20 px-4 sm:px-6 lg:px-8 ${backgrounds[background]} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeIn}
    >
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </motion.section>
  );
};

export default SectionWrapper;
