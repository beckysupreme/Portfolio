import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBriefcase, 
  FaGraduationCap, 
  FaCode, 
  FaDownload,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaBuilding,
  FaUserGraduate
} from 'react-icons/fa';
import { MdWork } from 'react-icons/md';

const ResumeSection = () => {
  const [activeTab, setActiveTab] = useState('experience');

  const experience = [
    {
      id: 1,
      title: 'Junior Fullstack Developer',
      company: 'Broad View Plc.',
      location: 'Addis Ababa , Ethiopia',
      period: '2024 - Present',
      description: [
        'Led development of 2+ enterprise-level web applications using React and Node.js',
        'Architected microservices infrastructure serving 100K+ daily active users',
        'Mentored junior developers and conducted code reviews for quality assurance',
        'Reduced API response time by 40% through query optimization and caching',
      ],
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker']
    },
    {
      id: 2,
      title: 'Fullstack Developer',
      company: 'Center Statics Of Ethiopia.',
      location: 'Addis Ababa, Ethiopia',
      period: '2023',
      description: [
        'Developed RESTful APIs and frontend interfaces for 10+ client projects',
        'Implemented real-time features using WebSockets and Socket.io',
        'Optimized database queries resulting in 30% faster page loads',
        'Collaborated with design team to create pixel-perfect responsive UIs',
      ],
      technologies: ['React', 'Express', 'PostgreSQL', 'Firebase', 'Tailwind']
    },
    // {
    //   id: 3,
    //   title: 'Junior Developer',
    //   company: 'Startup Hub',
    //   location: 'Addis Ababa, Ethiopia',
    //   period: '2019 - 2020',
    //   description: [
    //     'Built and maintained company website and internal tools',
    //     'Assisted in developing e-commerce platform with payment integration',
    //     'Performed bug fixes and implemented new features based on client feedback',
    //     'Participated in agile ceremonies and sprint planning',
    //   ],
    //   technologies: ['JavaScript', 'PHP', 'MySQL', 'Bootstrap', 'Git']
    // },
  ];

  const education = [
    {
      id: 1,
      degree: 'Bachelor of Science in Information Technology',
      school: 'Haramaya University',
      location: 'Haramaya, Ethiopia',
      period: '2021 - 2024',
      description: [
        'Graduated with honors ',
        'Specialized in Web Development , Networking and Database Systems',
        'Capstone Project: "E-Learning Platform for Ethiopian Schools"',
        'Member of Computer Science Club and Hackathon organizer',
      ],
      achievements: ['']
    },
    {
      id: 2,
      degree: 'Fullstack Web Development Bootcamp',
      school: 'Udemy / Online',
      location: 'Online',
      period: '2023',
      description: [
        'Intensive 6-month program covering modern web technologies',
        'Built 15+ projects including real-world applications',
        'Learned Agile methodologies and team collaboration',
      ],
      achievements: ['Certificate of Completion']
    },
  ];

  const skills = {
    frontend: {
      name: 'Frontend',
      icon: FaCode,
      skills: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'JavaScript', level: 92 },
        { name: 'TypeScript', level: 80 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'HTML/CSS', level: 95 },
      ]
    },
    backend: {
      name: 'Backend',
      icon: FaCode,
      skills: [
        { name: 'Node.js', level: 88 },
        { name: 'Express', level: 85 },
        { name: 'Python', level: 75 },
        { name: 'Java', level: 70 },
        { name: 'PHP', level: 65 },
      ]
    },
    database: {
      name: 'Database',
      icon: FaCode,
      skills: [
        { name: 'MongoDB', level: 85 },
        { name: 'PostgreSQL', level: 80 },
        { name: 'MySQL', level: 78 },
        { name: 'Firebase', level: 82 },
        { name: 'Redis', level: 70 },
      ]
    },
    tools: {
      name: 'Tools & DevOps',
      icon: FaCode,
      skills: [
        { name: 'Git/GitHub', level: 90 },
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'Vercel/Netlify', level: 85 },
        { name: 'CI/CD', level: 72 },
      ]
    }
  };

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
        duration: 0.5,
      },
    },
  };

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
          <h1 className="section-title">My Resume</h1>
          <p className="section-subtitle mx-auto">
            My professional journey, skills, and qualifications
          </p>
          
          {/* Download Resume Button */}
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://drive.google.com/file/d/1dPcgGGVagmaLHYcANUeqWFL5dVWlcvIu/view?usp=drive_link"
            download
            className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg"
          >
            <FaDownload />
            Download Resume
          </motion.a>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-200 dark:bg-dark-card rounded-xl p-1">
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'experience'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              <FaBriefcase />
              Experience
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'education'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              <FaGraduationCap />
              Education
            </button>
            <button
              onClick={() => setActiveTab('skills')}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeTab === 'skills'
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400'
              }`}
            >
              <FaCode />
              Skills
            </button>
          </div>
        </div>

        {/* Content - Fixed with AnimatePresence */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Experience Tab */}
            {activeTab === 'experience' && (
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative bg-white dark:bg-dark-card rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8"
                  >
                    {/* Timeline Line */}
                    {index < experience.length - 1 && (
                      <div className="absolute left-8 top-24 bottom-0 w-0.5 bg-primary-300 dark:bg-primary-600"></div>
                    )}
                    
                    {/* Timeline Dot */}
                    <div className="absolute left-6 top-8 w-4 h-4 bg-primary-600 rounded-full border-4 border-white dark:border-dark-card"></div>

                    <div className="ml-10">
                      <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                            {exp.title}
                          </h3>
                          <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold">
                            <FaBuilding className="text-sm" />
                            {exp.company}
                          </div>
                        </div>
                        <div className="flex flex-col items-end">
                          <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                            {exp.period}
                          </span>
                          <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                            <FaMapMarkerAlt className="text-xs" />
                            {exp.location}
                          </span>
                        </div>
                      </div>

                      <ul className="space-y-2 text-gray-600 dark:text-gray-300 mb-4">
                        {exp.description.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-primary-500 mt-1.5">▸</span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Education Tab */}
            {activeTab === 'education' && (
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <motion.div
                    key={edu.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="relative bg-white dark:bg-dark-card rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8"
                  >
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-semibold">
                          <FaUserGraduate className="text-sm" />
                          {edu.school}
                        </div>
                      </div>
                      <div className="flex flex-col items-end">
                        <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                          {edu.period}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                          <FaMapMarkerAlt className="text-xs" />
                          {edu.location}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2 text-gray-600 dark:text-gray-300 mb-4">
                      {edu.description.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-primary-500 mt-1.5">▸</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {edu.achievements.map((ach, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 text-sm rounded-full"
                        >
                          🏆 {ach}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Skills Tab */}
            {activeTab === 'skills' && (
              <div className="grid md:grid-cols-2 gap-8">
                {Object.entries(skills).map(([key, category]) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="bg-white dark:bg-dark-card rounded-xl shadow-lg p-6"
                  >
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <category.icon className="text-primary-600 dark:text-primary-400" />
                      {category.name}
                    </h3>
                    
                    <div className="space-y-4">
                      {category.skills.map((skill, idx) => (
                        <div key={idx}>
                          <div className="flex justify-between text-sm mb-1">
                            <span className="text-gray-700 dark:text-gray-300">{skill.name}</span>
                            <span className="text-gray-500 dark:text-gray-400 font-semibold">
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                              className="h-full bg-gradient-to-r from-primary-500 to-purple-500 rounded-full"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Quick Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="bg-white dark:bg-dark-card p-6 rounded-xl shadow-lg text-center">
            <div className="text-4xl font-bold text-primary-600 dark:text-primary-400">3+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">Years Experience</div>
          </div>
          <div className="bg-white dark:bg-dark-card p-6 rounded-xl shadow-lg text-center">
            <div className="text-4xl font-bold text-primary-600 dark:text-primary-400">10+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">Projects Delivered</div>
          </div>
          <div className="bg-white dark:bg-dark-card p-6 rounded-xl shadow-lg text-center">
            <div className="text-4xl font-bold text-primary-600 dark:text-primary-400">15+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">Technologies</div>
          </div>
          <div className="bg-white dark:bg-dark-card p-6 rounded-xl shadow-lg text-center">
            <div className="text-4xl font-bold text-primary-600 dark:text-primary-400">5+</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">Clients Happy</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ResumeSection;