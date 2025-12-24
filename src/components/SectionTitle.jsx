import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle, centered = true }) => {
  return (
    <motion.div 
      className={`mb-8 sm:mb-12 ${centered ? 'text-center' : ''}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Mobile responsive section title */}
      <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-4 sm:px-0">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm sm:text-base lg:text-lg text-white max-w-2xl mx-auto px-4 sm:px-6 lg:px-0">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionTitle;
