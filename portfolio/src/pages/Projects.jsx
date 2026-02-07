// src/pages/Projects.jsx
import { motion } from 'framer-motion';
import ProjectsSection from '../components/Sections/Projects';
import SectionTitle from '../components/UI/SectionTitle';

const Projects = () => {
  return (
    <div className="">
      
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8"
        >
          <ProjectsSection />
        </motion.div>
      </div>
    
  );
};

export default Projects;