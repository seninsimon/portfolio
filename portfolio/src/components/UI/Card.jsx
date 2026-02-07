// src/components/UI/Card.jsx
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const Card = ({ 
  title, 
  description, 
  image, 
  tags = [], 
  links = {},
  className = '',
  children 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden card-hover ${className}`}
    >
      {image && (
        <div className="relative h-48 overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
          />
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        
        {description && (
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            {description}
          </p>
        )}
        
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        
        {children}
        
        {(links.demo || links.github) && (
          <div className="flex space-x-4 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            {links.demo && (
              <a
                href={links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
              >
                <FaExternalLinkAlt className="mr-2" />
                Live Demo
              </a>
            )}
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                <FaGithub className="mr-2" />
                Code
              </a>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;