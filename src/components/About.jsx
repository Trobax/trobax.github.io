import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";
import Icon from "./Icon";
import { portfolioData } from "../data";

const About = () => {
  const { bio, itTools, adobeTools, contactDetails, resumeLinks } = portfolioData.about;

  return (
    <motion.section
      id="about"
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
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-[250px_1fr] gap-8">
          {/* Profile Image Placeholder */}
          <motion.div
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-200px" }}
            initial={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="aspect-w-1 aspect-h-1 w-full rounded-lg overflow-hidden bg-muted/20"
          >
            {/* In a real app, you would use the actual profile image */}
            <div className="flex h-full w-full items-center justify-center text-muted-foreground">
              Profile Photo
            </div>
          </motion.div>

          <div className="space-y-6">
            {/* Bio */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-200px" }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-xl font-semibold text-foreground mb-2">Professional Summary</h3>
              {bio.map((paragraph, index) => (
                <p key={index} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </motion.div>

            {/* Skills & Tools */}
            <motion.div
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-200px" }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="space-y-4"
            >
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">Technical Skills</h3>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <Icon icon="map-pin" className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>IT Tools:</strong> {itTools}</span>
                  </div>
                  <div className="flex items-start">
                    <Icon icon="mail" className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Adobe Creative Cloud:</strong> {adobeTools}</span>
                  </div>
                </div>
              </div>

              {/* Education & Certifications */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">Education & Certifications</h3>
                {/* Would normally pull from education data, but keeping it simple for now */}
                <p className="text-muted-foreground text-sm">
                  See full education and certifications details in the dedicated section below.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-foreground">Contact Details</h3>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <Icon icon="map-pin" className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{contactDetails.address.replace(/\n/g, '<br/>')}</span>
                  </div>
                  <div className="flex items-start">
                    <Icon icon="phone" className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{contactDetails.phone}</span>
                  </div>
                  <div className="flex items-start">
                    <Icon icon="mail" className="h-4 w-4 text-accent mt-1 flex-shrink-0" />
                    <span className="text-muted-foreground">{contactDetails.email}</span>
                  </div>
                </div>
              </div>

              {/* Resume Download */}
              <motion.div
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-200px" }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="space-y-3"
              >
                <h3 className="text-lg font-semibold text-foreground">Download Resume</h3>
                <div className="flex flex-col space-y-2">
                  {resumeLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center justify-between px-4 py-3 bg-muted/50 hover:bg-muted/100 rounded-lg transition-all border border-muted/20"
                    >
                      <div className="flex items-center space-x-3">
                        <Download className="h-4 w-4 text-accent" />
                        <span>{link.language} Resume</span>
                      </div>
                      <ExternalLink className="h-4 w-4 text-accent/70" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;