import { motion } from 'framer-motion';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  href,
  className = '',
  icon: Icon,
  ...props 
}) => {
  const baseStyles = 'inline-flex items-center justify-center gap-1.5 sm:gap-2 font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 overflow-hidden';
  
  const variants = {
    primary: 'bg-black/50 backdrop-blur-xl border-2 border-white/70 text-white hover:bg-white/90 hover:text-black hover:border-white focus:ring-white shadow-lg hover:shadow-xl',
    primary1: 'bg-white border-2 border-black/70 text-black hover:bg-black/90 hover:text-white hover:border-white focus:ring-black shadow-lg hover:shadow-xl',
    secondary: 'bg-black/40 backdrop-blur-xl border-2 border-white/60 text-white hover:bg-white/80 hover:text-black hover:border-white focus:ring-white shadow-lg hover:shadow-xl',
    outline: 'bg-transparent backdrop-blur-xl border-2 border-white/70 text-white hover:bg-white/90 hover:text-black hover:border-white focus:ring-white shadow-md hover:shadow-lg',
    ghost: 'bg-transparent backdrop-blur-xl text-white hover:bg-white/20 hover:border-white/40 focus:ring-white'
  };
  
  // Mobile responsive button sizes
  const sizes = {
    sm: 'px-3 py-1.5 text-xs sm:px-4 sm:py-2 sm:text-sm',
    md: 'px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-base',
    lg: 'px-5 py-2.5 text-sm sm:px-8 sm:py-4 sm:text-lg'
  };
  
  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;
  
  const content = (
    <>
      {Icon && <Icon size={size === 'sm' ? 14 : size === 'lg' ? 20 : 18} className="sm:w-5 sm:h-5" />}
      {children}
    </>
  );
  
  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
        onMouseDown={(e) => e.preventDefault()}
        {...props}
      >
        {content}
      </motion.a>
    );
  }
  
  return (
    <motion.button
      className={classes}
      onClick={(e) => {
        if (onClick) onClick(e);
        e.currentTarget.blur();
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      {...props}
    >
      {content}
    </motion.button>
  );
};

export default Button;
