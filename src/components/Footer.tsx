import React from "react";
import { motion } from "framer-motion";
import { Heart, ArrowUp } from "lucide-react";
import { portfolioData } from "../data/portfolioData";

const Footer: React.FC = () => {
  const { personal } = portfolioData;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { name: "About", id: "about" },
    { name: "Skills", id: "skills" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <footer className="bg-gray-900 dark:bg-black text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-bold">{personal.name}</h3>
            <p className="text-gray-400 dark:text-gray-500 leading-relaxed">
              Frontend Developer passionate about creating beautiful, functional
              web experiences that make a difference.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400 dark:text-gray-500">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>using React & Tailwind CSS</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.button
                    whileHover={{ x: 5 }}
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-2">
              <a
                href={`mailto:${personal.email}`}
                className="block text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-200"
              >
                {personal.email}
              </a>
              <p className="text-gray-400 dark:text-gray-500">
                {personal.location}
              </p>
            </div>
            <div className="flex space-x-4 pt-2">
              <motion.a
                href={personal.social.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 dark:text-gray-500 hover:text-white transition-colors duration-200"
              >
                GitHub
              </motion.a>
              <motion.a
                href={personal.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 dark:text-gray-500 hover:text-blue-400 transition-colors duration-200"
              >
                LinkedIn
              </motion.a>
            </div>
          </motion.div>
        </div>
        {/* Bottom Section
        <div className="border-t border-gray-800 dark:border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-400 dark:text-gray-500 text-sm mb-4 md:mb-0"
          >
            © {currentYear} {personal.name}. All rights reserved.
          </motion.p>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="bg-gray-800 dark:bg-gray-700 hover:bg-gray-700 dark:hover:bg-gray-600 text-white p-3 rounded-full transition-colors duration-200"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
