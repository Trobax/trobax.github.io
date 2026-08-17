import { motion } from "framer-motion";
import { portfolioData } from "../data";

const Skills = () => {
  const { categories } = portfolioData.skills;

  return (
    <motion.section
      id="skills"
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-200px" }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6 py-20">
        <motion.h2
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-200px" }}
          initial={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl font-bold text-center mb-12"
        >
          Skills & Expertise
        </motion.h2>

        <div className="grid gap-8">
          {categories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-200px" }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 + catIndex * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.4, delay: 0.1 + skillIndex * 0.05 }}
                    className="px-4 py-2 bg-muted/50 hover:bg-muted/100 rounded-full text-sm font-medium transition-all border border-muted/20"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;