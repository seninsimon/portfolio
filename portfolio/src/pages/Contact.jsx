// src/pages/Contact.jsx
import { motion } from 'framer-motion';
import ContactSection from '../components/Sections/Contact';
import SectionTitle from '../components/UI/SectionTitle';

const Contact = () => {
  return (
    <div className="">
      <div className="container mx-auto ">
            {/* <SectionTitle
            title="Contact Me"
            subtitle="Let's Connect"
            centered
            /> */}
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-8"
        >
          <ContactSection />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;