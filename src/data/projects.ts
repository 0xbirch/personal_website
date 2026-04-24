import type { Project } from "@/types/content";

export const projects: Project[] = [
  {
    title: "Paper Implementation and NBA Prediction Model",
    description:
      "Re-implemented the model selection framework from Walsh & Joshi (2024), comparing accuracy vs. calibration as selection criteria for identifying edge in NBA game outcome prediction markets on Kalshi. Trained and evaluated multiple ML classifiers, finding that well-calibrated probability estimates — rather than raw accuracy — better identify profitable opportunities in live contracts.",
    tags: ["Machine Learning", "Sports Betting", "Prediction Markets", "Python"],
    codeUrl: "https://github.gatech.edu/sduval8/NBA_Model",
    paperUrl: "https://doi.org/10.1016/j.mlwa.2024.100539",
    paperCitation: "Walsh & Joshi (2024)",
    year: 2025,
  },
];
