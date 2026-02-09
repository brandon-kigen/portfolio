/**
 * Data module index
 * Re-exports all data for convenient imports
 */

export { profile } from "./profile";
export type { Profile } from "./profile";

export { projects } from "./projects";
export type { Project, ProjectIconName } from "./projects";

export { skillCategories, skillFacts } from "./skills";
export type { SkillCategory } from "./skills";

export { stats, expertise } from "./about";
export type { Stat, ExpertiseArea, ExpertiseIconName } from "./about";
