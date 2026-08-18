import { motion } from "framer-motion";
import Icon from "./Icon";
import { portfolioData } from "../data";

const Contact = () => {
  const { email, phone, location, socialLinks, resumeLinks } = portfolioData.contact;

  return (
    <motion.section
      id="contact"
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
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-200px" }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-foreground">Contact Information</h3>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Icon icon="map-pin" className="h-4 w-4 text-accent mt-1" />
                <div>
                  <p className="font-medium text-foreground">Location</p>
                  <p className="text-muted-foreground">{location}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Icon icon="phone" className="h-4 w-4 text-accent mt-1" />
                <div>
                  <p className="font-medium text-foreground">Phone</p>
                  <p className="text-muted-foreground">{phone}</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Icon icon="mail" className="h-4 w-4 text-accent mt-1" />
                <div>
                  <p className="font-medium text-foreground">Email</p>
                  <p className="text-muted-foreground">
                    <a href={`mailto:${email}`} className="text-accent hover:underline">
                      {email}
                    </a>
                  </p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Social Media</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.platform}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center justify-center w-10 h-10 bg-muted/50 hover:bg-muted/100 rounded-lg transition-all"
                  >
                    <Icon icon="share" className="h-4 w-4 text-accent" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Resume Download */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-foreground">Download Resume</h3>
              <div className="space-y-3">
                {resumeLinks.map((link) => (
                  <motion.a
                    key={link.language}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center justify-between px-4 py-3 bg-muted/50 hover:bg-muted/100 rounded-lg transition-all border border-muted/20"
                  >
                    <div className="flex items-center space-x-3">
                      <Icon icon="download" className="h-4 w-4 text-accent" />
                      <span>{link.language} Resume</span>
                    </div>
                    <Icon icon="external-link" className="h-4 w-4 text-accent/70" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-200px" }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-foreground">Send Me a Message</h3>
            <form className="space-y-4" onSubmit={(e) => {
              e.preventDefault();
              // In a real app, this would submit to a backend API
              alert("Message sent! (Form submission would be handled by a backend service)");
              e.target.reset();
            }}>
              <div className="space-y-3">
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 bg-muted/50 border border-muted/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-3">
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 bg-muted/50 border border-muted/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="space-y-3">
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  required
                  className="w-full px-4 py-3 bg-muted/50 border border-muted/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  placeholder="How can I help you?"
                />
              </div>

              <div className="space-y-3">
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  required
                  className="w-full px-4 py-3 bg-muted/50 border border-muted/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent/20 hover:bg-accent/30 text-accent font-medium rounded-lg transition-all hover:shadow-lg"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;