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
  { value: 14, suffix: "+", label: "Months of Internship Experience" },
  { value: 500, suffix: "+", label: "LeetCode Problems Solved" },
  { value: 1900, suffix: "+", label: "LeetCode Rating (Knight)" },
  { value: 3, prefix: "Top ", suffix: "%", label: "Globally on LeetCode" },
];


const abilities = [
  {
    imgPath: "/images/fullstack.png",
    title: "Backend Engineering",
    desc: "Designing REST APIs, authentication, real-time updates, and financial data pipelines with Node.js, Express, and MongoDB.",
  },
  {
    imgPath: "/images/motivation.png",
    title: "Full-Stack Delivery",
    desc: "Shipping product features end to end — from API contracts and streaming workflows to React interfaces used by real users.",
  },
  {
    imgPath: "/images/time.png",
    title: "DSA & Competitive Programming",
    desc: "LeetCode Knight with 500+ problems solved, plus ICPC 2025 Chennai Regionalist and ICPC India 2024 preliminary qualifier.",
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
    title: "Full-Stack Developer Intern — Gazzalion Tech",
    date: "Jan 2026 – June 2026",
    responsibilities: [
      "Developed and maintained REST APIs that process and serve earnings transcripts, investor presentations, and financial reports for an equity analytics platform.",
      "Designed a polling-based backend for live earnings-call tracking, exposing backend-generated isLive indicators for real-time application updates.",
      "Integrated backend-driven MP3 and HLS audio streaming with ReactPlayer, and supported frontend integration through MCP-based Figma development.",
      "Built an automated financial-document pipeline with Google Gemini to classify quarterly and annual reports through a scalable backend workflow.",
    ],
  },
  {
    imgPath: "/images/experience.png",
    title: "Backend Developer Intern — Shegruh",
    date: "June 2025 – Sept 2025",
    responsibilities: [
      "Implemented secure JWT authentication and authorization middleware with role-based access control for backend services.",
      "Integrated and optimized 10+ REST APIs with request validation, structured error handling, and consistent response management.",
      "Built reusable application components around a drag-and-drop workflow so architects can configure billing and quotation sections before generating custom PDFs.",
      "Developed shared components for buttons, tabs, headings, and forms, improving consistency and maintainability across the product.",
    ],
  },
  {
    imgPath: "/images/experience.png",
    title: "Software Development Intern — ThriverX",
    date: "Aug 2024 – Nov 2024",
    responsibilities: [
      "Built a scalable Android app using Jetpack Compose tailored for medical records management.",
      "Implemented lazy loading for image handling, reducing memory usage by 40%.",
      "Designed a custom 4x4 grid UI component to improve patient image preview usability.",
    ],
  },
];

const education = [
  {
    school: "Ajay Kumar Garg Engineering College",
    detail: "B.Tech in Computer Science and Information Technology",
    date: "2022 – 2026",
  },
  {
    school: "RK Public School",
    detail: "CBSE, Class XII — 92%",
    date: "2022",
  },
  {
    school: "RK Public School",
    detail: "CBSE, Class X — 92.6%",
    date: "2020",
  },
];

const achievements = [
  {
    stat: "1900+",
    kicker: "LeetCode Knight",
    title: "Top 3% globally",
    detail: "500+ problems solved, with a Knight rating above 1900.",
  },
  {
    stat: "2025",
    kicker: "ICPC Regionalist",
    title: "Chennai Regional",
    detail: "Qualified for the ICPC 2025 Chennai Regional Contest.",
  },
  {
    stat: "2024",
    kicker: "ICPC India",
    title: "Preliminary Round",
    detail: "Qualified the ICPC India 2024 Preliminary Round.",
  },
];

const projects = [
  {
    id: "chatterverse",
    title: "ChatterVerse",
    tagline: "Real-time chat for private and group conversations",
    image: "/images/proj2.png",
    description:
      "A MERN chat platform with Socket.IO and JWT. Users authenticate, search people, and talk in one-to-one or group chats with live delivery.",
    highlights: [
      "Private and group chats with typing indicators, read receipts, and real-time message delivery.",
      "JWT authentication, user search, and MongoDB-backed conversations and notifications.",
      "Real-time flow kept efficient with focused Socket.IO events and targeted database queries.",
    ],
    tech: "MERN, Node.js, Express.js, MongoDB, Socket.IO, JWT",
    github: "https://github.com/Kavya1729/ChatterVerse",
  },
  {
    id: "wanderlust",
    title: "Wanderlust",
    tagline: "Backend for a property listing and booking platform",
    image: "/images/project1.png",
    description:
      "An Airbnb-style backend where users sign up, publish stays, and leave reviews. Built to cover the core listing and booking data flows.",
    highlights: [
      "Authentication plus listing management so users can create, browse, and update properties.",
      "Reviews and ratings stored in MongoDB and served through Express APIs.",
      "Backend-focused implementation of the booking platform’s core user and listing workflows.",
    ],
    tech: "Node.js, Express.js, MongoDB",
    github: "https://github.com/Kavya1729/Wanderlust",
  },
  {
    id: "weather",
    title: "Weather App",
    tagline: "Live, location-based weather on Android",
    image: "/images/proj3.png",
    description:
      "An Android app that shows current conditions for the user’s location — temperature, humidity, wind, and related forecast details.",
    highlights: [
      "Live weather from the OpenWeatherMap API, driven by the device location.",
      "Clear mobile UI for temperature, humidity, wind speed, and local conditions.",
    ],
    tech: "Android, OpenWeatherMap API",
    github: "https://github.com/Kavya1729/Weather-App",
  },
];

const skillGroups = [
  {
    index: "01",
    label: "Languages",
    items: ["Java", "JavaScript", "TypeScript", "SQL"],
  },
  {
    index: "02",
    label: "Backend",
    items: ["Node.js", "Express.js", "REST APIs", "MongoDB", "WebSockets"],
  },
  {
    index: "03",
    label: "Frontend",
    items: ["React.js", "Next.js", "Redux", "React Query", "Tailwind CSS", "Material UI"],
  },
  {
    index: "04",
    label: "Mobile & Tools",
    items: ["React Native", "Android", "Jetpack Compose", "Git", "Postman", "Figma"],
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
  education,
  achievements,
  projects,
  skillGroups,
};
