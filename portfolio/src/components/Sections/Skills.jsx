// src/components/Sections/Skills.jsx
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaAws,
  FaDocker,
  FaGitAlt,
  FaFigma,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiMongodb,
  SiGraphql,
  SiNextdotjs,
  SiRedux,
  SiJest,
  SiPostgresql,
  SiGo,
  SiKubernetes,
  SiDjango,
  SiNestjs,
  SiReactquery,
} from "react-icons/si";
import SectionTitle from "../UI/SectionTitle";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        {
          name: "React",
          icon: <FaReact />,
          tag: "Strong",
          color: "text-cyan-500",
        },
        {
          name: "Next.js",
          icon: <SiNextdotjs />,
          tag: "Strong",
          color: "text-gray-900 dark:text-white",
        },
        {
          name: "TypeScript",
          icon: <SiTypescript />,
          tag: "Good",
          color: "text-blue-600",
        },
        {
          name: "Tailwind CSS",
          icon: <SiTailwindcss />,
          tag: "Good",
          color: "text-teal-500",
        },
        {
          name: "Redux Toolkit",
          icon: <SiRedux />,
          tag: "Good",
          color: "text-purple-600",
        },
        {
          name: "React Query",
          icon: <SiReactquery />,
          tag: "Used in Projects",
          color: "text-red-500",
        },
      ],
    },

    {
      title: "Backend",
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs />,
          tag: "Strong",
          color: "text-green-600",
        },
        {
          name: "NestJS",
          icon: <SiNestjs />,
          tag: "Good",
          color: "text-red-600",
        },
        {
          name: "Django",
          icon: <SiDjango />,
          tag: "Worked With",
          color: "text-green-800",
        },
        {
          name: "PostgreSQL",
          icon: <SiPostgresql />,
          tag: "Good",
          color: "text-blue-500",
        },
        {
          name: "MongoDB",
          icon: <SiMongodb />,
          tag: "Good",
          color: "text-green-500",
        },
      ],
    },

    {
      title: "Currently Exploring",
      skills: [
        {
          name: "Microservices",
          icon: <SiKubernetes />,
          tag: "Learning",
          color: "text-indigo-500",
        },
        {
          name: "Golang",
          icon: <SiGo />,
          tag: "Learning",
          color: "text-sky-500",
        },
        {
          name: "Docker",
          icon: <FaDocker />,
          tag: "Getting Comfortable",
          color: "text-blue-400",
        },
      ],
    },

    {
      title: "Tools",
      skills: [
        {
          name: "Git & GitHub",
          icon: <FaGitAlt />,
          tag: "Daily Use",
          color: "text-red-600",
        },
        {
          name: "AWS (S3, Basics)",
          icon: <FaAws />,
          tag: "Used in Projects",
          color: "text-orange-500",
        },
        {
          name: "Figma",
          icon: <FaFigma />,
          tag: "UI Reference",
          color: "text-purple-500",
        },
      ],
    },
  ];

  return (
    <section className="py-15">
      <div className="container mx-auto px-6">
        <SectionTitle
          title="Technologies I work with"
          // subtitle="Technologies I work with"
          centered
        />

        <div className="grid md:grid-cols-4 gap-8">
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
          className="mt-14 p-10 rounded-lg bg-gray-900 text-white text-center"
        >
          <h3 className="text-2xl font-semibold mb-3">
            Always Learning, Always Building
          </h3>

          <p className="text-base text-gray-200 max-w-2xl mx-auto leading-relaxed">
            I enjoy improving step by step through real projects and exploring
            modern backend concepts. Right now, I’m focusing on{" "}
            <span className="font-semibold text-white">
              microservices, system design, and Golang
            </span>{" "}
            while sharpening my skills in scalable application architecture.
          </p>

          {/* GitHub Button */}
          <div className="mt-6">
            <a
              href="https://github.com/seninsimon?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2 rounded-lg bg-white text-gray-900 font-medium
                         hover:bg-gray-200 transition"
            >
              Check Out My GitHub Repositories →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
