import { motion } from "framer-motion";
import Icon from "./Icon";

// Map platform names to available lucide icons
// Note: lucide-react doesn't include brand logos for trademark reasons
const iconMap = {
  facebook: "share", // generic share icon
  twitter: "share",  // generic share icon
  linkedin: "share", // generic share icon
  instagram: "share", // generic share icon
};

const Footer = () => {
  const socialLinks = [
    { platform: "facebook", url: "https://bit.ly/2Lb6m0r", icon: "facebook" },
    { platform: "twitter", url: "https://bit.ly/2DEYFt1", icon: "twitter" },
    { platform: "linkedin", url: "https://bit.ly/2GOFsWy", icon: "linkedin" },
    { platform: "instagram", url: "https://bit.ly/2LedzN9", icon: "instagram" },
    { platform: "email", url: "mailto:zhammoud.zakaria@gmail.com", icon: "mail" },
    { platform: "phone", url: "tel:+212 6 23 26 19 49", icon: "phone" },
  ];

  return (
    <motion.footer
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      initial={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
      className="bg-muted/90 backdrop-blur-lg border-t border-muted/20"
    >
      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col items-center md:flex-row md:justify-between">
          {/* Copyright */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            initial={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center md:text-left space-y-2"
          >
            <p className="text-muted-foreground text-sm">
              © Copyright 2026 Zakaria Hammoud
            </p>
            <p className="text-muted-foreground text-sm">
              Built with React, Vite, Tailwind CSS, and Framer Motion
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            initial={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex space-x-4"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.platform}
                href={link.url}
                target={link.platform === "email" || link.platform === "phone" ? undefined : "_blank"}
                rel={link.platform === "email" || link.platform === "phone" ? undefined : "noopener noreferrer"}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-hover hover:bg-muted/20 transition-all"
              >
                {link.platform === "phone" ? (
                  <Icon icon="phone" className="h-5 w-5 text-accent" />
                ) : (
                  <Icon icon={iconMap[link.icon]} className="h-5 w-5 text-accent" />
                )}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;