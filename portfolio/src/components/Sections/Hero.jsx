// src/components/Sections/Hero.jsx
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaArrowDown } from 'react-icons/fa';
import Button from '../UI/Button';
import Badge from '../Three/Badge';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Gradient */}
      <div className="absolute inset-0 gradient-bg opacity-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">
              Hello, I'm
            </p>
            
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              John
              <span className="text-blue-600 dark:text-blue-400"> Doe</span>
            </h1>
            
            <div className="text-2xl md:text-3xl font-semibold mb-6 h-12">
              <TypeAnimation
                sequence={[
                  'Full Stack Developer',
                  2000,
                  'UI/UX Designer',
                  2000,
                  'Problem Solver',
                  2000,
                  'Tech Enthusiast',
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-gray-700 dark:text-gray-300"
              />
            </div>
            
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 max-w-lg">
              I build exceptional digital experiences that are fast, accessible, 
              visually appealing, and responsive. Let's bring your ideas to life!
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="large"
                onClick={() => window.open('/contact', '_self')}
              >
                Get In Touch
              </Button>
              
              <Button 
                variant="secondary" 
                size="large"
                onClick={scrollToAbout}
              >
                View My Work
              </Button>
            </div>
          </motion.div>

          {/* Right Content - 3D Animation Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Animated Blob */}
              <div className="absolute inset-0 animate-float">
                <div className="w-full h-full rounded-full gradient-bg blur-3xl opacity-30" />
              </div>
              
              {/* 3D Badge Animation */}
              <div className="relative w-full h-[300px] md:h-[500px] flex items-center justify-center">
                 <Badge />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 p-2 rounded-full glass-effect"
        aria-label="Scroll down"
      >
        <FaArrowDown className="w-6 h-6" />
      </motion.button>
    </section>
  );
};

export default Hero;