import { motion } from "framer-motion";
import Icon from "./Icon";
import { portfolioData } from "../data";

const Projects = () => {
  const { projects } = portfolioData;

  return (
    <>
      <motion.section
        id="portfolio"
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
            My Projects
          </motion.h2>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-200px" }}
                initial={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.1 + project.id * 0.05 }}
                className="group"
              >
                {/* Project Card */}
                <motion.a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    // In a real app, this would open a modal
                    alert(`Opening modal for ${project.title}`);
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block rounded-lg overflow-hidden bg-muted/50 border border-muted/20 hover:bg-muted/100 transition-all hover:shadow-lg"
                >
                  <div className="relative">
                    {/* Image */}
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="text-center">
                        <h5 className="text-accent font-semibold mb-2">{project.title}</h5>
                        <p className="text-muted-foreground text-sm">{project.techTags.join(", ")}</p>
                        <div className="mt-4 flex items-center justify-center space-x-3">
                          <Icon icon="plus" className="h-5 w-5 text-accent" />
                          <Icon icon="external-link" className="h-5 w-5 text-accent" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Meta info */}
                  <div className="p-4">
                    <h5 className="text-accent font-semibold mb-2">{project.title}</h5>
                    <p className="text-muted-foreground text-sm">{project.techTags.join(", ")}</p>
                  </div>
                </motion.a>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Modals - simplified versions */}
      <motion.div
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-200px" }}
        initial={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        {projects.map((project) => (
          <motion.div
            key={`modal-${project.id}`}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm hidden"
            //
          >
            <motion.div
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              initial={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.5 }}
              className="relative bg-muted/90 backdrop-blur-lg rounded-lg border border-muted/50 p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                <button
                  onClick={() => {
                    // Close modal
                  }}
                  className="p-2 rounded-hover hover:bg-muted/20"
                >
                  <span className="sr-only">Close</span>
                  <Icon icon="x" className="h-4 w-4 text-muted-foreground hover:text-foreground" />
                </button>
              </div>

              <div className="mb-4">
                <img
                  src={project.modalImage}
                  alt={`${project.title} details`}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
              </div>

              <div className="space-y-4">
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.techTags.map((tag) => (
                    <span key={tag} className="px-3 py-1 bg-muted/70 text-[0.85rem] rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-4">
                  <span className="text-muted-foreground">Categories: </span>
                  {project.categories.map((cat, index) => (
                    <span
                      key={index}
                      className="inline-block px-3 py-1 bg-accent/20 text-accent rounded-full text-[0.85rem] mr-2 mb-1"
                    >
                      {cat}
                    </span>
                  ))}
                </div>
                <div className="mt-6">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-4 py-2 bg-accent/20 hover:bg-accent/30 rounded-lg text-accent font-medium transition-all"
                  >
                    View Project Details
                    <Icon icon="external-link" className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};

export default Projects;