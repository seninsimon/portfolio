// src/components/Sections/Skills.jsx
import { motion } from 'framer-motion';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaFigma,
  FaDatabase
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiTailwindcss, 
  SiMongodb, 
  SiGraphql,
  SiNextdotjs,
  SiRedux,
  SiJest,
  SiPostgresql
} from 'react-icons/si';
import SectionTitle from '../UI/SectionTitle';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: <FaReact />, level: 95, color: 'text-cyan-500' },
        { name: 'Next.js', icon: <SiNextdotjs />, level: 90, color: 'text-gray-900 dark:text-white' },
        { name: 'TypeScript', icon: <SiTypescript />, level: 85, color: 'text-blue-600' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, level: 95, color: 'text-teal-500' },
        { name: 'Redux', icon: <SiRedux />, level: 85, color: 'text-purple-600' },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, level: 90, color: 'text-green-600' },
        { name: 'Python', icon: <FaPython />, level: 80, color: 'text-yellow-500' },
        { name: 'GraphQL', icon: <SiGraphql />, level: 75, color: 'text-pink-600' },
        { name: 'PostgreSQL', icon: <SiPostgresql />, level: 85, color: 'text-blue-500' },
        { name: 'MongoDB', icon: <SiMongodb />, level: 80, color: 'text-green-500' },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'AWS', icon: <FaAws />, level: 75, color: 'text-orange-500' },
        { name: 'Docker', icon: <FaDocker />, level: 70, color: 'text-blue-400' },
        { name: 'Git', icon: <FaGitAlt />, level: 95, color: 'text-red-600' },
        { name: 'Figma', icon: <FaFigma />, level: 85, color: 'text-purple-500' },
        { name: 'Jest', icon: <SiJest />, level: 80, color: 'text-red-500' },
      ]
    }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="My Skills"
          subtitle="Technologies I work with"
          centered
        />

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.1 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.05 }}
                    className="space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className={`text-xl ${skill.color}`}>
                          {skill.icon}
                        </span>
                        <span className="font-medium text-gray-800 dark:text-gray-200">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="relative h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.05 }}
                        className={`absolute inset-y-0 left-0 rounded-full ${
                          categoryIndex === 0 ? 'bg-gradient-to-r from-cyan-500 to-blue-500' :
                          categoryIndex === 1 ? 'bg-gradient-to-r from-green-500 to-emerald-500' :
                          'bg-gradient-to-r from-orange-500 to-red-500'
                        }`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 rounded-2xl gradient-bg text-white text-center"
        >
          <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            I'm constantly exploring new technologies and frameworks to stay at 
            the forefront of web development. Currently learning: 
            <span className="font-semibold ml-2">
              Three.js, WebGL, and Advanced Animation Techniques
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;