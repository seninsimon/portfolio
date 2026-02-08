// src/components/Sections/Projects.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../UI/SectionTitle';
import Card from '../UI/Card';
import Button from '../UI/Button';
import { projects } from '../../data/project';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(7);

  const categories = ['all', 'frontend', 'fullstack', 'mobile'];

  const filteredProjects = projects.filter(project => 
    filter === 'all' || project.category === filter
  ).slice(0, visibleProjects);

  const loadMore = () => {
    setVisibleProjects(prev => prev + 3);
  };

  return (
    <section id="projects" className=" bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-6 py-15">
        <SectionTitle
          title="Featured Projects"
          // subtitle="Works that i have done"
          centered
        />

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? 'primary' : 'ghost'}
              size="small"
              onClick={() => {
                setFilter(category);
                setVisibleProjects(6);
              }}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ delay: index * 0.1 }}
                layout
              >
                <Card
                  title={project.title}
                  description={project.description}
                  // image={project.image}
                  tags={project.tags}
                  links={project.links}
                >
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {project.technologies.join(' • ')}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </AnimatePresence>

        {/* Load More Button */}
        {visibleProjects < filteredProjects.length && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mt-12"
          >
            <Button
              variant="secondary"
              size="large"
              onClick={loadMore}
            >
              Load More Projects
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;