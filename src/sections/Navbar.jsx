import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { 
      name: 'Home', 
      href: '#home',
      gradient: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(37,99,235,0.06) 50%, rgba(29,78,216,0) 100%)",
      iconColor: "group-hover:text-blue-500 dark:group-hover:text-blue-400"
    },
    { 
      name: 'About', 
      href: '#about',
      gradient: "radial-gradient(circle, rgba(249,115,22,0.15) 0%, rgba(234,88,12,0.06) 50%, rgba(194,65,12,0) 100%)",
      iconColor: "group-hover:text-orange-500 dark:group-hover:text-orange-400"
    },
    { 
      name: 'Skills', 
      href: '#skills',
      gradient: "radial-gradient(circle, rgba(34,197,94,0.15) 0%, rgba(22,163,74,0.06) 50%, rgba(21,128,61,0) 100%)",
      iconColor: "group-hover:text-green-500 dark:group-hover:text-green-400"
    },
    { 
      name: 'Projects', 
      href: '#projects',
      gradient: "radial-gradient(circle, rgba(168,85,247,0.15) 0%, rgba(147,51,234,0.06) 50%, rgba(126,34,206,0) 100%)",
      iconColor: "group-hover:text-purple-500 dark:group-hover:text-purple-400"
    },
    { 
      name: 'Collaborate', 
      href: '#contact',
      gradient: "radial-gradient(circle, rgba(239,68,68,0.15) 0%, rgba(220,38,38,0.06) 50%, rgba(185,28,28,0) 100%)",
      iconColor: "group-hover:text-red-500 dark:group-hover:text-red-400"
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
        className="hidden md:block p-1.5 rounded-full bg-black/40 backdrop-blur-xl border-2 border-white/60 shadow-2xl shadow-white/20 relative overflow-hidden"
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
                    background: "rgba(255, 255, 255, 0.1)",
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
        </ul>
      </motion.div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center gap-3 px-4 py-2 rounded-full bg-black/40 backdrop-blur-xl border-2 border-white/60 shadow-lg shadow-white/20">
        <motion.button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white p-2"
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className={`md:hidden absolute top-full mt-2 left-1/2 -translate-x-1/2 w-48 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          scale: isMobileMenuOpen ? 1 : 0.95
        }}
        transition={{ duration: 0.2 }}
      >
        <div className="px-3 py-2 space-y-1 bg-black/40 backdrop-blur-xl border-2 border-white/60 rounded-2xl shadow-lg shadow-white/20">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="block px-4 py-2 text-sm text-white hover:bg-white hover:text-black rounded-xl transition-colors"
            >
              {item.name}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
