import type { SkillGroup } from "@/types/content";

export const skillGroups: SkillGroup[] = [
  {
    category: "Languages & Frameworks",
    items: ["Java", "Python", "C", "SQL", "Spring / WebFlux", "Pandas"],
  },
  {
    category: "ML / AI",
    items: [
      "Regression",
      "KNN",
      "Ensemble Boosting",
      "Reinforcement Learning",
      "Neural Networks",
      "Time-Series Modeling",
      "ML Pipelines",
    ],
  },
  {
    category: "Data & Systems",
    items: [
      "Apache Spark",
      "ETL Pipelines",
      "Distributed Systems",
      "Database Systems",
      "Kafka",
    ],
  },
  {
    category: "Cloud & DevOps",
    items: ["AWS (EC2, Lambda, DocumentDB)", "CI/CD", "Observability", "Infrastructure as Code"],
  },
];
