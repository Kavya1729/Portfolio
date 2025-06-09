const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  }
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 6, suffix: "+", label: "Months of Internship Experience" },
  { value: 4, suffix: "+", label: "Full-Stack Projects Completed" },
  { value: 700, suffix: "+", label: "DSA Problems Solved" },
  { value: 300, suffix: "+", label: "Students Mentored in Coding Events" },
];


const abilities = [
  {
    imgPath: "/images/fullstack.png",
    title: "Full-Stack Proficiency",
    desc: "Building scalable and dynamic applications using MERN stack, Socket.io, and modern web technologies.",
  },
  {
    imgPath: "/images/motivation.png",
    title: "Collaborative Development",
    desc: "Working effectively in startup environments with cross-functional teams using Git, REST APIs, and agile practices.",
  },
  {
    imgPath: "/images/time.png",
    title: "Rapid & Reliable Delivery",
    desc: "Delivering real-time, high-performance solutions with a strong focus on clean architecture and timely deployment.",
  },
];



const techStackIcons = [
  {
    name: "React",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Node.js",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Kotlin (Android)",
    modelPath: "/models/Kotlin.glb",
    scale: 1.3,
    rotation: [Math.PI / 2, 0, 0],
  },
  {
    name: "Java (DSA)",
    modelPath: "/models/Java.glb",
    scale: 1.5,
    rotation: [Math.PI / 2, 0, 0],
  },
  {
    name: "MongoDB",
    modelPath: "/models/mongodb.glb",
    scale: 1.4,
    rotation: [1.4, -Math.PI / 6, 0],
  },
];


const expCards = [
  {
    imgPath: "/images/experience.png",
    title: "Software Development Intern",
    date: "Aug 2024 – Nov 2024",
    responsibilities: [
      "Built a scalable Android app using Jetpack Compose tailored for medical records management.",
      "Implemented lazy loading for image handling, reducing memory usage by 40%.",
      "Designed a custom 4x4 grid UI component to improve patient image preview usability.",
    ],
  },
  {
    imgPath: "/images/experience.png",
    title: "Frontend Developer Intern",
    date: "Jan 2025 – Feb 2025",
    responsibilities: [
      "Developed reusable React.js components for SaaS analytics dashboards.",
      "Integrated Recharts to visualize real-time metrics using live REST API data.",
      "Optimized page load time by improving component structure and state management.",
    ],
  },
];


const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];



const socialImgs = [
  {
    name: "github",
    imgPath: "/images/github.png",
    url: "https://github.com/Kavya1729",
  },
  {
    name: "leetcode",
    imgPath: "/images/leetcode.png",
    url: "https://leetcode.com/u/Kavya107",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/mittalkavya/",
  },
]; 


export {
  words,
  abilities,
  counterItems,
  expCards,
  expLogos,
  socialImgs,
  techStackIcons,
  navLinks,
};
