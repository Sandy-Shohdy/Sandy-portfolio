import type { Portfolio } from './types'

export const portfolioData: Portfolio = {
  person: {
    name: "Sandy Shohdy",
    email: "sandyezzat70@gmail.com",
    phone: "+46 76-057 73 36",
    location: "Stockholm, Sweden",
    title: "Frontend Developer",
    bio: "Frontend Developer with a professional background as a Software Quality Engineer. I bridge the gap between technical reliability and user centered design.",
    photo: "/src/assets/Sandy.jpeg",
    links: {
      linkedin: "https://www.linkedin.com/in/sandy-shohdy-27657a188/",
      github: "https://github.com/Sandy-Shohdy"
    }
  },

  education: [
    {
      institution: "Hyper Island",
      degree: "Frontend Development Diploma",
      startDate: "2025-08",
      endDate: "2027-04"
    },
    {
      institution: "6 October University",
      degree: "Master Degree in Mechatronics Engineering",
      startDate: "2015-10",
      endDate: "2020-06"
    }
  ],

  experience: [
    {
      company: "New Era Technology",
      position: "Software Quality Engineer",
      location: "Dubai, UAE",
      startDate: "2021-08",
      endDate: "2024-10",
      description: "Performed ETL, functional, smoke, and regression testing across multiple systems. Validated data accuracy and business rules during data transformations. Prepared QA environments, test data, and managed defect tracking to ensure stable releases.",
      achievements: [
        "Delivered three major projects with high client satisfaction",
        "Improved QA processes, reducing post-release defects",
        "Reduced external reporting issues by 80%"
      ]
    }
  ],

  projects: [
    {
      name: "Fujairah Free Zone Authority",
      description: "SharePoint 2019 Migration & ERP Integration",
      technologies: ["SharePoint", "ERP Systems"]
    
    },
    {
      name: "Fujairah Immigration Department",
      description: "Digital Services & Integration",
      technologies: ["SharePoint", "Integration"]
    },
    {
      name: "Fujairah National Hotels",
      description: "Digital Services & Integration",
      technologies: ["SharePoint", "Integration"]
    }
  ],

  technicalSkills: [
    {
      category: "Languages",
      skills: ["JavaScript", "TypeScript", "HTML", "CSS",'Storybook']
    },
    {
      category: "Frontend",
      skills: ["React", "Responsive Design", "UI/UX"]
    },
    {
      category: "Backend",
      skills: ["Node.js", "MongoDB", "SQL"]
    },
    {
      category: "Tools & Other",
      skills: ["Git/GitHub", "Postman", "Figma", "Agile/Scrum"]
    },
    {
      category: "AI",
      skills: ["Claude", "ChatGPT", "Curser","Copilot"]
    }
  ],

  softSkills: [
    { skill: "Attention to Detail" },
    { skill: "Cross-functional Teamwork" },
    { skill: "Problem-Solving & Issue Identification" },
    { skill: "Agile Collaboration" }
  ],

  interests: [
    "Music",
    "Social Media",
    "Badminton",
    "Fashion"
  ]
}