// src/components/Sections/About.jsx
import { motion } from "framer-motion";
import {
  FaCode,
  FaPalette,
  FaRocket,
  FaUsers,
  FaGraduationCap,
  FaBriefcase,
} from "react-icons/fa";
import SectionTitle from "../UI/SectionTitle";

const About = () => {
  const skills = [
    {
      name: "Frontend",
      level: 80,
      icon: <FaCode />,
      color: "from-blue-500 to-cyan-500",
    },
    // {
    //   name: "UI/UX Design",
    //   level: 85,
    //   icon: <FaPalette />,
    //   color: "from-purple-500 to-pink-500",
    // },
    {
      name: "Backend",
      level: 90,
      icon: <FaRocket />,
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "Team Collaboration",
      level: 90,
      icon: <FaUsers />,
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Git & Github",
      level: 95,
      icon: <FaCode />,
      color: "from-blue-500 to-cyan-500",
    },
  ];

  const timeline = [
    {
      year: "2025 - Present",
      title: "full stack Developer",
      company: "Ociuz Technologies",
      icon: <FaBriefcase />,
    },
    {
      year: "2025",
      title: "backend developer (nodejs)",
      company: "Woxro korraty infopark",
      icon: <FaBriefcase />,
    },
    {
      year: "2024 - 2025",
      title: "full stack developer(internship)",
      company: "Brototype",
      icon: <FaBriefcase />,
    },
    {
      year: "2020 - 2024",
      title: "Computer Science Engineering",
      company: "IES College of Engineering ",
      icon: <FaGraduationCap />,
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6">
        <SectionTitle title="About Me" centered />

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
              Full-Stack Developer Building Real-World Web Apps
            </h3>

            <p className="text-gray-600 dark:text-gray-300">
              I'm a software developer who enjoys building modern, responsive,
              and scalable web applications. I’ve worked with technologies like
              React, Node.js, Django, Next.js, NestJS, MongoDB, and PostgreSQL
              to create practical solutions for real-world problems.
            </p>

            <p className="text-gray-600 dark:text-gray-300">
              Right now, I’m exploring deeper backend concepts like
              microservices, system design, and Go. I like learning by building
              projects, experimenting with new tools, and improving step by step
              as a developer.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              <div className="text-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  15+
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Projects Built
                </div>
              </div>

              <div className="text-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  2+
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Years of Learning & Development
                </div>
              </div>

              <div className="text-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  5+
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Tech Stacks Used
                </div>
              </div>

              <div className="text-center p-4 rounded-lg bg-white dark:bg-gray-800 shadow">
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                  ∞
                </div>
                <div className="text-gray-600 dark:text-gray-400">
                  Always Learning
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Skills & Timeline */}
          <div className="space-y-8">
            {/* Skills */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                Skills
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-3 p-3 rounded-lg
                 border border-gray-200 dark:border-gray-700
                 bg-white dark:bg-gray-900
                 hover:shadow-sm transition"
                  >
                    {/* Icon */}
                    <span className={`text-lg ${skill.color}`}>
                      {skill.icon}
                    </span>

                    {/* Name */}
                    <div>
                      <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                        {skill.name}
                      </p>

                      {/* Tag instead of % */}
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {skill.tag}
                      </p>
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
