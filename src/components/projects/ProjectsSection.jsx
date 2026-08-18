import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaCode, 
  FaMobile, 
  FaServer,
  FaDatabase,
  FaCloud,
  FaSearch,
  FaFilter
} from 'react-icons/fa';

const ProjectsSection = () => {
  const [filter, setFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    {
      id: 1,
      title: 'Elon Decor',
      description: 'Full-featured Decor platform with Booking Events , Packages , and admin dashboard.',
      longDescription: 'Built a complete Decor solution with product management, booking , Packages .',
      image: 'project1.png',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'MongoDB', 'TypeScript'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/yourusername/ecommerce',
      features: [
        'User authentication & authorization',
        'Product catalog with search & filters',
        'Shopping cart & wishlist',
        'Payment processing with Stripe',
        'Admin dashboard for inventory',
        'Order tracking & email notifications'
      ],
      date: '2026',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 2,
      title: 'Report Managment System',
      description: 'A full-stack report management solution built with React, Node.js, and MongoDB featuring real-time notifications, automated scheduling, and dynamic report templates.',
      longDescription: 'Developed a robust task management API with advanced features like team collaboration, project tracking, and automated workflows. Built with scalability and security in mind.',
      image: 'project2.png',
      category: 'FullStack',
      technologies: ['React','Node.js', 'Express', 'MongoDb','Bootstrap','Socket.io','JWT'],
      liveLink: 'https://api.example.com',
      githubLink: 'https://github.com/yourusername/task-api',
      features: [
        'JWT authentication & refresh tokens',
        'Role-based access control (RBAC)',
        'Real-time notifications with Socket.io',
        'Task assignment & team management',
        'Advanced search & filtering',
        'Comprehensive API documentation'
      ],
      date: '2026',
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 3,
      title: 'Ethiopian Tour and Travel',
      description: 'Manage Tour and Travel App includes maps,historical places,booking system.',
      longDescription: 'Mobile app to provide Tour and travel.',
      image: 'project3.png',
      category: 'Fullstack',
      technologies: ['Java', 'Firebase', 'Django','PostgreSQL'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/yourusername/realestate',
      features: [
        'Interactive property maps',
        'Advanced search with filters',
        'Data visualization & analytics',
        'User saved properties',
        'Price comparison tools',
        'Responsive dashboard design'
      ],
      date: '2022',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 4,
      title: 'Pharmacey',
      description: 'A system they manages Drugs and other things in the store.',
      longDescription: 'Built a feature-rich chat application with real-time messaging, group conversations, file sharing, and user presence indicators. Features include message reactions, typing indicators, and read receipts.',
      image: 'project4.png',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Express'],
      liveLink: 'https://example.com',
      githubLink: 'https://github.com/yourusername/chat-app',
      features: [
        'Real-time messaging with Socket.io',
        'Private & group conversations',
        'File sharing & attachments',
        'Message reactions & typing indicators',
        'User presence & online status',
        'Read receipts & message history'
      ],
      date: '2025',
      color: 'from-red-500 to-orange-500'
    },
    {
      id: 5,
      title: 'Class Scheduling System',
      description: 'Class scheduling system to controll the schedules.',
      longDescription: 'Designed and developed this very portfolio website with dark/light mode, smooth animations, and a clean modern design. Built with React and Tailwind CSS for optimal performance.',
      image: 'project5.png',
      category: 'frontend',
      technologies: ['PHP', 'CSS', 'Bootstrap', 'Mysql'],
      liveLink: 'https://yourportfolio.com',
      githubLink: 'https://github.com/yourusername/portfolio',
      features: [
        'Dark/light mode toggle',
        'Smooth animations with Framer Motion',
        'Responsive mobile-first design',
        'EmailJS contact form integration',
        'Interactive project gallery',
        'Optimized performance & SEO'
      ],
      date: '2024',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      id: 6,
      title: 'Central Statics Agencey ',
      description: 'A system manages the data in the statics office and to give the access to the custumers.',
      longDescription: 'Built a comprehensive food delivery API with restaurant management, order processing, driver assignment, and real-time tracking. Integrated with payment gateways and SMS notifications.',
      image: 'project6.png',
      category: 'Full Stack',
      technologies: ['PHP', 'Css', 'MySql', 'Bootstrap', 'HTML'],
      liveLink: 'https://api.example.com',
      githubLink: 'https://github.com/yourusername/food-delivery',
      features: [
        'Restaurant & menu management',
        'Order placement & tracking',
        'Real-time driver assignment',
        'Payment processing with Stripe',
        'SMS notifications with Twilio',
        'Analytics & reporting dashboard'
      ],
      date: '2022',
      color: 'from-yellow-500 to-amber-500'
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects', icon: FaFilter },
    { id: 'fullstack', label: 'Full Stack', icon: FaCode },
    { id: 'frontend', label: 'Frontend', icon: FaMobile },
    { id: 'backend', label: 'Backend', icon: FaServer },
  ];

  // Filter projects based on category and search
  const filteredProjects = projects.filter(project => {
    const matchesCategory = filter === 'all' || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
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
          className="text-center mb-12"
        >
          <h1 className="section-title">My Projects</h1>
          <p className="section-subtitle mx-auto">
            A showcase of my work, skills, and passion for development
          </p>
        </motion.div>

        {/* Search & Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row gap-4 mb-12"
        >
          {/* Search Bar */}
          <div className="flex-1 relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-white dark:bg-dark-card border border-gray-300 dark:border-gray-700 rounded-xl focus:outline-none focus:border-primary-500 dark:focus:border-primary-400 transition-colors text-gray-900 dark:text-white"
            />
          </div>

          {/* Category Filter */}
          <div className="flex gap-2 overflow-x-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-semibold transition-all duration-300 whitespace-nowrap ${
                  filter === cat.id
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-gray-200 dark:bg-dark-card text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
                }`}
              >
                <cat.icon className="text-sm" />
                {cat.label}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid - FIXED */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter + searchTerm}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={cardVariants}
                  whileHover={{ y: -10 }}
                  className="bg-white dark:bg-dark-card rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group flex flex-col"
                >
                  {/* Project Image */}
                  <div className={`relative h-48 bg-gradient-to-r ${project.color} flex items-center justify-center overflow-hidden flex-shrink-0`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
                    <div className="relative z-10 text-center">
                      <div className="text-6xl font-bold text-white/20">0{project.id}</div>
                      <div className="text-sm text-white/60 mt-2">{project.date}</div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                        {project.title}
                      </h3>
                      <span className="text-xs font-semibold px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full flex-shrink-0">
                        {project.category}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2 flex-1">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 text-xs text-gray-500 dark:text-gray-400">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3 pt-4 border-t border-gray-200 dark:border-gray-700 mt-auto">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold rounded-lg transition-all duration-300"
                      >
                        <FaExternalLinkAlt className="text-xs" />
                        Live Demo
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 text-sm font-semibold rounded-lg transition-all duration-300"
                      >
                        <FaGithub />
                        Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="col-span-full text-center py-20"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  No Projects Found
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Try adjusting your search or filter to find what you're looking for.
                </p>
              </motion.div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;