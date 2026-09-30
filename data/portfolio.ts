export type Project = {
  title: string;
  category: "Full Stack" | "Mobile";
  year: string;
  description: string;
  tech: string[];
  highlights: string[];
  github?: string;
  live?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "OpenBookTalks",
    category: "Full Stack",
    year: "2026",
    description:
      "A deployed full-stack Next.js platform built with the App Router and TypeScript, with protected routes and a polished reading-focused experience.",
    tech: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Vercel"],
    highlights: [
      "Built with the Next.js App Router",
      "Implemented protected routes with Next.js middleware",
      "Deployed as a live production application"
    ],
    github: "https://github.com/Yogita2106",
    live: "https://openbooktalks-xi.vercel.app/",
    featured: true
  },
  {
    title: "AI Interview Analyzer",
    category: "Full Stack",
    year: "2026",
    description:
      "An AI interview practice platform where resumes are uploaded, parsed and used to generate role- and difficulty-based interview sessions.",
    tech: [
      "Node.js",
      "Express",
      "MongoDB",
      "Gemini API",
      "JWT",
      "Multer",
      "Cloudinary",
      "Swagger"
    ],
    highlights: [
      "Worked on protected REST APIs",
      "Resume upload and text extraction workflow",
      "Interview sessions, answer submission and report retrieval",
      "MongoDB persistence and Swagger/OpenAPI documentation"
    ],
    github: "https://github.com/Yogita2106",
    featured: true
  },
  {
    title: "NodeTalk",
    category: "Full Stack",
    year: "2026",
    description:
      "A real-time messaging platform with a separate React frontend and Node/Express backend, using Socket.io for low-latency communication.",
    tech: ["React", "Vite", "Node.js", "Express", "MongoDB", "Socket.io", "JWT"],
    highlights: [
      "Real-time bi-directional messaging",
      "JWT-based authentication",
      "Modular frontend and chat-backend architecture"
    ],
    github: "https://github.com/Yogita2106",
    featured: true
  },
  {
    title: "ClicksMeta",
    category: "Mobile",
    year: "2026",
    description:
      "Flutter-based affiliate marketing dashboard work completed during Android development experience.",
    tech: ["Flutter", "Dart", "Dio", "Provider", "FL Chart", "Secure Storage"],
    highlights: [
      "API-driven dashboard",
      "Provider-based state management",
      "Charts and analytics UI"
    ],
    github: "https://github.com/Yogita2106"
  },
  {
    title: "BinnyCash",
    category: "Mobile",
    year: "2026",
    description:
      "Flutter Android application work involving API integration, authentication and a GPT-based app experience.",
    tech: ["Flutter", "Dart", "Firebase", "Google Sign-In", "REST APIs"],
    highlights: [
      "Cross-platform Flutter UI",
      "Authentication flow",
      "API-connected application screens"
    ],
    github: "https://github.com/Yogita2106"
  },
  {
    title: "GameZhunt",
    category: "Mobile",
    year: "2026",
    description:
      "Flutter/WebView application work focused on UI design, reusable offer cards and web-content integration.",
    tech: ["Flutter", "Dart", "WebView", "UI/UX"],
    highlights: [
      "Reusable UI components",
      "Web content integration",
      "Loading and error handling"
    ],
    github: "https://github.com/Yogita2106"
  }
];

export const skillGroups = [
  {
    label: "Frontend",
    items: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"]
  },
  {
    label: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Socket.io",
      "JWT",
      "RBAC",
      "Swagger/OpenAPI"
    ]
  },
  {
    label: "Database",
    items: ["MongoDB", "Mongoose", "Schema Design", "Indexing", "Aggregation"]
  },
  {
    label: "Mobile",
    items: ["Flutter", "Dart", "Android SDK", "State Management"]
  },
  {
    label: "Tools & Cloud",
    items: ["Git", "GitHub", "GitHub Actions", "Postman", "Vercel", "AWS", "VS Code"]
  }
];

export const experience = {
  role: "Android Developer Intern",
  company: "CodeCody Technology Pvt. Ltd.",
  period: "28 Apr 2026 – 30 Jun 2026",
  stack: ["Flutter", "Dart", "Android SDK", "Git & GitHub"],
  bullets: [
    "Contributed to live Android app projects in a professional team using Flutter and Dart.",
    "Applied UI/UX design, state management and Android SDK fundamentals.",
    "Worked on ClicksMeta, BinnyCash, GST & Scientific Calculator, GameZhunt and Kids Coloring & AI Story Teller."
  ]
};
