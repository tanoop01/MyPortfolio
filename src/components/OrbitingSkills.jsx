import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const OrbitingSkills = () => {
  const [isVisible, setIsVisible] = useState(false);



  // Skills organized by orbit (inner to outer)
  // Each skill has name and mastery percentage (0-100)
  const orbits = [
    {
      radius: 150,
      skills: [
        { name: 'Python', mastery: 80 },
        { name: 'C++', mastery: 60 },
        { name: 'C', mastery:  65},
        { name: 'JavaScript', mastery: 75 },
        { name: 'HTML', mastery: 85 },
        { name: 'CSS', mastery: 80 },
        { name: 'TypeScript', mastery: 45 }
      ]
    },
    {
      radius: 300,
      skills: [
           { name: 'Numpy', mastery: 65 },
        { name: 'Pandas', mastery: 55 },
        { name: 'Matplotlib', mastery: 45 },
        { name: 'Scikit Learn', mastery: 45 },
        { name: 'Seaborn', mastery: 40 },
        { name: 'PyTorch', mastery: 25 },
         { name: 'TensorFlow', mastery: 20 },
         { name: 'Git/Github', mastery: 75 },
   
      ]
    },

     {
      radius: 450,
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
        { name: 'Postman', mastery: 40 },

      ]
    },
  
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    // Mobile responsive: Reduce height and scale on small screens
    <div className="relative w-full h-[600px] sm:h-[800px] md:h-[900px] lg:h-[1000px] flex items-center justify-center overflow-visible scale-75 xs:scale-90 sm:scale-95 md:scale-100">
      {/* Concentric Circles - Scale down on mobile */}
      {orbits.map((orbit, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full border border-white/20"
          style={{
            // Responsive orbit sizing
            width: `min(${orbit.radius * 2}px, ${orbit.radius * 1.5}px)`,
            height: `min(${orbit.radius * 2}px, ${orbit.radius * 1.5}px)`,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: index * 0.1, duration: 0.8 }}
        />
      ))}

     
      {/* Skills on Orbits */}
      {orbits.map((orbit, orbitIndex) => (
        <div key={orbitIndex}>
          {orbit.skills.map((skill, skillIndex) => {
            // Add offset to prevent stacking
            const totalSkills = orbit.skills.length;
            const angleOffset = orbitIndex * 80; // Rotate each orbit slightly
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
                {/* Mobile responsive skill badges */}
                <motion.div
                  className="relative px-2 py-1 sm:px-3 sm:py-1.5 rounded-full font-medium text-[10px] xs:text-xs whitespace-nowrap shadow-lg cursor-pointer border border-white sm:border-2 overflow-visible group"
                  whileHover={{
                    scale: 1.15,
                    zIndex: 50,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {/* Background fill based on mastery */}
                  <div
                    className="absolute inset-0 transition-all duration-300 rounded-full"
                    style={{
                      background: `linear-gradient(to right, rgba(229, 231, 235, 0.5) ${skill.mastery}%, rgba(0, 0, 0, 0.9) ${skill.mastery}%)`,
                    }}
                  />
                  
                  {/* Skill text */}
                  <span className="relative z-10 text-white">
                    {skill.name}
                  </span>
                  
                  {/* Mastery percentage tooltip */}
                  <div
                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-black/90 text-white px-2 py-1 rounded text-[10px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
                  >
                    ✅ {skill.mastery}% 
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      ))}

     
    </div>
  );
};

export default OrbitingSkills;
