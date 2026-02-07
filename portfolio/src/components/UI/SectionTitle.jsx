// src/components/UI/SectionTitle.jsx
import { motion } from 'framer-motion';

const SectionTitle = ({ 
  title, 
  subtitle, 
  centered = false,
  className = '' 
}) => {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''} ${className}`}>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-blue-600 dark:text-blue-400 font-semibold mb-2"
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white"
      >
        {title}
      </motion.h2>
      
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '80px' }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className={`h-1 gradient-bg mt-4 ${centered ? 'mx-auto' : ''}`}
      />
    </div>
  );
};

export default SectionTitle;