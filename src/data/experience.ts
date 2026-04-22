import type { WorkItem, EducationItem } from "@/types/content";

export const workHistory: WorkItem[] = [
  {
    company: "Liberty Mutual Insurance",
    role: "Principal Software Engineer",
    start: "Jun 2017",
    end: "Present",
    bullets: [
      "Progressed from Software Engineer to Principal Engineer, demonstrating consistent technical growth and expanding scope of leadership.",
      "Architected and developed Java-based pricing engine APIs that dynamically rate customer insurance policies using telematics and driving behavior data.",
      "Built a data pipeline to ingest ML models and utilize them in production, leveraging Apache Spark.",
      "Leading and mentoring a team of 9 engineers across architecture reviews, design decisions, and code quality.",
      "Built and maintained a Python ETL data processing pipeline that ingests database changes, validates and cleanses data, then calls downstream APIs.",
      "Built fully asynchronous, low-latency APIs for external and internal users using Spring Microservices, WebFlux, AWS Lambda, and Kafka.",
    ],
  },
  {
    company: "Liberty Mutual Insurance",
    role: "Business Systems Analyst",
    start: "Jun 2013",
    end: "Mar 2017",
    bullets: [
      "Identified and analyzed trends from structured production database data and unstructured customer comment data.",
      "Became the subject matter expert for data querying on the eService team using SQL.",
      "Participated in gathering and processing data from A/B tests and customer surveys.",
    ],
  },
];

export const education: EducationItem[] = [
  {
    institution: "Georgia Institute of Technology",
    degree: "M.S.",
    field: "Computer Science — AI/ML",
    year: "2025 – Present",
    gpa: "4.0",
    courses: [
      "Artificial Intelligence",
      "Machine Learning for Trading",
      "Computing for Data Analysis",
      "Deterministic Optimization",
      "Data Analytics in Business",
    ],
  },
  {
    institution: "University of New Hampshire — Whittemore School of Business",
    degree: "B.S.",
    field: "Finance",
    year: "2009 – 2013",
    courses: [
      "Statistics",
      "Derivative Securities",
      "Quantitative Decision Making",
      "Investment Analysis",
      "Macro/Micro Economics",
      "Finite Mathematics",
    ],
  },
];
