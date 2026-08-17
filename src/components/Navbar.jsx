import { motion } from "framer-motion";
import { Icon } from "lucide-react";

const Navbar = () => {
  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "portfolio", label: "Projects" },
    { id: "dev-philosophy", label: "Philosophy" },
    { id: "contact", label: "Contact" },
  ];

  // Using generic share icons for social media since specific brand icons aren't available in Lucide
  const socialLinks = [
    { platform: "facebook", url: "https://bit.ly/2Lb6m0r", icon: "share" },
    { platform: "twitter", url: "https://bit.ly/2DEYFt1", icon: "share" },
    { platform: "linkedin", url: "https://bit.ly/2GOFsWy", icon: "share" },
    { platform: "instagram", url: "https://bit.ly/2LedzN9", icon: "share" },
    { platform: "email", url: "mailto:zhammoud.zakaria@gmail.com", icon: "mail" },
  ];

  return (
    <motion.nav
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      initial={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-muted/90 backdrop-blur-lg border-b border-muted/20"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Logo/Brand */}
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-4 md:mb-0"
          >
            <h1 className="text-2xl font-bold text-accent">Zakaria Hammoud</h1>
            <p className="text-muted-foreground text-sm">Software Developer</p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            initial={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="hidden md:flex md:space-x-6"
          >
            {sections.map((section) => (
              <motion.a
                key={section.id}
                href={`#${section.id}`}
                className="text-muted-foreground hover:text-accent transition-colors font-medium hover-lift"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(section.id);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                {section.label}
              </motion.a>
            ))}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="md:hidden p-2 rounded-hover hover:bg-muted/20 hover-lift"
            id="mobile-menu-button"
            aria-label="Open menu"
          >
            <Icon icon="menu" className="h-5 w-5 text-accent" />
          </motion.button>
        </div>

        {/* Mobile Menu (hidden by default) */}
        <motion.div
          id="mobile-menu"
          className="md:hidden mt-4"
        >
          <div className="flex flex-col space-y-2">
            {sections.map((section) => (
              <motion.a
                key={section.id}
                href={`#${section.id}`}
                className="block px-4 py-3 text-left text-muted-foreground hover:bg-muted/100 hover:text-accent rounded-lg hover-lift"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById(section.id);
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                  // Close mobile menu after selection
                  document.getElementById("mobile-menu-button").click();
                }}
              >
                {section.label}
              </motion.a>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-muted/20">
            <h4 className="text-sm font-medium text-foreground mb-2">Connect</h4>
            <div className="flex space-x-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.platform}
                  href={link.url}
                  target={link.platform === "email" ? undefined : "_blank"}
                  rel={link.platform === "email" ? undefined : "noopener noreferrer"}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-hover hover:bg-muted/20 hover-lift"
                >
                  <Icon icon={link.icon} className="h-5 w-5 text-accent" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;