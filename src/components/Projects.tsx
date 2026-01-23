import {
  ExternalLink,
  Github,
  Sparkles,
  BarChart3,
  Server,
  Lock,
  Calendar,
  Smartphone,
  ShoppingBag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [visibleCount, setVisibleCount] = useState(3);

  const projects = [
    {
      id: "01",
      title: "Staffing Analytics API",
      category: "Backend Development",
      description:
        "RESTful API service for a staffing marketplace platform that aggregates and analyzes shift data to identify top-performing workplaces and workers. Built with NestJS, Prisma ORM, and PostgreSQL, featuring complex data aggregation, sorting algorithms, and production-ready error handling.",
      tags: ["NestJS", "Prisma", "PostgreSQL", "TypeScript"],
      metrics: ["Data Aggregation", "Complex Queries", "REST API"],
      icon: BarChart3,
      github:
        "https://github.com/hatchways-community/fetch-the-most-active-workplaces-eb045d71da83448488a5b38a6e1b7d16",
      demo: "#",
      updated: "2025",
      featured: true,
    },
    {
      id: "02",
      title: "NestJS API",
      category: "Backend Development",
      description:
        "Comprehensive project-driven repository for mastering NestJS framework. Covers advanced patterns, dependency injection, and building scalable server-side applications with TypeScript.",
      tags: ["NestJS", "TypeScript", "Node.js", "REST API"],
      metrics: ["Modern Stack", "Best Practices", "Production Ready"],
      icon: Server,
      github: "https://github.com/brandon-kigen/nestjs-fundamentals",
      demo: "#",
      updated: "Dec 2025",
    },
    {
      id: "03",
      title: "EEEK! Auth Microservice",
      category: "Microservices Architecture",
      description:
        "Enterprise-grade authentication microservice built with TypeScript and Node.js. Implements JWT tokens, secure password hashing, and distributed session management for scalable systems.",
      tags: ["TypeScript", "Microservices", "JWT", "Security"],
      metrics: ["Token Auth", "Distributed", "Secure"],
      icon: Lock,
      github: "https://github.com/brandon-kigen/eeek-auth",
      demo: "https://eeek-auth.onrender.com/",
      updated: "Mar 2025",
    },
    {
      id: "04",
      title: "BookIt - Reservation API",
      category: "Full-Stack Development",
      description:
        "Lightweight Django REST Framework API for managing occasions and reservations. Features robust booking system with authentication, validation, and comprehensive CRUD operations.",
      tags: ["Django", "DRF", "Python", "PostgreSQL"],
      metrics: ["RESTful Design", "Authentication", "Data Validation"],
      icon: Calendar,
      github: "https://github.com/brandon-kigen/bookit",
      demo: "#",
      updated: "Dec 2025",
    },
    {
      id: "05",
      title: "ReadIt - Reddit Client",
      category: "API Integration",
      description:
        "Modern Reddit client enabling users to browse and interact with their favorite subreddits. Features clean UI, real-time data fetching, and responsive design.",
      tags: ["React", "CSS", "Reddit API", "JavaScript"],
      metrics: ["API Integration", "Real-time", "Clean UI"],
      icon: Smartphone,
      github: "https://github.com/brandon-kigen/readit",
      demo: "https://brandon-kigen.github.io/readit/",
      updated: "Feb 2025",
    },
    {
      id: "06",
      title: "Dukafy E-Commerce",
      category: "Frontend Development",
      description:
        "Full-featured React e-commerce frontend capstone project built with TypeScript. Includes shopping cart, product browsing, and modern responsive UI with type-safe architecture.",
      tags: ["React", "TypeScript", "Redux", "Tailwind"],
      metrics: ["Type Safety", "State Management", "Responsive UI"],
      icon: ShoppingBag,
      github: "https://github.com/brandon-kigen/dukafy",
      demo: "#",
      updated: "Mar 2024",
    },
  ];

  const handleToggleProjects = () => {
    if (visibleCount < projects.length) {
      setVisibleCount((prev) => prev + 3);
    } else {
      setVisibleCount(3);
    }
  };

  return (
    <section
      id="projects"
      className="py-24 lg:py-32 bg-card/30 blueprint-grid-dense-intense"
      ref={ref}
    >
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section header */}
        <motion.div
          className="flex items-center gap-4 mb-8"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
        >
          <div className="w-12 h-px bg-primary" />
          <span className="section-number">/ SOME OF MY WORK</span>
        </motion.div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
          >
            Projects
            <br />
            <span className="text-highlight">Dossier</span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-md lg:text-right"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            A curated selection of projects demonstrating full-stack
            development, API design, and modern architectural patterns.
          </motion.p>
        </div>

        {/* Projects grid */}
        <div className="space-y-8">
          {projects.slice(0, visibleCount).map((project, index) => (
            <motion.article
              key={project.id}
              className={`project-card group border bg-background p-6 lg:p-10 hover:border-primary/30 transition-all duration-500 ${
                project.featured
                  ? "border-primary/20 bg-primary/5"
                  : "border-border"
              }`}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              whileHover={{ y: -5 }}
            >
              <div className="grid lg:grid-cols-12 gap-8 relative z-10">
                {/* Project number with hover icon */}
                <div className="lg:col-span-1 relative flex flex-col items-center">
                  <motion.div
                    className="relative w-12 h-12 flex items-center justify-center"
                    animate={{
                      scale: hoveredProject === project.id ? 1.1 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Number - fades out on hover */}
                    <motion.span
                      className="font-mono text-4xl lg:text-5xl font-bold text-primary/30 absolute inset-0 flex items-center justify-center transition-colors duration-500"
                      animate={{
                        opacity: hoveredProject === project.id ? 0 : 1,
                      }}
                    >
                      {project.id}
                    </motion.span>

                    {/* Icon - fades in on hover */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center text-primary"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{
                        opacity: hoveredProject === project.id ? 1 : 0,
                        scale: hoveredProject === project.id ? 1 : 0.5,
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <project.icon className="w-10 h-10" strokeWidth={1.5} />
                    </motion.div>
                  </motion.div>

                  {project.featured && (
                    <motion.div
                      className="absolute -top-4 -right-2 bg-primary text-primary-foreground text-xs font-mono px-2 py-1 rounded"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 }}
                    >
                      FEATURED
                    </motion.div>
                  )}
                </div>

                {/* Project info */}
                <div className="lg:col-span-7">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="font-mono text-xs uppercase tracking-widest text-primary">
                      {project.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      • Updated {project.updated}
                    </span>
                  </div>
                  <motion.h3
                    className="text-2xl lg:text-3xl font-bold mb-4 group-hover:text-primary transition-colors duration-300"
                    layout
                  >
                    {project.title}
                    {hoveredProject === project.id && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-block ml-2"
                      >
                        <Sparkles className="w-5 h-5 text-primary inline" />
                      </motion.span>
                    )}
                  </motion.h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tag}
                        className="px-3 py-1 font-mono text-xs border border-border bg-muted/30 hover:border-primary/50 hover:bg-primary/5 transition-all cursor-default"
                        whileHover={{ scale: 1.05, y: -2 }}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + tagIndex * 0.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        variant="technical"
                        size="sm"
                        onClick={() => window.open(project.github, "_blank")}
                      >
                        <Github size={14} className="mr-2" />
                        View Code
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => window.open(project.demo, "_blank")}
                      >
                        <ExternalLink size={14} className="mr-2" />
                        Details
                      </Button>
                    </motion.div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="lg:col-span-4 flex lg:flex-col gap-4 lg:gap-6 lg:border-l lg:border-border lg:pl-8">
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2 hidden lg:block">
                    Key Features
                  </span>
                  {project.metrics.map((metric, metricIndex) => (
                    <motion.div
                      key={metric}
                      className="flex items-center gap-2 text-sm"
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + metricIndex * 0.1 }}
                      whileHover={{ x: 5 }}
                    >
                      <motion.div
                        className="w-2 h-2 bg-primary"
                        animate={
                          hoveredProject === project.id
                            ? { scale: [1, 1.5, 1] }
                            : {}
                        }
                        transition={{ duration: 0.5, delay: metricIndex * 0.1 }}
                      />
                      <span className="font-mono text-foreground">
                        {metric}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* View all projects */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button variant="outline" size="lg" onClick={handleToggleProjects}>
              {visibleCount < projects.length ? "View More..." : "Show Less"}
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
