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
  django,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  python,
  visual,
  linux,
  threejs,
  twitter,
  helpunique,
  langtextdetection,
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
    title: "React Js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Python Developer",
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
    name: "Django Web App",
    icon: django,
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
    name: "Linux",
    icon: linux,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "python",
    icon: python,
  },
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "React Javascript",
    icon: reactjs,
    iconBg: "#383E56",
    date: "",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "React Native",
    icon: visual,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "React, Django",
    icon: django,
    iconBg: "#383E56",
    date: "",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "full stack",
    icon: threejs,
    iconBg: "#E6DEDD",
    date: "",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
 
];

const projects = [
  {
    name: "Language Text Detection in an Image with Python",
    description:
      "Using the text we have to create a model which will be able to predict languages detected from an image given. This is a solution for many artificial intelligence applications and computational linguists. These kind of prediction systems are widely used in electronic devices such as laptops for language detection from a given or parsed image. This system also helps in identifying multilingual text on an image too with given bytes number and offset.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "tensorflow",
        color: "green-text-gradient",
      },
      {
        name: "linux",
        color: "blue-text-gradient",
      },
      {
        name: "pandas",
        color: "green-text-gradient",
      },
      {
        name: "json",
        color: "pink-text-gradient",
      },
    ],
    image: langtextdetection,
    source_code_link: "https://github.com/martins0023/",
  },
  {
    name: "Twitter Clone with MongoDb and Prisma",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDb",
        color: "green-text-gradient",
      },
      {
        name: "Prisma",
        color: "pink-text-gradient",
      },
    ],
    image: twitter,
    source_code_link: "https://github.com/",
  },
  {
    name: "Variation",
    description:
      "A full web app with fully designed UI/UX proposed for a new way to use search engine more efficiently and accurately. This Variation web app allows users to sign up using google auth, afterwards users can share their ideas, solutions or ways of improving an activity, event, DIY or any related field of study tips and so on.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "googleauth",
        color: "green-text-gradient",
      },
      {
        name: "MongoDb",
        color: "pink-text-gradient",
      },
      {
        name: "Figma",
        color: "blue-text-gradient",
      },
    ],
    image: helpunique,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
