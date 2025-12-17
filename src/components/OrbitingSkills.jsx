import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const OrbitingSkills = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Core skill in center
  const coreSkill = "Full Stack Developer";

  // Skills organized by orbit (inner to outer)
  const orbits = [
    {
      radius: 150,
      skills: []
    },
    {
      radius: 250,
      skills: ['Next.js', 'Python', 'TypeScript', 'REST APIs', 'Git']
    },
    {
      radius: 350,
      skills: ['React', 'Node.js', 'MongoDB','AWS', 'Docker', 'Tailwind', 'PostgreSQL', 'AI/ML']
    },
    // {
    //   radius: 400,
    //   skills: ['C/C++']
    // }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full h-[1000px] flex items-center justify-center overflow-hidden">
      {/* Concentric Circles */}
      {orbits.map((orbit, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full border border-white/20"
          style={{
            width: orbit.radius * 2,
            height: orbit.radius * 2,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: index * 0.1, duration: 0.8 }}
        />
      ))}

      {/* Center Core Skill */}
      <motion.div
        className="absolute z-20 px-6 py-3 bg-white text-black rounded-full font-bold text-base shadow-2xl"
        initial={{ opacity: 0, scale: 0 }}
        animate={isVisible ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.3, duration: 0.5, type: 'spring' }}
      >
        {coreSkill}
      </motion.div>

      {/* Skills on Orbits */}
      {orbits.map((orbit, orbitIndex) => (
        <div key={orbitIndex}>
          {orbit.skills.map((skill, skillIndex) => {
            // Add offset to prevent stacking
            const totalSkills = orbit.skills.length;
            const angleOffset = orbitIndex * 15; // Rotate each orbit slightly
            const angle = (360 / totalSkills) * skillIndex + angleOffset;
            const radian = (angle * Math.PI) / 180;
            const x = Math.cos(radian) * orbit.radius;
            const y = Math.sin(radian) * orbit.radius;

            return (
              <motion.div
                key={`${orbitIndex}-${skillIndex}`}
                className="absolute"
                style={{
                  left: `calc(50% + ${x}px)`,
                  top: `calc(50% + ${y}px)`,
                  transform: 'translate(-50%, -50%)',
                }}
                initial={{ opacity: 0, scale: 0 }}
                animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  delay: 0.5 + orbitIndex * 0.1 + skillIndex * 0.05,
                  duration: 0.5,
                  type: 'spring',
                }}
              >
                <motion.div
                  className="px-3 py-1.5 bg-black/90 backdrop-blur-md text-white rounded-full font-medium text-xs whitespace-nowrap shadow-lg cursor-pointer border-2 border-white"
                  whileHover={{
                    scale: 1.15,
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    color: 'white',
                    borderColor: 'white',
                    zIndex: 50,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {skill}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      ))}

      {/* Title */}
      {/* <motion.div
        className="absolute top-0 left-1/2 -translate-x-1/2 z-30"
        initial={{ opacity: 0, y: -20 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <h2 className="text-4xl font-bold text-white">Skills</h2>
      </motion.div> */}
    </div>
  );
};

export default OrbitingSkills;
