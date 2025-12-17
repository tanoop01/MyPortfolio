import { motion } from 'framer-motion';

const Card = ({ 
  children, 
  className = '', 
  hover = true,
  gradient = false,
  glass = false,
  ...props 
}) => {
  const baseStyles = 'rounded-xl transition-all duration-300 backdrop-blur-xl';
  
  const styles = glass
    ? 'bg-black/40 border-2 border-white/60'
    : gradient
    ? 'bg-black/40 border-2 border-white/60'
    : 'bg-black/40 border-2 border-white/60';
  
  const hoverStyles = hover
    ? 'hover:shadow-2xl hover:shadow-white/20 hover:-translate-y-1 hover:bg-black/60 hover:border-white/80'
    : '';
  
  const classes = `${baseStyles} ${styles} ${hoverStyles} ${className}`;
  
  return (
    <motion.div
      className={classes}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
