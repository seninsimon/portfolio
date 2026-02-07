// src/pages/Resume.jsx
import { motion } from 'framer-motion';
import ResumeSection from '../components/Sections/Resume';

const Resume = () => {
  return (
    <div className="pt-20">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <ResumeSection />
      </motion.div>
    </div>
  );
};

export default Resume;