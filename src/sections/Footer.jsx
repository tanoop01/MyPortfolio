import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-transparent border-t border-white py-6 sm:py-8 px-4">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {/* Mobile responsive footer text */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          <p className="text-sm sm:text-base text-white">
            Crafted with
          </p>
          <Heart
            size={14}
            className="sm:w-4 sm:h-4 fill-red-500 animate-pulse"
          />
          <p className="text-sm sm:text-base text-white">
            by Anoop
          </p>
        </div>

      </motion.div>
    </footer>
  );
};

export default Footer;
