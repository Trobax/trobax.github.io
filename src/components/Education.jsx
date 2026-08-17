import { motion } from "framer-motion";
import { BookOpen, Award, Calendar, Code } from "lucide-react";
import { portfolioData } from "../data";

const Education = () => {
  const { education } = portfolioData;
  const { degrees, certifications } = education;

  return (
    <motion.section
      id="education"
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
          Education & Certifications
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            key="education"
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-200px" }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-foreground flex items-center space-x-3">
              <BookOpen className="h-5 w-5 text-accent" />
              Education
            </h3>

            <div className="space-y-4">
              {degrees.map((degree, index) => (
                <motion.div
                  key={index}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                  className="bg-muted/50 rounded-lg border border-muted/20 p-4 hover:bg-muted/100 transition-all"
                >
                  <h4 className="font-semibold text-foreground">{degree.title}</h4>
                  <p className="text-muted-foreground mb-2">{degree.details}</p>
                  {degree.description && (
                    <p className="text-muted-foreground text-sm italic">{degree.description}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            key="certifications"
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-200px" }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-foreground flex items-center space-x-3">
              <Award className="h-5 w-5 text-accent" />
              Certifications
            </h3>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  initial={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.05 }}
                  className="bg-muted/50 rounded-lg border border-muted/20 p-4 hover:bg-muted/100 transition-all"
                >
                  <h4 className="font-semibold text-foreground">{cert.title}</h4>
                  <p className="text-muted-foreground mb-2">{cert.details}</p>
                  {cert.description && (
                    <p className="text-muted-foreground text-sm italic">{cert.description}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Education;