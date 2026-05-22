import type { Portfolio } from './types'

export const portfolioData: Portfolio = {
  person: {
    name: "Sandy Shohdy",
    title: "Frontend Developer",
    bio: "Hi! I'm Sandy, a Frontend Developer based in Stockholm with a passion for building clean, accessible, and intuitive web applications. With a background in Software Quality Engineering, I combine technical excellence with user-centered design thinking to create seamless digital experiences. I'm committed to writing maintainable code, ensuring accessibility for everyone, and delivering high-performance solutions that truly matter. When I'm not coding, you'll find me exploring Stockholm's creative scene, staying updated with design trends, or enjoying outdoor activities. Let's create something amazing together!",
    photo: "/Sandy1.jpeg"
  },

  projects: [
    {
      name: "Next-Stop",
      description: "A travel planning application that allows users to create personalized itineraries by adding new destinations, editing existing plans, and deleting locations as needed. All trip data is stored persistently, enabling users to manage and update their travel plans seamlessly across sessions.",
      technologies: ["React", "JavaScript", "API", "node.js", "React Router", "Vite"],
      githubLink: "https://github.com/Sandy-Shohdy/Next-Stop",
      liveLink: "https://next-stop-ashy.vercel.app/",
      thumbnail: "/NextStop.jpeg"
    },
    {
      name: "Popcorn-Pulse",
      description: "A movie discovery platform built to explore the differences between Client-Side Rendering (CSR) and Server-Side Rendering (SSR). Users can browse and search for movies through an external API, while comparing how each rendering approach impacts performance, SEO, and user experience.",
      technologies: ["HTML5", "CSS", "JavaScript"],
      githubLink: "https://github.com/Sandy-Shohdy/Popcorn-Pulse",
      liveLink: "https://sandy-shohdy.github.io/Popcorn-Pulse/index.html",
      thumbnail: "/Popcorn-Pulse.jpeg"
    },
    {
      name: "Hej Fika",
      description: "A cozy café website designed to provide users with a warm and inviting online experience. The site features soft colors, charming typography, and delightful imagery that capture the atmosphere of a welcoming café. Users can explore the menu, learn the café's story, and find location and opening hours information. Built with a strong focus on user experience, the website is fully responsive and mobile-friendly, ensuring seamless navigation and accessibility across all devices.",
      technologies: ["HTML5", "CSS", "JavaScript", "Figma"],
      githubLink: "https://github.com/Sandy-Shohdy/Coffee-shop",
      liveLink: "https://sandy-shohdy.github.io/Coffee-shop/index.html",
      thumbnail: "/HejFika.svg"
    },
    {
      name: "ZoomZy",
      description: "A modern and responsive landing page that displays photo collections fetched from an API. Implemented user authentication with login functionality and designed a clean, mobile-friendly interface optimized for all screen sizes.",
      technologies: ["HTML5", "CSS", "JavaScript"],
      githubLink: "https://github.com/Sandy-Shohdy/ZoomZy-1",
      liveLink: "https://sandy-shohdy.github.io/ZoomZy-1/login.html",
      thumbnail: "/ZoomZy.jpeg"
    },
    {
      name: "One Basket",
      description: "A modern and responsive landing page that displays photo collections fetched from an API. Implemented user authentication with login functionality and designed a clean, mobile-friendly interface optimized for all screen sizes.",
      technologies: ["React", "TypeScript", "CSS Tailwind", "Next.js", "Vite", "PWA"],
      githubLink: "non",
      liveLink: "on deployment",
      thumbnail: "/OneBasket.svg"
    },
    {
      name: "Sandy's Portfolio",
      description: "A modern portfolio website showcasing my frontend development expertise. Built with React and TypeScript, it features a clean, responsive design with sticky navigation, dark/light mode support, interactive project modals, and smooth animations. Demonstrates best practices in component architecture, accessibility, and user experience design.",
      technologies: ["React", "TypeScript", "CSS", "Vite"],
      githubLink: "https://github.com/Sandy-Shohdy/Sandy-portfolio",
      liveLink: "https://sandy-portfolio-rho.vercel.app/",
      thumbnail: "/Sandy's Portfolio.jpeg"
    }
  ],

  technicalSkills: [
   
    {
      category: "Frontend",
      skills: ["React","JavaScript", "TypeScript", "HTML5", "CSS","CSS Tailwind","Storybook", "UI/UX","Responsive Design"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "MongoDB", "SQL", "Express.js" , "Next.js"]
    },
    {
      category: "Tools & Other",
      skills: ["Git/GitHub", "Postman", "Figma","Vite","Claude", "ChatGPT", "Cursor", "Copilot"]
    }
  ],

  softSkills: [
    { skill: "Attention to Detail" },
    { skill: "Cross-functional Teamwork" },
    { skill: "Problem-Solving & Issue Identification" },
    { skill: "Agile Collaboration" }
  ],

  contact: {
    phone: "+46 76-057 73 36",
    links: {
      linkedin: "https://www.linkedin.com/in/sandy-shohdy-27657a188/",
      github: "https://github.com/Sandy-Shohdy",
      email: "sandyezzat70@gmail.com"
    }
  }
}
