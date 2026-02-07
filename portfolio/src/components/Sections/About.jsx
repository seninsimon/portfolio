// src/components/Sections/About.jsx
import { motion } from 'framer-motion';
import { 
  FaCode, 
  FaPalette, 
  FaRocket, 
  FaUsers,
  FaGraduationCap,
  FaBriefcase
} from 'react-icons/fa';
import SectionTitle from '../UI/SectionTitle';

const About = () => {
  const skills = [
    { name: 'Frontend', level: 95, icon: <FaCode />, color: 'from-blue-500 to-cyan-500' },
    { name: 'UI/UX Design', level: 85, icon: <FaPalette />, color: 'from-purple-500 to-pink-500' },
    { name: 'Backend', level: 80, icon: <FaRocket />, color: 'from-green-500 to-emerald-500' },
    { name: 'Team Collaboration', level: 90, icon: <FaUsers />, color: 'from-orange-500 to-red-500' },
  ];

  const timeline = [
    {
      year: '2022 - Present',
      title: 'Senior Frontend Developer',
      company: 'Tech Corp Inc.',
      icon: <FaBriefcase />,
    },
    {
      year: '2020 - 2022',
      title: 'Full Stack Developer',
      company: 'Startup XYZ',
      icon: <FaCode />,
    },
    {
      year: '2018 - 2020',
      title: 'Web Developer',
      company: 'Digital Agency',
      icon: <FaPalette />,
    },
    {
      year: '2014 - 2018',
      title: 'Computer Science',
      company: 'University of Tech',
      icon: <FaGraduationCap />,
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="About Me"
          subtitle="Get to know me"
          centered
        />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Passionate Developer Creating Digital Solutions
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300">
              With over 5 years of experience in web development, I specialize in creating 
              responsive, performant, and accessible web applications. My passion lies in 
              turning complex problems into simple, beautiful designs.
            </p>
            
            <p className="text-gray-600 dark:text-gray-300">
              I believe in writing clean, efficient code and staying up-to-date with the 
              latest technologies. When I'm not coding, you can find me contributing to 
              open-source projects or learning new frameworks.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              <div className="text-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">50+</div>
                <div className="text-gray-600 dark:text-gray-400">Projects</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">5+</div>
                <div className="text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">100%</div>
                <div className="text-gray-600 dark:text-gray-400">Client Satisfaction</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">24/7</div>
                <div className="text-gray-600 dark:text-gray-400">Availability</div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills & Timeline */}
          <div className="space-y-8">
            {/* Skills */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                My Skills
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-blue-600 dark:text-blue-400">
                          {skill.icon}
                        </span>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className={`h-full bg-gradient-to-r ${skill.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Experience & Education
              </h3>
              <div className="space-y-4">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white dark:hover:bg-gray-800 transition-colors"
                  >
                    <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center justify-between">
                        <h4 className="font-semibold text-gray-900 dark:text-white">
                          {item.title}
                        </h4>
                        <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                          {item.year}
                        </span>
                      </div>
                      <p className="text-gray-600 dark:text-gray-400">
                        {item.company}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;