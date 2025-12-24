import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const OrbitingSkills = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Skills organized by orbit (inner to outer)
  // Each skill has name and mastery percentage (0-100)
  const orbits = [
    {
      radius: 150,
      title: 'Core Languages',
      skills: [
        { name: 'Python', mastery: 80 },
        { name: 'C++', mastery: 60 },
        { name: 'C', mastery: 65 },
        { name: 'JavaScript', mastery: 75 },
        { name: 'HTML', mastery: 85 },
        { name: 'CSS', mastery: 80 },
        { name: 'TypeScript', mastery: 45 }
      ]
    },
    {
      radius: 300,
      title: 'Data Science & AI',
      skills: [
        { name: 'Numpy', mastery: 65 },
        { name: 'Pandas', mastery: 55 },
        { name: 'Matplotlib', mastery: 45 },
        { name: 'Scikit Learn', mastery: 45 },
        { name: 'Seaborn', mastery: 40 },
        { name: 'PyTorch', mastery: 25 },
        { name: 'TensorFlow', mastery: 20 },
        { name: 'Git/Github', mastery: 75 }
      ]
    },
    {
      radius: 450,
      title: 'Full Stack & Tools',
      skills: [
        { name: 'React', mastery: 55 },
        { name: 'Next.js', mastery: 45 },
        { name: 'Tailwind CSS', mastery: 65 },
        { name: 'Bootstrap', mastery: 60 },
        { name: 'Node.js', mastery: 55 },
        { name: 'Express.js', mastery: 45 },
        { name: 'REST APIs', mastery: 35 },
        { name: 'MySQL', mastery: 45 },
        { name: 'PostgreSQL', mastery: 25 },
        { name: 'MongoDB', mastery: 70 },
        { name: 'Firebase', mastery: 25 },
        { name: 'Supabase', mastery: 20 },
        { name: 'AWS', mastery: 40 },
        { name: 'Postman', mastery: 40 }
      ]
    }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <>
      {/* Mobile List View (< lg) */}
      <div className="lg:hidden w-full px-4">
        <div className="max-w-2xl mx-auto space-y-8">
          {orbits.map((orbit, orbitIndex) => (
            <motion.div
              key={orbitIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: orbitIndex * 0.15, duration: 0.5 }}
              className="space-y-4"
            >
              {/* Category Title */}
              <h3 className="text-xl font-bold text-white/90 text-center mb-4">
                {orbit.title}
              </h3>
              
              {/* Skills Grid */}
              <div className="flex flex-wrap justify-center gap-2">
                {orbit.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      delay: orbitIndex * 0.15 + skillIndex * 0.03,
                      duration: 0.3,
                      type: 'spring',
                    }}
                    className="relative group"
                  >
                    {/* Skill Badge */}
                    <div className="relative px-4 py-2 rounded-full font-medium text-sm bg-white/10 border border-white/30 backdrop-blur-sm text-white hover:bg-white/20 hover:border-white/50 transition-all duration-300 cursor-pointer">
                      {/* Progress bar background */}
                      <div
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        style={{
                          clipPath: `inset(0 ${100 - skill.mastery}% 0 0)`,
                        }}
                      />
                      
                      {/* Skill Name */}
                      <span className="relative z-10">{skill.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Desktop Orbiting View (>= lg) */}
      <div className="hidden lg:block relative w-full h-[1000px]">
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Concentric Circles */}
          {orbits.map((orbit, index) => (
            <motion.div
              key={`circle-${index}`}
              className="absolute rounded-full border border-white/30"
              style={{
                width: `${orbit.radius * 2}px`,
                height: `${orbit.radius * 2}px`,
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            />
          ))}

          {/* Skills on Orbits */}
          {orbits.map((orbit, orbitIndex) => 
            orbit.skills.map((skill, skillIndex) => {
              const totalSkills = orbit.skills.length;
              const angleOffset = orbitIndex * 80;
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
                    className="relative px-3 py-1.5 rounded-full font-medium text-xs whitespace-nowrap shadow-lg cursor-pointer border-2 border-white overflow-visible group bg-black/80"
                    whileHover={{
                      scale: 1.15,
                      zIndex: 50,
                    }}
                    transition={{ duration: 0.2 }}
                  >
                    <span className="relative z-10 text-white">
                      {skill.name}
                    </span>
                  </motion.div>
                </motion.div>
              );
            })
          )}
        </div>
      </div>
    </>
  );
};

export default OrbitingSkills;
