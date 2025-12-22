import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-transparent border-t border-white py-8 px-4">
      <motion.div
        className="max-w-6xl mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex items-center justify-center gap-2 mb-4">
          <p className="text-white">
            Crafted with
          </p>
          <Heart
            size={16}
            className=" fill-red-500 animate-pulse"
          />
          <p className="text-white">
            by Anoop
          </p>
        </div>

      </motion.div>
    </footer>
  );
};

export default Footer;
