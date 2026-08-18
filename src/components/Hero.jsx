import { motion } from "framer-motion";
import Icon from "./Icon";
import { portfolioData } from "../data";

// Map platform names to available lucide icons
// Note: lucide-react doesn't include brand logos for trademark reasons
const iconMap = {
  facebook: "share", // generic share icon
  twitter: "share",  // generic share icon
  linkedin: "share", // generic share icon
  instagram: "share", // generic share icon
  skype: "phone",
};

const Hero = () => {
  const { name, title, valueProposition, ctaButtons, socialLinks } = portfolioData.hero;

  return (
    <motion.section
      id="home"
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-200px" }}
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 pb-16">
        {/* Background elements could go here */}

        <div className="text-center space-y-6">
          <motion.h1
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-200px" }}
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold text-white mb-4"
          >
            I'm {name}.
          </motion.h1>

          <motion.h3
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-200px" }}
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-muted-foreground max-w-2xl"
          >
            I'm a <span className="block bg-gradient-to-r from-accent/20 to-accent/40 inline-block rounded-full px-4 py-1 text-accent">{title}</span>, {valueProposition}
          </motion.h3>

          <div className="flex space-x-4 justify-center">
            {ctaButtons.map((button, index) => (
              <motion.button
                key={index}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-200px" }}
                initial={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`${button.isPrimary ? "bg-accent/20 hover:bg-accent/30" : "border border-accent/50 hover:border-accent/70"} px-6 py-3 rounded-lg font-medium transition-all text-accent hover:bg-accent/10`}
                onClick={() => {
                  if (button.href === "#") {
                    // Handle download CV
                    alert("CV download functionality would be implemented here");
                  }
                  // For anchor links, let default behavior happen
                }}
              >
                {button.text}
              </motion.button>
            ))}
          </div>

          <div className="flex space-x-4 justify-center">
            {socialLinks.map((link, index) => {
              const iconName = iconMap[link.platform] || "mail"; // Default to mail for unknown platforms
              return (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-200px" }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.05 }}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-lg hover:bg-accent/20 transition-all"
                >
                  <Icon icon={iconName} className="h-5 w-5 text-accent" />
                </motion.a>
              );
            })}
          </div>

          <motion.a
            href="#about"
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-200px" }}
            initial={{ opacity: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="block mt-8 text-accent/80 hover:text-accent underline"
          >
            <span className="inline-flex items-center space-x-2">
              <span>Scroll down</span>
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </motion.a>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;