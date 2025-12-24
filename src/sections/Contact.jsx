import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import { contactData } from '../data/contactData';
import { staggerContainer, slideUp } from '../utils/animations';

const Contact = () => {
  return (
    <SectionWrapper id="contact" background="default">
      <SectionTitle
        title={contactData.title}
        subtitle={contactData.description}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-5xl mx-auto lg:items-center">
        {/* Additional Info Card - Mobile responsive */}
        <Card className="p-4 xs:p-6 sm:p-8" glass>
          <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">
            Let's Work Together
          </h3>
          <p className="text-sm sm:text-base text-white leading-relaxed">
            I'm always interested in hearing about new projects and opportunities.
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
        </Card>

        {/* Social Links - Mobile responsive */}
        <Card className="p-4 xs:p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6">
            Connect With Me
          </h3>
          <motion.div
            className="space-y-3 sm:space-y-4"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {contactData.social.map((social, index) => {
              const Icon = social.icon;
              
              return (
                <motion.div key={index} variants={slideUp}>
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-black/40 backdrop-blur-xl border-2 border-white/60 hover:bg-white/90 transition-colors group"
                  >
                    <div className="p-2 sm:p-3 rounded-lg bg-black/50 backdrop-blur-md border border-white/60 text-white group-hover:bg-white group-hover:text-black group-hover:scale-110 transition-all">
                      <Icon size={20} className="sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <p className="text-sm sm:text-base font-semibold text-white group-hover:text-black">
                        {social.name}
                      </p>
                      <p className="text-xs sm:text-sm text-white group-hover:text-black">
                        {social.handle}
                      </p>
                    </div>
                  </a>
                </motion.div>
              );
            })}
          </motion.div>
        </Card>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
