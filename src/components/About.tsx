import { Cloud, Code2, Database, Layout, Server } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  const stats = [
    { value: "1+", label: "Years Experience", secret: "Started in 2024 🚀" },
    { value: "2", label: "Happy Clients", secret: "High satisfaction 🎯" },
    { value: "99%", label: "Code Coverage", secret: "Tests are love ❤️" },
  ];

  const expertise = [
    {
      icon: Layout,
      title: "User Interfaces",
      description:
        "Building consumer facing  products/services that they will love and have an easy time using — building credibility and trust with the customer",
    },
    {
      icon: Server,
      title: "Server-side Business Logic",
      description:
        "Web apps and services that improve the efficiency of your business operations and grow as your business grows.",
    },
    {
      icon: Database,
      title: "Data Engineering",
      description:
        "Personalized content and real-time updates while being secure. Providing better customer service and tailored experiences.",
    },
    {
      icon: Cloud,
      title: "Cloud Adoption & Migration",
      description:
        "The cloud is the primary driver for a business' 'digital evolution' enabling faster time-to-market for new products and immediate access to advanced technologies like Generative AI and data analytics that will help you make data-driven decisions and provide that competitive edge",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-24 lg:py-32 relative" ref={ref}>
      {/* Background accent - simplified */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-card/30 hidden lg:block" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        {/* Section header */}
        <motion.div
          className="flex items-center gap-4 mb-16"
          initial={{ opacity: 0, x: -20 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="w-12 h-px bg-primary" />
          <span className="section-number">/ WHO YOU'LL BE WORKING WITH</span>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left column - Text */}
          <div>
            <motion.h2
              className="text-3xl md:text-3xl lg:text-4xl font-bold mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              I understand your demands
              <br />
              <span className="text-highlight">
                & provide quality solutions
              </span>
            </motion.h2>

            <motion.div
              className="space-y-6 text-muted-foreground leading-relaxed"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <p>
                For over a year now, I have been helping businesses in Kenya
                best engage their customers online - whether they are just
                learning more about you before they contact you or using your
                online tools no matter where you or they are.
              </p>
              <p>
                How do I do this? — I build websites and applications that not
                only serve the customer fast and efficiently, but also look
                really good doing it. My approach combines the rigor of
                engineering with the creativity of design all to provide the
                customer with the experience && satisfaction they come looking
                for.
              </p>
            </motion.div>

            {/* Stats grid with easter egg tooltips */}
            <motion.div
              className="grid grid-cols-2 gap-6 mt-12 pt-12 border-t border-border"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="group relative cursor-pointer"
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredStat(index)}
                  onMouseLeave={() => setHoveredStat(null)}
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    className="text-3xl md:text-4xl font-bold text-primary mb-1"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  >
                    {stat.value}
                  </motion.div>
                  <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                    {stat.label}
                  </div>

                  {/* Easter egg tooltip */}
                  {hoveredStat === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute -top-8 left-0 bg-primary text-primary-foreground px-2 py-1 text-xs font-mono whitespace-nowrap"
                    >
                      {stat.secret}
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right column - Expertise cards */}
          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                className="group p-6 border border-border bg-card/50 hover:border-primary/50 transition-all duration-500"
                variants={itemVariants}
                whileHover={{ x: 10, borderColor: "hsl(var(--primary))" }}
              >
                <div className="flex items-start gap-4">
                  <motion.div
                    className="w-12 h-12 flex items-center justify-center border border-primary/30 group-hover:border-primary group-hover:bg-primary/10 transition-all duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <item.icon className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="font-mono text-xs text-primary/60">
                        0{index + 1}
                      </span>
                      <h3 className="font-semibold">{item.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
