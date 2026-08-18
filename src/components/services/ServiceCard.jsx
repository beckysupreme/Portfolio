import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';

const ServiceCard = ({ service, index }) => {
  const { icon: Icon, title, description, features, price, popular } = service;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className={`relative bg-white dark:bg-dark-card rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 ${
        popular ? 'border-2 border-primary-500' : ''
      }`}
    >
      {/* Popular Badge */}
      {popular && (
        <div className="absolute -top-3 -right-3 bg-primary-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          Popular
        </div>
      )}

      {/* Icon */}
      <div className="w-14 h-14 bg-primary-100 dark:bg-primary-900/30 rounded-xl flex items-center justify-center mb-4">
        <Icon className="text-2xl text-primary-600 dark:text-primary-400" />
      </div>

      {/* Title */}
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
        {title}
      </h3>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
        {description}
      </p>

      {/* Features */}
      <ul className="space-y-2 mb-4">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
            <FaCheck className="text-primary-500 text-xs" />
            {feature}
          </li>
        ))}
      </ul>

      {/* Price & CTA */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
        <span className="text-lg font-bold text-primary-600 dark:text-primary-400">
          {price}
        </span>
        <a 
          href="/contact" 
          className="text-sm font-semibold text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
        >
          Get Quote →
        </a>
      </div>
    </motion.div>
  );
};

export default ServiceCard;