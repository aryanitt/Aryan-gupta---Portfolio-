import { Github, Linkedin, Code } from 'lucide-react';

export const portfolioData = {
  about: {
    bio: "I am a Software Engineer and ML Researcher dedicated to building products where code meets intelligence. My expertise spans developing scalable full-stack applications and advancing NLP research with RAG architectures. I focus on engineering robust backend systems that power production-grade AI solutions.",
    focus: [
      "Building Scalable AI Products",
      "LLMs & RAG Pipelines",
      "Intelligent Autonomous Agents",
      "Production ML Engineering"
    ],
    education: {
      degree: "B.Tech in Information Technology",
      institution: "IIIT Bhopal",
      duration: "2023 - 2027",
      cgpa: "8.14",
      coursework: ["Data Structures & Algorithms", "Operating Systems", "DBMS", "Computer Networks", "Artificial Intelligence"]
    },
    stats: {
      problemsSolved: "450+",
      streak: "115+",
      rating: "2★ CodeChef",
      leetcode: "Knight"
    }
  },
  experience: [
    {
      role: "Machine Learning Intern",
      company: "F24 Tech Softwares",
      duration: "May 2024 - July 2024",
      description: "Driving predictive intelligence for enterprise lead generation.",
      work: [
        "Architected an Intent Prediction ML System improving lead qualification efficiency by 35%.",
        "Engineered automated data pipelines processing 10k+ daily records for real-time model inference.",
        "Achieved 95% model accuracy using ensemble methods (XGBoost, LightGBM) on customer behavioral data.",
        "Collaborated with backend teams to deploy models via FastAPI, reducing inference latency by 40%."
      ]
    }
  ],
  research: [
    {
      title: "PolicyInsight AI Intelligence Platform",
      focus: "NLP / RAG Architecture / Legal Tech",
      description: "A high-performance RAG system for analyzing complex health policy documents.",
      github: "https://github.com/aryanitt/PolicyInsight-AI",
      live: "https://policy-insight-ai.vercel.app",
      metrics: {
        accuracy: "92% Retrieval",
        latency: "<200ms",
        scale: "1M+ Documents"
      },
      details: [
        "Implemented advanced chunking strategies and hybrid search (dense + sparse) for precise context retrieval.",
        "Designed a custom evaluation framework using RAGAS to optimize generation faithfulness.",
        "Built a clause attribution pipeline to link generated answers directly to source policy text."
      ]
    },
    {
      title: "Clause Attribution Pipelines",
      focus: "Explainable AI / LLM Evaluation",
      description: "Researching methods to improve interpretability in Large Language Models.",
      metrics: {
        precision: "89%",
        coverage: "100%",
        impact: "High Trust"
      },
      details: [
        "Developed a novel attention-based mechanism to visualize token contributions during generation.",
        "Benchmarked against state-of-the-art attribution methods on legal and medical datasets.",
        "Published findings on improving trust in automated decision-support systems."
      ]
    }
  ],
  projects: [
    {
      id: 1,
      title: "Roommate Dekho",
      category: "Machine Learning",
      problem: "Finding compatible roommates in urban areas is inefficient and fraught with trust issues.",
      solution: "An intelligent recommendation system matching users based on lifestyle compatibility scores.",
      techStack: ["Python", "Scikit-Learn", "Flask", "React", "MongoDB"],
      metrics: ["90% Match Rate", "500+ Users", "Match < 5s"],
      github: "https://github.com/aryanitt/Roommate_Dekho",
      live: "https://roommate-dekho.vercel.app",
      description: "Comprehensive roommate recommendation platform using collaborative filtering."
    },
    {
      id: 2,
      title: "EduManage ERP",
      category: "Web Engineering",
      problem: "School administration suffers from fragmented data and manual, error-prone processes.",
      solution: "A centralized, role-based ERP system streamlining academic and administrative workflows.",
      techStack: ["MERN Stack", "Redux", "JWT", "Chart.js"],
      metrics: ["3 Role Types", "Real-time Sync", "Zero Downtime"],
      github: "https://github.com/aryanitt/School-Management-System",
      live: "#",
      description: "Scalable school management system with role-based access control and analytics."
    },
    {
      id: 3,
      title: "Customer Intent ML",
      category: "Machine Learning",
      problem: "Sales teams waste 40% of their time chasing low-intent leads.",
      solution: "A predictive modeling engine scoring leads based on behavioral signals.",
      techStack: ["XGBoost", "FastAPI", "Pandas", "Docker"],
      metrics: ["35% Efficiency", "95% Accuracy", "Auto-Retrain"],
      github: "#",
      live: "#",
      description: "Enterprise-grade intent prediction system for optimizing sales funnels."
    }
  ],
  skills: {
    programming: ["Python", "C++", "JavaScript", "SQL", "TypeScript"],
    machineLearning: ["Regression/Classification", "Clustering & PCA", "Feature Engineering", "Model Evaluation", "Ensemble Methods"],
    deepLearning: ["CNN Architectures", "RNN/LSTMs", "TensorFlow", "PyTorch", "Transfer Learning"],
    nlpGenAi: ["RAG Pipelines", "LangChain & Agents", "LLM Fine-tuning", "Prompt Engineering", "Transformer Models"],
    frameworksTools: ["React.js", "Next.js", "Node.js", "FastAPI", "Docker", "Git/GitHub", "AWS"],
    coreCs: ["Data Structures", "Algorithms", "OOP Design", "DBMS", "System Design", "Operating Systems"]
  },
  contact: {
    email: "aryanguptaofficial98@gmail.com",
    phone: "+91-9893916675",
    linkedin: "https://linkedin.com/in/aryan-gupta",
    github: "https://github.com/aryanitt",
    leetcode: "https://leetcode.com/aryan-gupta",
    location: "Bhopal, India"
  }
};
