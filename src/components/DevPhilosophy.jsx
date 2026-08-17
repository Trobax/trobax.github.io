import { motion } from "framer-motion";
import { portfolioData } from "../data";

const DevPhilosophy = () => {
  const { title, quotes } = portfolioData.philosophy;

  return (
    <motion.section
      id="testimonials"
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
          {title}
        </motion.h2>

        <div className="space-y-8">
          {quotes.map((quote, index) => (
            <motion.div
              key={index}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-200px" }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              className="bg-muted/50 rounded-lg border border-muted/20 p-6 hover:bg-muted/100 transition-all"
            >
              <div className="space-y-4">
                <p className="text-muted-foreground italic leading-relaxed">
                  "{quote.text}"
                </p>
                <p className="text-sm font-medium text-foreground">
                  — <span className="text-accent">{quote.author}</span>
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default DevPhilosophy;