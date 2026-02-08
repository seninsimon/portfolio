// src/components/Sections/Hero.jsx
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaArrowDown } from "react-icons/fa";
import Button from "../UI/Button";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const scrollToAbout = () => {
    document.getElementById("about").scrollIntoView({ behavior: "smooth" });
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
              Senin
              <span className="text-blue-600 dark:text-blue-400"> Simon</span>
            </h1>

            <div className="text-2xl md:text-3xl font-semibold mb-6 h-12">
              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,

                  "Problem Solver",
                  2000,
                  "Tech Enthusiast",
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
              visually appealing, and responsive. Let's bring your ideas to
              life!
            </p>

            <div className="flex  gap-4">
              <Button
                size="large"
                onClick={() => navigate("/contact")}
              >
                Get In Touch
              </Button>

              <Button variant="secondary" size="large" onClick={scrollToAbout}>
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

              {/* Profile Image Placeholder */}
              <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-1">
                <div className="bg-gray-900 rounded-2xl p-8">
                  <div className="aspect-square rounded-2xl bg-gradient-to-tr from-blue-400 to-purple-500 flex items-center justify-center">
                    <img
                      src="/profile.jpg"
                      alt="Profile"
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 3 }}
                    className="absolute -top-4 -left-4 w-20 h-20 rounded-full bg-blue-500/20 backdrop-blur-sm border border-blue-500/30"
                  />
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 3, delay: 1 }}
                    className="absolute -bottom-4 -right-4 w-16 h-16 rounded-full bg-purple-500/20 backdrop-blur-sm border border-purple-500/30"
                  />
                </div>
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
