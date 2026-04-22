import type { ResearchProject } from "@/types/content";

export const researchProjects: ResearchProject[] = [
  {
    title: "Effects of LLM Use on Critical Thinking and High-Level Cognitive Functions",
    description:
      "A systematic literature review examining the long-term effects of LLM usage on critical thinking and its underlying cognitive components — executive functions and metacognition — and how these effects vary across different LLM usage types.",
    tags: ["Literature Review", "LLM", "Critical Thinking", "Cognitive Science", "AI & Society"],
    year: 2026,
    status: "unpublished",
  },
  {
    title: "Carrot or Stick: Reinforcement Learning in Investing",
    description:
      "Designed and backtested a Reinforcement Learning agent for automated investment decision-making. Explored reward-shaping strategies across equity and forex time-series data, benchmarking the RL agent against regression, KNN, and ensemble boosting models.",
    tags: ["Reinforcement Learning", "Algorithmic Trading", "Machine Learning", "Finance"],
    year: 2025,
    status: "unpublished",
  },
];
