import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaMobile, FaServer, FaCloud, FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const AboutSection = () => {
  const stats = [
    { icon: FaBriefcase, value: '3+', label: 'Years Experience' },
    { icon: FaCode, value: '10+', label: 'Projects Completed' },
    { icon: FaGraduationCap, value: '5+', label: 'Certifications' },
    { icon: FaServer, value: '15+', label: 'API Endpoints Built' },
  ];

  const expertise = [
    { icon: FaCode, title: 'Frontend Development', desc: 'React, Next.js, Tailwind CSS, TypeScript' },
    { icon: FaServer, title: 'Backend Development', desc: 'Node.js, Express, PostgreSQL, MongoDB' },
    { icon: FaMobile, title: 'Responsive Design', desc: 'Mobile-first, Cross-browser, Accessibility' },
    { icon: FaCloud, title: 'DevOps & Cloud', desc: 'AWS, Docker, Vercel, Netlify, CI/CD' },
  ];

  return (
    <section className="min-h-screen py-20 pt-28">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="section-title">About Me</h1>
          <p className="section-subtitle mx-auto">
            Get to know me better — my journey, skills, and what drives me as a developer
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Image & Personal Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Profile Image */}
            <div className="relative">
              <div className="w-full h-80 md:h-96 rounded-2xl overflow-hidden bg-gradient-to-br from-primary-400 to-purple-600 shadow-2xl">
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-8xl text-white font-bold">B</span>
                </div>
                {/* Uncomment when you have your image */}
                {/* <img 
                  src="/src/assets/images/profile.jpg" 
                  alt="Bereket" 
                  className="w-full h-full object-cover"
                /> */}
              </div>
              {/* Decorative border */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-primary-500 rounded-2xl -z-10"></div>
            </div>

            {/* Personal Info Cards */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white dark:bg-dark-card p-4 rounded-xl shadow-lg">
                <p className="text-sm text-gray-500 dark:text-gray-400">Name</p>
                <p className="font-semibold text-gray-900 dark:text-white">Bereket Getnet</p>
              </div>
              <div className="bg-white dark:bg-dark-card p-4 rounded-xl shadow-lg">
                <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                <p className="font-semibold text-gray-900 dark:text-white">Ethiopia</p>
              </div>
              <div className="bg-white dark:bg-dark-card p-4 rounded-xl shadow-lg">
                <p className="text-sm text-gray-500 dark:text-gray-400">Experience</p>
                <p className="font-semibold text-gray-900 dark:text-white">3+ Years</p>
              </div>
              <div className="bg-white dark:bg-dark-card p-4 rounded-xl shadow-lg">
                <p className="text-sm text-gray-500 dark:text-gray-400">Availability</p>
                <p className="font-semibold text-green-500">Open to Work</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Bio & Expertise */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Bio */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Who I Am
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
                <p>
                  I'm a passionate Fullstack Developer with a strong focus on building 
                  scalable, high-performance web applications. With 3+ years of experience 
                  in the industry, I've worked on everything from startup MVPs to enterprise-grade 
                  platforms.
                </p>
                <p>
                  My approach combines clean code practices with a user-centric mindset. 
                  I believe that great software isn't just about functionality — it's about 
                  creating experiences that people love to use.
                </p>
                <p>
                  When I'm not coding, I'm exploring new technologies, contributing to 
                  open-source projects, or mentoring aspiring developers. I'm always 
                  looking for opportunities to learn and grow.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-dark-card p-4 rounded-xl shadow-lg text-center"
                >
                  <stat.icon className="text-2xl text-primary-600 dark:text-primary-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Expertise Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            My Expertise
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {expertise.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-dark-card p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg">
                    <item.icon className="text-2xl text-primary-600 dark:text-primary-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;