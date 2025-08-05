import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "../data/portfolioData";

const Skills: React.FC = () => {
  const { skills } = portfolioData;

  const skillCategories = [
    { title: "Frontend", skills: skills.frontend, color: "blue" },
    { title: "Styling", skills: skills.styling, color: "purple" },
    { title: "Tools", skills: skills.tools, color: "green" },
    { title: "Backend", skills: skills.backend, color: "orange" },
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "bg-blue-50 border-blue-200 text-blue-600",
      purple: "bg-purple-50 border-purple-200 text-purple-600",
      green: "bg-green-50 border-green-200 text-green-600",
      orange: "bg-orange-50 border-orange-200 text-orange-600",
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Skills & Technologies
          </h2>
          <div className="w-20 h-1  bg-gradient-to-r from-orange-600 to-yellow-600 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are the technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={`flex items-center p-4 rounded-xl border-2 transition-all duration-300 hover:shadow-md ${getColorClasses(
                      category.color
                    )} dark:bg-gray-700 dark:border-gray-600`}
                  >
                    <img
                      src={skill.icon}
                      alt={skill.name}
                      className="w-[2rem] mr-3 object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-medium text-gray-900 dark:text-white">
                          {skill.name}
                        </span>
                      </div>
                      <div className="w-full bg-white dark:bg-gray-600 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{
                            duration: 1,
                            delay:
                              categoryIndex * 0.1 + skillIndex * 0.05 + 0.3,
                          }}
                          viewport={{ once: true }}
                          className={`h-2 rounded-full ${
                            category.color === "blue"
                              ? "bg-blue-500"
                              : category.color === "purple"
                              ? "bg-purple-500"
                              : category.color === "green"
                              ? "bg-green-500"
                              : "bg-orange-500"
                          }`}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
