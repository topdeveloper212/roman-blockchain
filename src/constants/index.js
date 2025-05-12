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
  nextJs,
  redux,
  tailwind,
  angular,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  threeD,
  blockchaintranding,
  chatbot,
  imageTextBot,
  missail,
  realestatebot
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "WebGL Developer",
    icon: web,
  },
  {
    title: "Web3 Developer",
    icon: mobile,
  },
  {
    title: "Scraping Developer",
    icon: backend,
  },
  {
    title: "Bot Developer",
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
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextJs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Angular",
    icon: angular,
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
    name: "Java",
    icon: java,
  },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Blockchain developer",
    company_name: "Sonex",
    // icon: sonex,
    iconBg: "#E6DEDD",
    date: "Nov 2022 - Present",
    points: [
      "Completed many Taken lunch platform and NFT game perfectly in a short time.",
    ],
  },
  {
    title: "Scraping & Bot developer",
    company_name: "Sonex",
    // icon: sonex,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developed Linkedin scraping, Freelancer autoBid and many Discord, Telegram Bot.",
    ],
  },
  {
    title: "WebGL developer",
    company_name: "Sonex",
    // icon: sonex,
    iconBg: "#E6DEDD",
    date: "Mar 2021 - Present",
    points: [
      "Created new style 3D panorama website and WebGL game.",
    ],
  },
];

const projects = [
  {
    name: "Trading Platform",
    description:
      "Discover a world of activities with friends through Zeal, an engaging platform. Create events, post updates, chat, and enjoy in-person activities hassle-free. Boost your social life with Zeal!",
    tags: [
      {
        name: "Web3",
        color: "blue-text-gradient",
      },
      {
        name: "Next.js",
        color: "green-text-gradient",
      },
      {
        name: "Node.js",
        color: "pink-text-gradient",
      },
    ],
    image: blockchaintranding,
  },
  {
    name: "3D panorama",
    tags: [
      {
        name: "WebGL",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: threeD,
  },
  {
    name: "ImageText TelegramBot",
    tags: [
      {
        name: "OpenAI",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: imageTextBot,
    
  },
  {
    name: "real time ChatBot",
    tags: [
      {
        name: "N8N",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "green-text-gradient",
      },
      {
        name: "CSS",
        color: "pink-text-gradient",
      },
    ],
    image: chatbot,
  },
  {
    name: "Model using WebGL",
    tags: [
      {
        name: "WebGL",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
      {
        name: "Baking Texture",
        color: "pink-text-gradient",
      },
    ],
    image: missail,
  },
  {
    name: "real estate Bot",
    tags: [
      {
        name: "OpenAI",
        color: "blue-text-gradient",
      },
      {
        name: "React",
        color: "green-text-gradient",
      },
      {
        name: "Node",
        color: "pink-text-gradient",
      },
    ],
    image: realestatebot,
  },
];

const personalInfo = {
  name: "Kyo",
  fullName: "Mr Kyo",
  email: "raishridhar619@gmail.com",
  role: "Software Developer",
  about: `I'm a versatile developer specializing in WebGL, Web3, web scraping, and bot development. I build immersive 3D experiences with WebGL and Three.js, bringing interactivity and visualization to the web. In the Web3 space, I develop smart contracts and decentralized applications that connect seamlessly with blockchain networks. I also create efficient web scrapers and intelligent bots for data automation and task execution. With a focus on performance and innovation, I deliver robust, scalable solutions tailored to modern digital needs.`,
};



export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
};
