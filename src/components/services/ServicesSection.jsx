import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaServer, 
  FaMobile, 
  FaCloud, 
  FaShieldAlt, 
  FaChartLine,
  FaDatabase,
  FaPaintBrush,
  FaRocket,
  FaCogs,
  FaLaptopCode,
  FaUsers
} from 'react-icons/fa';

const ServicesSection = () => {
  const services = [
    {
      icon: FaCode,
      title: 'Web Development',
      description: 'Build responsive, high-performance web applications using React, Next.js, and modern JavaScript frameworks.',
      features: ['SPA & SSR', 'Responsive Design', 'Performance Optimization', 'SEO Friendly'],
      popular: true
    },
    {
      icon: FaServer,
      title: 'Backend Development',
      description: 'Design scalable REST APIs and microservices with Node.js, Express, and various databases.',
      features: ['REST APIs', 'GraphQL', 'Microservices', 'Database Design'],
      popular: false
    },
    {
      icon: FaMobile,
      title: 'Mobile-First Design',
      description: 'Create seamless mobile experiences that work perfectly across all devices and screen sizes.',
      features: ['Responsive Design', 'PWA', 'Cross-Browser Testing', 'Mobile Optimization'],
      popular: false
    },
    {
      icon: FaDatabase,
      title: 'Database Solutions',
      description: 'Design and optimize database architectures for performance, scalability, and data integrity.',
      features: ['MongoDB', 'PostgreSQL', 'Data Modeling', 'Query Optimization'],
      popular: false
    },
    {
      icon: FaCloud,
      title: 'Cloud & DevOps',
      description: 'Deploy and manage applications on cloud platforms with CI/CD pipelines and infrastructure automation.',
      features: ['AWS', 'Docker', 'CI/CD', 'Kubernetes'],
      popular: false
    },
    {
      icon: FaRocket,
      title: 'Startup MVPs',
      description: 'Rapidly develop minimum viable products to validate your startup idea and get to market fast.',
      features: ['Fast Development', 'Pivot-Ready', 'Scalable Architecture', 'Investor Ready'],
      popular: true
    },
  ];

  const processSteps = [
    { 
      number: '01', 
      title: 'Discovery', 
      desc: 'Understanding your goals, requirements, and vision',
      icon: FaUsers
    },
    { 
      number: '02', 
      title: 'Planning', 
      desc: 'Creating a detailed roadmap and architecture',
      icon: FaCogs
    },
    { 
      number: '03', 
      title: 'Development', 
      desc: 'Building with clean code and best practices',
      icon: FaLaptopCode
    },
    { 
      number: '04', 
      title: 'Launch', 
      desc: 'Deployment, testing, and ongoing support',
      icon: FaRocket
    },
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
          className="text-center mb-16"
        >
          <h1 className="section-title">My Services</h1>
          <p className="section-subtitle mx-auto">
            Comprehensive development solutions tailored to your needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className={`relative bg-white dark:bg-dark-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 ${
                service.popular ? 'border-2 border-primary-500' : ''
              }`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-3 -right-3 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  Popular
                </div>
              )}

              {/* Icon */}
              <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-4">
                <service.icon className="text-2xl text-primary-600 dark:text-primary-400" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <span className="w-1.5 h-1.5 bg-primary-500 rounded-full"></span>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Price & CTA */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                <span className="text-lg font-bold text-primary-600 dark:text-primary-400">
                  {service.price}
                </span>
                <a 
                  href="/contact" 
                  className="text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                >
                  Get Quote →
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Process Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-24"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-12">
            How It Works
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white dark:bg-dark-card p-6 rounded-xl shadow-lg text-center">
                  {/* Step Number */}
                  <div className="text-4xl font-bold text-primary-600 dark:text-primary-400 opacity-20">
                    {step.number}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center mx-auto mb-3">
                    <step.icon className="text-xl text-primary-600 dark:text-primary-400" />
                  </div>
                  
                  {/* Title */}
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h4>
                  
                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {step.desc}
                  </p>
                </div>

                {/* Connector Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 left-full w-full h-0.5 bg-gray-300 dark:bg-gray-700 -translate-y-1/2">
                    <div className="w-3 h-3 bg-primary-500 rounded-full -mt-1 mx-auto"></div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 text-center bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-12 text-white"
        >
          <h2 className="text-3xl font-bold mb-4">
            Ready to Build Your Project?
          </h2>
          <p className="text-lg text-white/80 mb-6 max-w-2xl mx-auto">
            Let's turn your ideas into reality. Get in touch for a free consultation.
          </p>
          <a 
            href="/contact" 
            className="inline-block px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;