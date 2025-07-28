import {
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  docker,
  petsoft,
  rmtdev,
  wordanalytics,
  qed,
  sandbox,
  threejs,
  vue,
  linux,
  aws,
  nextjs,
  nuxtjs,
  marius,
  ioana,
  aldana,
  devops,
  brush,
  server,
} from "../../public/static";

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
    title: "Frontend Developer",
    icon: brush,
  },
  {
    title: "Backend Developer",
    icon: server,
  },
  {
    title: "DevOps Engineer",
    icon: devops,
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
    name: "Vue JS",
    icon: vue,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Nuxt JS",
    icon: nuxtjs,
  },
  {
    name: "Linux",
    icon: linux,
  },
  {
    name: "Aws",
    icon: aws,
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
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "QED",
    icon: qed,
    iconBg: "#383E56",
    date: "December 2022 - April 2024",
    points: [
      "Developed immersive dApps using Vue.js for various NFT collections, significantly enhancing user engagement.",
      "Implemented performance optimization techniques including lazy loading, image compression, and code splitting to achieve sub-second load times.",
      "Built responsive UIs that work flawlessly across all devices and browsers, using modern CSS and thorough testing.",
      "Elevated code quality through collaborative reviews.",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "The Sandbox Game",
    icon: sandbox,
    iconBg: "#E6DEDD",
    date: "April 2024 - 2025",
    points: [
      "Joined forces with frontend developers to create The Sandbox's core design system, reducing UI development time through reusable TypeScript components",
      "Architected reusable UI components following atomic design principles, improving development efficiency.",
      "Pioneered innovative solutions that resolved critical system bugs and enhanced cross-platform consistency.",
      "Established comprehensive documentation and contribution guidelines for design system adoption.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I worked with Denis and was his manager. He is a quick learner and always delivers good work on time. During our time working together, Denis was responsible for creating, supporting, and maintaining high-quality dApps. These apps were used to mint over 100,000 NFTs. He is easy to work with and very reliable. Any team would be lucky to have him.I strongly recommend Denis.",
    name: "Marius Bălaj",
    designation: "Co-Founder",
    company: "QED",
    image: marius,
  },
  {
    testimonial:
      "I had the pleasure of working with Denis at The Sandbox, where had a Front-End Developer role. As Producer of the Avatar Collection team, I saw firsthand how quickly Denis was able to learn, adapt, and contribute in a ever-evolving environment.He consistently delivered high-quality work, communicated clearly, and brought a thoughtful, collaborative approach to every challenge. His mix of technical skill and reliability made him an invaluable part of the team.I’d gladly recommend Denis to any team looking for a capable, fast-learning, and dependable developer.",
    name: "Aldana Bayante",
    designation: "Senior Project Manager",
    company: "The Sandbox Game",
    image: aldana,
  },
  {
    testimonial:
      "I had the pleasure of managing Denis for nearly three years at The Sandbox, and I can't speak highly enough of him. Denis worked on delivering the highly popular Sandbox avatar collections, from Paris Hilton to Hell's Kitchen and Jurassic World. He's deeply passionate about his work, constantly looking for ways to improve, and picks up new skills really fast. I saw him grow so much during his time in this role.Denis is also a pleasure to work with — collaborative, driven, and dependable. Any team would be lucky to have him.",
    name: "Ioana Verebi",
    designation: "Tech Director",
    company: "The Sandbox Game",
    image: ioana,
  },
];

const projects = [
  {
    name: "PetSoft",
    description:
      "PetSoft is a modern web application designed to help pet daycare businesses manage their operations efficiently. Built with cutting-edge technologies, it provides a seamless experience for tracking and managing pets under care.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "react",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "text-purple-500",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "zod",
        color: "text-blue-700",
      },
    ],
    image: petsoft,
    source_code_link: "https://github.com/homoki-denis/petsoft",
  },
  {
    name: "Rmtdev",
    description:
      "A modern React application built with TypeScript, Vite, and a carefully selected set of tools for optimal development experience. It features a responsive design, efficient state management, and a clean, user-friendly interface.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "text-purple-500",
      },
      {
        name: "vite",
        color: "text-lime-600",
      },
    ],
    image: rmtdev,
    source_code_link: "https://github.com/homoki-denis/rmtdev",
  },
  {
    name: "Word analytics",
    description:
      "A modern, minimal React app to analyze word and character counts in your text, with live feedback for social media character limits (Instagram, Facebook). It features a clean interface, responsive design, and efficient performance.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "text-amber-300",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: wordanalytics,
    source_code_link: "https://github.com/homoki-denis/word-analytics",
  },
];

const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  heroHeadText:
    "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
  heroSubText:
    "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  sectionHeadText:
    "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
  sectionSubText:
    "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
  loader: "text-md text-[#f1f1f1] font-extrabold mt-8",
};

export { services, technologies, experiences, testimonials, projects, styles };
