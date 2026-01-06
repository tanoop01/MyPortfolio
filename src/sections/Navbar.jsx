import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download, Home, User, Code, FolderGit2, Mail } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [hoveredMobileItem, setHoveredMobileItem] = useState(null);

  const navItems = [
    { 
      name: 'Home', 
      href: '#home',
      icon: Home,
      gradient: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
      iconColor: "group-hover:text-blue-500"
    },
    { 
      name: 'About', 
      href: '#about',
      icon: User,
      gradient: "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)",
      iconColor: "group-hover:text-orange-500"
    },
    { 
      name: 'Skills', 
      href: '#skills',
      icon: Code,
      gradient: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
      iconColor: "group-hover:text-green-500"
    },
    { 
      name: 'Projects', 
      href: '#projects',
      icon: FolderGit2,
      gradient: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(147,51,234,0.06) 50%, rgba(126,34,206,0) 100%)",
      iconColor: "group-hover:text-purple-500"
    },
    { 
      name: 'Collaborate', 
      href: '#contact',
      icon: Mail,
      gradient: "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
      iconColor: "group-hover:text-red-500"
    },
  

  ];

  const itemVariants = {
    initial: {
      rotateX: 0,
      opacity: 1
    },
    hover: {
      rotateX: -90,
      opacity: 0
    }
  };

  const backVariants = {
    initial: {
      rotateX: 90,
      opacity: 0
    },
    hover: {
      rotateX: 0,
      opacity: 1
    }
  };

  const glowVariants = {
    initial: {
      opacity: 0,
      scale: 0.8
    },
    hover: {
      opacity: 1,
      scale: 2,
      transition: {
        opacity: {
          duration: 0.5,
          ease: [0.4, 0, 0.2, 1]
        },
        scale: {
          duration: 0.5,
          type: "spring",
          stiffness: 300,
          damping: 25
        }
      }
    }
  };

  const navGlowVariants = {
    initial: {
      opacity: 0
    },
    hover: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: [0.4, 0, 0.2, 1]
      }
    }
  };

  const sharedTransition = {
    type: "spring",
    stiffness: 100,
    damping: 20,
    duration: 0.5
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <motion.nav
      className="fixed top-4 left-0 right-0 z-50 flex justify-center transition-all duration-300"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="hidden md:block p-1.5 rounded-full bg-black/40 backdrop-blur-xl border-2 border-white/60 shadow-2xl shadow-white/20 relative overflow-visible"
        initial="initial"
        whileHover="hover"
      >
        <motion.div 
          className="absolute -inset-2 rounded-full z-0 pointer-events-none"
          style={{
            background: "transparent"
          }}
          variants={navGlowVariants}
        />
        <ul className="flex items-center gap-1 relative z-10">
          {navItems.map((item) => (
            <motion.li key={item.name} className="relative">
              <motion.div
                className="block rounded-full overflow-visible group relative"
                style={{ perspective: "600px" }}
                whileHover="hover"
                initial="initial"
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 z-0 pointer-events-none rounded-full"
                  variants={glowVariants}
                  style={{
                    background: "rgba(255, 255, 255, 0)",
                    opacity: 0
                  }}
                />
                {/* Front face */}
                <motion.a
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="flex items-center px-3 py-1.5 relative z-10 bg-transparent text-white group-hover:text-white transition-colors rounded-full text-sm font-medium"
                  variants={itemVariants}
                  transition={sharedTransition}
                  style={{
                    transformStyle: "preserve-3d",
                    transformOrigin: "center bottom"
                  }}
                >
                  {item.name}
                </motion.a>
                {/* Back face */}
                <motion.a
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="flex items-center px-3 py-1.5 absolute inset-0 z-10 bg-transparent text-white group-hover:text-white transition-colors rounded-full text-sm font-medium"
                  variants={backVariants}
                  transition={sharedTransition}
                  style={{
                    transformStyle: "preserve-3d",
                    transformOrigin: "center top",
                    transform: "rotateX(90deg)"
                  }}
                >
                  {item.name}
                </motion.a>
              </motion.div>
            </motion.li>
          ))}
          
          {/* Download Resume Button */}
          <motion.li 
            className="ml-2 relative"
            initial={{ opacity: 0, scale: 0.8, width: 0 }}
            variants={{
              initial: { 
                opacity: 0, 
                scale: 0.8, 
                width: 0,
                transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
              },
              hover: { 
                opacity: 1, 
                scale: 1, 
                width: "auto",
                transition: { 
                  duration: 0.4, 
                  ease: [0.4, 0, 0.2, 1],
                  opacity: { delay: 0.1 }
                }
              }
            }}
          >
            <motion.a
              href="/anoop-resume.pdf"
              download="Anoop_Resume.pdf"
              className="flex items-center justify-center p-2 rounded-full bg-white/10 text-white hover:bg-white hover:text-black transition-all duration-300 relative"
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.9 }}
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
              aria-label="Download Resume"
            >
              <Download size={18} />
              
              {/* Tooltip */}
              <AnimatePresence>
                {showTooltip && (
                  <motion.div
                    initial={{ opacity: 0, y: -10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.9 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute pointer-events-none"
                    style={{ 
                      top: '2.75rem',
                      // left: '50%',
                      width: 'fit-content',
                      whiteSpace: 'pre',
                      borderRadius: '0.5rem',
                      border: '2px solid rgba(255, 255, 255, 0.7)',
                      background: 'rgba(0, 0, 0, 0.6)',
                      backdropFilter: 'blur(16px)',
                      WebkitBackdropFilter: 'blur(16px)',
                      padding: '0.375rem 0.75rem',
                      fontSize: '0.7rem',
                      color: '#fff',
                      transform: 'translateX(-50%)',
                      boxShadow: '0 4px 12px rgba(255, 255, 255, 0.3)',
                      zIndex: 9999
                    }}
                  >
                    Download Resume
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.a>
          </motion.li>
        </ul>
      </motion.div>

      {/* Icon Navigation for Mobile (350px to md) */}
      <div className="hidden min-[350px]:flex md:hidden items-center gap-2 px-2 py-2 rounded-full bg-black/40 backdrop-blur-xl border-2 border-white/60 shadow-lg shadow-white/20">
        {/* Mobile Navigation Icons */}
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <motion.div 
              key={item.name}
              className="relative"
              onHoverStart={() => setHoveredMobileItem(item.name)}
              onHoverEnd={() => setHoveredMobileItem(null)}
              onTouchStart={() => setHoveredMobileItem(item.name)}
              onTouchEnd={() => setTimeout(() => setHoveredMobileItem(null), 1500)}
            >
              <motion.a
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className="flex items-center justify-center p-2 text-white hover:text-white hover:bg-white/20 rounded-full transition-colors"
                whileTap={{ scale: 0.9 }}
                aria-label={item.name}
              >
                <Icon size={18} />
              </motion.a>
              
              {/* Tooltip */}
              <AnimatePresence>
                {hoveredMobileItem === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 5, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.9 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="absolute left-1/2 -translate-x-1/2 pointer-events-none whitespace-nowrap px-2 py-1 rounded-md bg-black/90 backdrop-blur-sm border border-white/30 text-white text-xs z-[100]"
                    style={{
                      top: '3rem',
                    }}
                  >
                    {item.name}
                    {/* Arrow */}
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black/90 border-t border-l border-white/30 rotate-45" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
        
        {/* Download Resume Icon */}
        <motion.div 
          className="relative ml-1 border-l border-white/30 pl-2"
          onHoverStart={() => setHoveredMobileItem('Resume')}
          onHoverEnd={() => setHoveredMobileItem(null)}
          onTouchStart={() => setHoveredMobileItem('Resume')}
          onTouchEnd={() => setTimeout(() => setHoveredMobileItem(null), 1500)}
        >
          <motion.a
            href="/anoop-resume.pdf"
            download="Anoop_Resume.pdf"
            className="flex items-center justify-center p-2 text-white hover:text-white hover:bg-white/20 rounded-full transition-colors"
            whileTap={{ scale: 0.9 }}
            aria-label="Download Resume"
          >
            <Download size={18} />
          </motion.a>
          
          {/* Tooltip */}
          <AnimatePresence>
            {hoveredMobileItem === 'Resume' && (
              <motion.div
                initial={{ opacity: 0, y: 5, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 5, scale: 0.9 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="absolute left-1/2 -translate-x-1/2 pointer-events-none whitespace-nowrap px-2 py-1 rounded-md bg-black/90 backdrop-blur-sm border border-white/30 text-white text-xs z-[100]"
                style={{
                  top: '3rem',
                }}
              >
                Resume
                {/* Arrow */}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-black/90 border-t border-l border-white/30 rotate-45" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Hamburger Menu for Very Small Screens (< 350px) */}
      <div className="max-[349px]:block hidden">
        <div className="flex items-center gap-3 px-3 py-2 rounded-full bg-black/40 backdrop-blur-xl border-2 border-white/60 shadow-lg shadow-white/20">
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white p-1.5"
            whileTap={{ scale: 0.9 }}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </motion.button>
        </div>

        {/* Dropdown Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="absolute top-full mt-2 left-1/2 -translate-x-1/2 w-44"
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <div className="px-2 py-2 space-y-1 bg-black/40 backdrop-blur-xl border-2 border-white/60 rounded-2xl shadow-lg shadow-white/20">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.a
                      key={item.name}
                      href={item.href}
                      onClick={(e) => scrollToSection(e, item.href)}
                      className="flex items-center gap-2 px-3 py-2 text-sm text-white hover:bg-white/20 rounded-xl transition-colors"
                      whileHover={{ x: 4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Icon size={16} />
                      <span>{item.name}</span>
                    </motion.a>
                  );
                })}
                
                {/* Download Resume in Dropdown */}
                <motion.a
                  href="/anoop-resume.pdf"
                  download="Anoop_Resume.pdf"
                  className="flex items-center gap-2 px-3 py-2 text-sm text-white hover:bg-white/20 rounded-xl transition-colors border-t border-white/20 mt-1 pt-2"
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download size={16} />
                  <span>Resume</span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
