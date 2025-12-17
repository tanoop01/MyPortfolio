import { motion } from 'framer-motion';
import SectionWrapper from '../components/SectionWrapper';
import SectionTitle from '../components/SectionTitle';
import OrbitingSkills from '../components/OrbitingSkills';

const Skills = () => {
  return (
    <SectionWrapper id="skills" background="default">
      <SectionTitle
        title="Skills & Technologies"
        subtitle="Technologies and tools I work with to bring ideas to life"
      />

      <OrbitingSkills />
    </SectionWrapper>
  );
};

export default Skills;
