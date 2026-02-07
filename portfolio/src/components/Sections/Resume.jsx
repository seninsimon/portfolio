// src/components/Sections/Resume.jsx
import { motion } from 'framer-motion';
import { 
  FaDownload, 
  FaBriefcase, 
  FaGraduationCap,
  FaCertificate,
  FaCode,
  FaTools
} from 'react-icons/fa';
import SectionTitle from '../UI/SectionTitle';
import Button from '../UI/Button';

const Resume = () => {
  const experiences = [
    {
      year: '2022 - Present',
      title: 'Senior Frontend Developer',
      company: 'Tech Corp Inc.',
      description: 'Led development of responsive web applications using React and TypeScript.',
      icon: <FaBriefcase />,
    },
    {
      year: '2020 - 2022',
      title: 'Full Stack Developer',
      company: 'Startup XYZ',
      description: 'Built full-stack applications with React, Node.js, and MongoDB.',
      icon: <FaCode />,
    },
    {
      year: '2018 - 2020',
      title: 'Web Developer',
      company: 'Digital Agency',
      description: 'Developed client websites and e-commerce platforms.',
      icon: <FaTools />,
    },
  ];

  const education = [
    {
      year: '2014 - 2018',
      degree: 'Bachelor of Science',
      institution: 'University of Technology',
      description: 'Computer Science Major',
      icon: <FaGraduationCap />,
    },
    {
      year: '2019',
      degree: 'Full Stack Development',
      institution: 'Coding Bootcamp',
      description: 'MERN Stack Certification',
      icon: <FaCertificate />,
    },
  ];

  const skills = [
    'React', 'TypeScript', 'Next.js', 'Node.js', 'Express', 'MongoDB',
    'PostgreSQL', 'GraphQL', 'Tailwind CSS', 'Framer Motion', 'AWS',
    'Docker', 'Git', 'CI/CD', 'Jest', 'Cypress'
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <SectionTitle
            title="My Resume"
            subtitle="Professional Journey"
          />
          
          <Button
            size="large"
            onClick={() => window.open('/resume.pdf', '_blank')}
            className="flex items-center space-x-2"
          >
            <FaDownload />
            <span>Download PDF</span>
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center space-x-2">
              <FaBriefcase />
              <span>Work Experience</span>
            </h3>
            
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative pl-8 pb-8"
                >
                  {/* Timeline line */}
                  <div className="absolute left-3 top-0 bottom-0 w-0.5 bg-blue-200 dark:bg-blue-900" />
                  
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-blue-600 dark:bg-blue-400 flex items-center justify-center">
                    {exp.icon}
                  </div>
                  
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                      <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.title}
                      </h4>
                      <span className="text-blue-600 dark:text-blue-400 font-semibold">
                        {exp.year}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 font-medium mb-2">
                      {exp.company}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Sidebar - Education & Skills */}
          <div className="space-y-8">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center space-x-2">
                <FaGraduationCap />
                <span>Education</span>
              </h3>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-bold text-gray-900 dark:text-white">
                          {edu.degree}
                        </h4>
                        <p className="text-gray-700 dark:text-gray-300">
                          {edu.institution}
                        </p>
                      </div>
                      <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                        {edu.year}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Skills & Expertise
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                    className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm font-medium"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;