import { motion } from "framer-motion";
import { Icon } from "lucide-react";
import { portfolioData } from "../data";

const Experience = () => {
  const { experience } = portfolioData;

  return (
    <motion.section
      id="experience"
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
          Professional Experience
        </motion.h2>

        <div className="space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-200px" }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-muted/50 rounded-lg border border-muted/20 overflow-hidden hover:bg-muted/100 transition-all"
            >
              <div className="p-6">
                <div className="flex items-start space-x-4 mb-3">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                      <Icon icon="briefcase" className="h-5 w-5 text-accent" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground flex items-center space-x-2">
                      {exp.position} <span className="text-xs bg-accent/20 text-accent px-2 py-0.5 rounded">{exp.level}</span>
                    </h3>
                    <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                      <Icon icon="calendar" className="h-4 w-4" />
                      <span>{exp.dateRange}</span>
                      <Icon icon="git-branch" className="h-4 w-4 text-accent mt-0.5" />
                      <span>{exp.company}</span>
                    </div>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">{exp.description}</p>

                {/* Responsibilities */}
                {exp.responsibilities && exp.responsibilities.length > 0 && (
                  <div className="mb-4">
                    <h4 className="text-sm font-medium text-foreground mb-2">Key Responsibilities:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Technologies */}
                <div className="mt-4 pt-3 border-t border-muted/20">
                  <h4 className="text-sm font-medium text-foreground mb-2">Technologies Used:</h4>
                  <p className="text-muted-foreground text-sm">{exp.technologies}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;