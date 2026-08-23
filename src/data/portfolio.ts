export const portfolio = {
  meta: {
    title: "Harsh Sharma — AI/ML Engineer",
    description:
      "AI/ML Engineer specializing in Machine Learning, Deep Learning, LLMs, and RAG systems. Building end-to-end ML solutions and scalable AI applications.",
  },

  nav: {
    brand: "harsh.dev",
    links: [
      { label: "about", href: "#about" },
      { label: "experience", href: "#experience" },
      { label: "projects", href: "#projects" },
      { label: "playground", href: "#playground" },
      { label: "skills", href: "#skills" },
      { label: "contact", href: "#contact" },
    ],
    hireMeEmail: "harsh.sharma4131@gmail.com",
  },

  hero: {
    availability: "Available · building final-year project",
    name: "Harsh Sharma",
    title: "AI/ML Engineer",
    tagline: "building end-to-end ML pipelines, not just notebooks.",
    education:
      "B.Tech in Artificial Intelligence & Machine Learning at GH Raisoni College of Engineering and Management, Pune (2023–2027) · CGPA 8.6/10. Hands-on with LLMs, RAG systems, and deep learning pipelines for production use.",
    cta: {
      projects: "#projects",
      resume: "/resume.pdf",
      contact: "harsh.sharma4131@gmail.com",
    },
    location: "Pune, Maharashtra, India",
    phone: "+91 9767755630",
    linkedin: "https://www.linkedin.com/in/harsh-sharma4131",
  },

  about: {
    paragraphs: [
      "I'm an AI/ML undergrad who works across the full ML lifecycle — data preprocessing, model building, fine-tuning, and deployment — not just model training in isolation.",
      "I'm comfortable on the research side (LLMs, RAG, fine-tuning, prompt engineering) and the engineering side (CNN-LSTM pipelines, transfer learning, vector databases, agentic workflows). My aim: ship scalable AI systems people actually use.",
      "Right now, I'm building my final-year project — taking it end-to-end from data to deployment.",
    ],
    stack: [
      { label: "role", value: "AI/ML Engineer" },
      { label: "focus", value: "LLMs · RAG · DL" },
      { label: "degree", value: "B.Tech AI&ML" },
      { label: "cgpa", value: "8.6 / 10" },
      { label: "dsa", value: "170+ solved" },
    ],
  },

  experience: {
    heading: "Industry experience building and shipping ML systems — reverse chronological.",
    items: [
      {
        title: "Data Scientist Intern",
        period: "Aug 2025 — Oct 2025",
        duration: "3 mo",
        company: "Zidio Development",
        type: "Remote",
        bullets: [
          "Designed and built an end-to-end image captioning pipeline using a CNN-LSTM encoder-decoder architecture trained on the MS COCO dataset (83,000+ images), delivering real-time inference through a Gradio web interface.",
          "Engineered a transfer learning strategy by fine-tuning a pretrained ResNet-50 encoder while training the LSTM decoder from scratch, reducing training time by 40% without compromising caption quality.",
          "Deployed the model as an interactive web application, enabling real-time image upload and caption generation, and collaborated with cross-functional teams to deliver a demo-ready system within the 2-month internship.",
        ],
      },
    ],
    linkedinUrl: "https://www.linkedin.com/in/harsh-sharma4131",
  },

  projects: {
    heading: "Real AI/ML projects.",
    items: [
      {
        category: "AI · RAG · LLM",
        title: "Medical Chatbot",
        description:
          "An end-to-end Retrieval-Augmented Generation (RAG) chatbot combining a Large Language Model with a Pinecone vector store to deliver context-aware responses on medicines and drug interactions.",
        tags: ["Python", "LangChain", "Pinecone", "Streamlit", "OpenAI"],
        url: "#",
        github: "https://github.com/HARSH-0000/medical-chatbot",
      },
      {
        category: "Deep Learning · Computer Vision",
        title: "Neuroscan — Brain Tumor Classification",
        description:
          "A CNN-based deep learning classifier trained on brain MRI scans across four categories (glioma, meningioma, pituitary, no tumor), achieving 95%+ test accuracy through transfer learning on a pretrained VGG16 model.",
        tags: ["Python", "PyTorch", "VGG16", "Transfer Learning", "Streamlit"],
        url: "#",
        github: "https://github.com/HARSH-0000/brain_tumour",
      },
      {
        category: "AI · Multi-Agent System",
        title: "Multi-Agent Research System",
        description:
          "A 4-stage agentic workflow (Search → Reader → Writer → Critic) using LangChain tool-based agents with Tavily search and BeautifulSoup scraping for automated information retrieval, synthesis, and evaluation at scale with latency less than 10 seconds.",
        tags: ["Python", "LangChain", "OpenAI", "Tavily", "BeautifulSoup"],
        url: "#",
        github: "https://github.com/HARSH-0000/Multi_agent_system",
      },
      
      {
        category: "ML · Healthcare",
        title: "Blood Pressure Prediction",
        description:
          "A machine learning system for predicting blood pressure based on health parameters, deployed as a web application for real-time predictions.",
        tags: ["Python", "scikit-learn", "Flask", "Pandas"],
        url: "#",
        github: "https://github.com/HARSH-0000/blood-pressure-analysis",
      },
      {
        category: "ML · Recommendation System",
        title: "Movie Recommendation System",
        description:
          "A content-based movie recommendation system that suggests movies based on user preferences and viewing history, deployed with an interactive web interface.",
        tags: ["Python", "Pandas", "Scikit-learn", "Flask"],
        url: "#",
        github: "https://github.com/HARSH-0000/movie_recommendation",
      },
      {
        category: "ML · Healthcare",
        title: "Medicine Recommendation System",
        description:
          "A medicine recommendation system built using patient reviews and drug ratings from the Drugs.com dataset, providing personalized medication suggestions through a web application.",
        tags: ["Python", "Flask", "NLP", "Pandas"],
        url: "#",
        github: "https://github.com/HARSH-0000/Medicine_recommendation",
      },
      {
        category: "NLP · Sentiment Analysis",
        title: "Sentiment Analysis of MCA-21 Portal",
        description:
          "A sentiment analysis system analyzing user feedback from the MCA-21 portal using baseline models and transformer-based approaches to classify sentiments and extract actionable insights.",
        tags: ["Python", "NLP", "Transformers", "Flask"],
        url: "#",
        github: "https://github.com/HARSH-0000/Sentiment-analysis",
      },
    ],
  },

  marquee: [
    "AI",
    "Machine Learning",
    "Deep Learning",
    "Generative AI",
    "Python",
    "LLMs",
    "RAG",
    "LangChain",
    "PyTorch",
    "Data Science",
    "Prompt Engineering",
    "Agentic AI",
  ],

  skills: {
    heading: "The stack, grouped how I actually use it.",
    groups: [
      {
        label: "Programming Languages",
        items: ["Python", "Java", "SQL"],
      },
      {
        label: "Machine Learning",
        items: ["Supervised & Unsupervised Learning", "Statistical Modeling", "Transfer Learning", "Model Fine-tuning", "Feature Engineering", "Model Evaluation"],
      },
      {
        label: "Deep Learning",
        items: ["CNNs", "LSTMs", "Transformers", "RNNs", "Encoder-Decoder Architectures", "PyTorch"],
      },
      {
        label: "Generative AI & LLMs",
        items: ["LLMs", "RAG", "Prompt Engineering", "Multi-Agent Systems", "OpenAI GPT", "Embeddings", "Vector Databases", "LangChain", "LangGraph"],
      },
      {
        label: "NLP",
        items: ["NLTK", "Text Preprocessing", "Tokenization", "Semantic Search"],
      },
      {
        label: "Frameworks & Libraries",
        items: ["PyTorch", "scikit-learn", "NumPy", "Pandas", "Matplotlib"],
      },
      {
        label: "Databases",
        items: ["MySQL", "MongoDB", "Pinecone", "ChromaDB"],
      },
      {
        label: "Tools & Platforms",
        items: ["Docker", "Git", "GitHub", "Jupyter Notebook"],
      },
    ],
  },

  credentials: {
    heading: "Certifications & recognition",
    items: [
      "170+ DSA problems solved on LeetCode — 90 Easy · 77 Medium · 3 Hard · 78.75% acceptance rate",
      "Generative AI - IBM",
      "Cloud Computing - Infosys",
      "Introduction to Data Science - Cisco",
      "Claude 101 - Anthropic",
    ],
  },

  contact: {
    heading: "Open to AI/ML roles and collaborations — let's talk.",
    email: "harsh.sharma4131@gmail.com",
    resume: "/resume.pdf",
    social: [
      { label: "GitHub", url: "https://github.com/HARSH-0000" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/harsh-sharma4131" },
      { label: "LeetCode", url: "https://leetcode.com/u/Inferr/" },
    ],
  },

  footer: {
    name: "Harsh Sharma",
  },
} as const

export type Portfolio = typeof portfolio
