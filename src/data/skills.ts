/**
 * Skills Data
 * Technical skills organized by category with easter egg facts
 */

export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["TypeScript", "JavaScript", "Python", "Go", "SQL"],
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TanStack Start", "Tailwind CSS", "Three.js"],
  },
  {
    title: "Backend",
    skills: ["NestJS", "ExpressJS", "FastAPI", "Django + DRF", "GraphQL"],
  },
  {
    title: "Infrastructure",
    skills: [
      "AWS",
      "GCP",
      "Docker",
      "Kubernetes",
      "Terraform",
      "CI/CD",
      "Microservices",
    ],
  },
  {
    title: "Databases",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Firebase", "Supabase"],
  },
  {
    title: "Tools",
    skills: ["Git", "Figma", "Jira", "Sentry", "Postman"],
  },
];

/**
 * Easter egg: skill fun facts
 * Click on certain skills to reveal secret messages
 */
export const skillFacts: Record<string, string> = {
  TypeScript: "Favorite! 💙",
  React: "Since 2024",
  Python: "For ML projects",
  Docker: "🐳 Everything in containers",
  PostgreSQL: "Best database ever",
  Redis: "Speed demon ⚡",
  Kubernetes: "K8s master",
};
