// src/components/Layout/Footer.jsx
import { Link } from 'react-router-dom';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaCodepen,
  FaEnvelope 
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/seninsimon', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/senin-simon/', label: 'LinkedIn' },
    // { icon: <FaTwitter />, href: 'https://twitter.com', label: 'Twitter' },
    // { icon: <FaCodepen />, href: 'https://codepen.io', label: 'CodePen' },
    { icon: <FaEnvelope />, href: 'mailto:seninsimon002@gmail.com', label: 'Email' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300 py-12 mt-20">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 rounded-full gradient-bg flex items-center justify-center">
                <img src="/profile.jpg" alt="Profile" className="w-full h-full object-cover rounded-full" />
              </div>
              {/* <span className="text-xl font-bold text-white">Portfolio</span> */}
            </div>
            <p className="text-gray-400 mb-4">
              A showcase of my work, skills, and professional journey.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 hover:text-white transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/resume" className="hover:text-white transition-colors">
                  Resume
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
         <div>
  <h3 className="text-white font-semibold text-lg mb-4">
    Get In Touch
  </h3>

  <ul className="space-y-2">
    {/* Email */}
    <li className="flex items-center space-x-2">
      <FaEnvelope />
      <a
        href="mailto:seninsimon002@gmail.com"
        className="hover:underline text-gray-200 hover:text-white transition"
      >
        seninsimon002@gmail.com
      </a>
    </li>

    {/* GitHub */}
    <li className="flex items-center space-x-2">
      <FaGithub />
      <a
        href="https://github.com/seninsimon"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline text-gray-200 hover:text-white transition"
      >
        github.com/seninsimon
      </a>
    </li>

    {/* LinkedIn */}
    <li className="flex items-center space-x-2">
      <FaLinkedin />
      <a
        href="https://www.linkedin.com/in/senin-simon/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:underline text-gray-200 hover:text-white transition"
      >
        linkedin.com/in/seninsimon
      </a>
    </li>
  </ul>
</div>

        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; {currentYear} Senin. All rights reserved.</p>
          <p className="mt-2 text-sm">Built with React & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;