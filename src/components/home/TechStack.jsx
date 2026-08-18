import React from 'react';
import { motion } from 'framer-motion';
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiGit,
  SiDocker,
  SiPostgresql,
  SiFirebase,
  SiNextdotjs,
} from 'react-icons/si';

const TechStack = () => {
  const technologies = [
    { icon: SiReact, name: 'React', color: '#61DAFB' },
    { icon: SiNodedotjs, name: 'Node.js', color: '#339933' },
    { icon: SiExpress, name: 'Express', color: '#000000' },
    { icon: SiMongodb, name: 'MongoDB', color: '#47A248' },
    { icon: SiNextdotjs, name: 'Next.js', color: '#000000' },
    { icon: SiJavascript, name: 'JavaScript', color: '#F7DF1E' },
    { icon: SiTypescript, name: 'TypeScript', color: '#3178C6' },
    { icon: SiTailwindcss, name: 'Tailwind', color: '#06B6D4' },
    { icon: SiPostgresql, name: 'PostgreSQL', color: '#4169E1' },
    { icon: SiFirebase, name: 'Firebase', color: '#FFCA28' },
    { icon: SiGit, name: 'Git', color: '#F05032' },
    { icon: SiDocker, name: 'Docker', color: '#2496ED' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <section className="py-20 bg-gray-50/50 dark:bg-dark-bg/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            Tech Stack
          </h2>
          <p className="section-subtitle mx-auto">
            Technologies I work with to build amazing digital experiences
          </p>
        </motion.div>

        {/* Tech Icons Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-6 md:gap-8"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10, scale: 1.05 }}
              className="flex flex-col items-center p-4 bg-white dark:bg-dark-card rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <tech.icon 
                className="text-4xl md:text-5xl mb-3" 
                style={{ color: tech.color }}
              />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8"
        >
          <div className="text-center p-6 bg-white dark:bg-dark-card rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-primary-600 dark:text-primary-400">10+</div>
            <div className="text-gray-600 dark:text-gray-300 mt-2">Projects Completed</div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-dark-card rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-primary-600 dark:text-primary-400">3+</div>
            <div className="text-gray-600 dark:text-gray-300 mt-2">Years Experience</div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-dark-card rounded-xl shadow-lg">
            <div className="text-4xl font-bold text-primary-600 dark:text-primary-400">12</div>
            <div className="text-gray-600 dark:text-gray-300 mt-2">Technologies</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;