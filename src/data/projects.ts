/**
 * Projects Data
 * Portfolio projects with metadata
 */

export type ProjectIconName =
  | "BarChart3"
  | "Server"
  | "Lock"
  | "Calendar"
  | "Smartphone"
  | "ShoppingBag";

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  metrics: string[];
  iconName: ProjectIconName;
  github: string;
  demo: string;
  updated: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "01",
    title: "Staffing Analytics API",
    category: "Backend Development",
    description:
      "RESTful API service for a staffing marketplace platform that aggregates and analyzes shift data to identify top-performing workplaces and workers. Built with NestJS, Prisma ORM, and PostgreSQL, featuring complex data aggregation, sorting algorithms, and production-ready error handling.",
    tags: ["NestJS", "Prisma", "PostgreSQL", "TypeScript"],
    metrics: ["Data Aggregation", "Complex Queries", "REST API"],
    iconName: "BarChart3",
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
    iconName: "Server",
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
    iconName: "Lock",
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
    iconName: "Calendar",
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
    iconName: "Smartphone",
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
    iconName: "ShoppingBag",
    github: "https://github.com/brandon-kigen/dukafy",
    demo: "#",
    updated: "Mar 2024",
  },
];
