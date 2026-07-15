import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  java,
  Movie,
  VA,
  Game,
  jenkins,
  grafana,
  prometheus,
  sonarQube,
  trivy,
  zap,
  kubernetes,
  DevSecOps,
  DropZone,
  aqualensAI
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "DevOps Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  {
    name: "docker",
    icon: docker,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Jenkins",
    icon: jenkins,
  },
  {
    name: "Grafana",
    icon: grafana,
  },
  {
    name: "Prometheus",
    icon: prometheus,
  },
  {
    name: "SonarQube",
    icon: sonarQube,
  },
  {
    name: "Trivy",
    icon: trivy,
  },
  {
    name: "OWASP ZAP",
    icon: zap,
  },
  {
    name: "Kubernetes",
    icon: kubernetes,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
  name: "MovieGo",
  description:
    "Full-stack movie ticket booking platform where users can browse movies, book tickets, manage favorites, and receive notifications about upcoming shows. Built using the MERN stack with modern authentication and background job processing.",
  tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
    {
      name: "nodejs",
      color: "green-text-gradient",
    },
    {
      name: "mongodb",
      color: "pink-text-gradient",
    },
    {
      name: "tailwind",
      color: "orange-text-gradient",
    },
    {
      name: "express",
      color: "yellow-text-gradient",
    },
  ],
  image: Movie,
  source_code_link: "https://github.com/Shakthivelk24/MovieGo",
},
  {
  name: "AI Virtual Assistant",
  description:
    "A smart voice-enabled AI assistant built with the MERN stack that can listen, process queries, and respond using AI-powered replies. The assistant supports speech interaction, personalized avatars, secure authentication, and adaptive behavior to create a human-like digital companion experience.",
  tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
    {
      name: "nodejs",
      color: "green-text-gradient",
    },
    {
      name: "mongodb",
      color: "pink-text-gradient",
    },
    {
      name: "gemini-ai",
      color: "yellow-text-gradient",
    },
    {
      name: "cloudinary",
      color: "orange-text-gradient",
    },
  ],
  image: VA,
  source_code_link: "https://github.com/Shakthivelk24/virtual-assistant",
},
  {
  name: "Blue Boy Adventure",
  description:
    "A 2D top-down adventure game where players explore a forest map, collect keys and power-ups, unlock doors, and reach the hidden treasure while tracking completion time. The game is built using classic tile-based mechanics and object-oriented design in Java.",
  tags: [
    {
      name: "java",
      color: "blue-text-gradient",
    },
    {
      name: "oop",
      color: "green-text-gradient",
    },
    {
      name: "2d-game",
      color: "pink-text-gradient",
    },
    {
      name: "game-development",
      color: "orange-text-gradient",
    },
  ],
  image: Game,
  source_code_link: "https://github.com/Shakthivelk24/2DGame",
},
{
  name: "DropZone",
  description:
    "A modern cloud-based file storage and management platform built with the MERN stack that enables users to securely upload, organize, search, and share files. It features drag-and-drop uploads, folder management, storage analytics, secure authentication, and a fully responsive interface for seamless file management across devices.",
  tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
    {
      name: "nodejs",
      color: "green-text-gradient",
    },
    {
      name: "mongodb",
      color: "pink-text-gradient",
    },
    {
      name: "cloudinary",
      color: "orange-text-gradient",
    },
    {
      name: "clerk",
      color: "purple-text-gradient",
    },
  ],
  image: DropZone,
  source_code_link: "https://github.com/Shakthivelk24/DropZone",
},
{
  name: "AquaLens AI",
  description:
    "An AI-powered geospatial groundwater monitoring system that leverages satellite data, urban activity indicators, and machine learning to predict groundwater depletion risks. The platform provides interactive maps, risk analysis, and early warning insights through a real-time dashboard, enabling proactive water resource management and data-driven decision-making.",
  tags: [
    {
      name: "react",
      color: "blue-text-gradient",
    },
    {
      name: "fastapi",
      color: "green-text-gradient",
    },
    {
      name: "python",
      color: "pink-text-gradient",
    },
    {
      name: "xgboost",
      color: "yellow-text-gradient",
    },
    {
      name: "random-forest",
      color: "orange-text-gradient",
    },
  ],
  image: aqualensAI,
  source_code_link: "https://github.com/PraveenKumarM17/AquaLens-AI",
},
{
  name: "Secure DevOps Pipeline",
  description:
    "A production-ready DevSecOps pipeline built for an NPM-based Node.js application that automates secure software delivery from code commit to Kubernetes deployment. The pipeline integrates Jenkins for CI/CD, SonarQube for code quality analysis, Trivy for dependency and container vulnerability scanning, OWASP ZAP for dynamic security testing, Docker for containerization, Kubernetes for orchestration, and Prometheus with Grafana for continuous monitoring and observability.",
  tags: [
    {
      name: "jenkins",
      color: "blue-text-gradient",
    },
    {
      name: "docker",
      color: "green-text-gradient",
    },
    {
      name: "kubernetes",
      color: "pink-text-gradient",
    },
    {
      name: "sonarqube",
      color: "yellow-text-gradient",
    },
    {
      name: "owasp-zap",
      color: "orange-text-gradient",
    },
    {
      name: "trivy",
      color: "red-text-gradient",
    },
  ],
  image: DevSecOps,
  source_code_link: "https://github.com/Shakthivelk24/Request-System-DevSecOps",
},
];

export { services, technologies, experiences, testimonials, projects };
