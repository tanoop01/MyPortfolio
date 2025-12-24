import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import SectionWrapper from '../components/SectionWrapper';
import SectionTitle from '../components/SectionTitle';
import Card from '../components/Card';
import { aboutData } from '../data/aboutData';
import { staggerContainer, slideUp } from '../utils/animations';

const About = () => {
  return (
    <SectionWrapper id="about" background="alt">
      <SectionTitle
        title={aboutData.title}
        subtitle={aboutData.description}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* Main Content Card - Mobile responsive */}
        <Card className="p-4 xs:p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            Who am I
          </h3>
          <motion.ul
            className="space-y-2 sm:space-y-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {aboutData.whoAmI.map((item, index) => (
              <motion.li
                key={index}
                variants={slideUp}
                className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-white"
              >
                <Check className="w-4 h-4 sm:w-5 sm:h-5 text-white mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </Card>

        {/* Learning Card - Mobile responsive */}
        <Card className="p-4 xs:p-6 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 flex items-center gap-2">
            <span className="w-2 h-2 bg-white rounded-full"></span>
            What I'm Learning
          </h3>
          <motion.ul
            className="space-y-2 sm:space-y-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {aboutData.whatImLearning.map((item, index) => (
              <motion.li
                key={index}
                variants={slideUp}
                className="flex items-start gap-2 sm:gap-3 text-sm sm:text-base text-white"
              >
                <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                <span>{item}</span>
              </motion.li>
            ))}
          </motion.ul>
        </Card>
      </div>

      {/* Interests Section - Mobile responsive */}
      <Card className="p-4 xs:p-6 sm:p-8 mt-6 sm:mt-8" glass>
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 text-center">
          My Interests
        </h3>
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {aboutData.interests.map((interest, index) => {
            const Icon = interest.icon;
            return (
              <motion.div
                key={index}
                variants={slideUp}
                className="flex flex-col items-center gap-2 p-3 sm:p-4 rounded-lg bg-black/40 backdrop-blur-xl border-2 border-white/60 hover:bg-white/90 hover:text-black transition-colors group"
              >
                <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:text-black" />
                <span className="text-xs sm:text-sm text-center text-white group-hover:text-black">
                  {interest.text}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </Card>
    </SectionWrapper>
  );
};

export default About;
