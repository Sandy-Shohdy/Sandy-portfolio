interface Person {
    name: string
    email: string
    phone: string
    location: string
    title: string
    bio?: string
        photo?: string 
    links: {
        linkedin: string
        github: string
    }
}

interface Experience {
    company: string
    position: string
    location: string
    startDate: string
    endDate: string
    description: string
    achievements: string[]
}

interface Education {
    institution: string
    degree: string
    startDate: string
    endDate: string
}

interface Project {
    name: string
    description: string
    technologies: string[]
    githubLink?: string
    liveLink?: string
    thumbnail?: string
}

interface TechnicalSkill {
    category: string  
    skills: string[]
}

interface SoftSkill {
    skill: string
    description?: string
}

interface Portfolio {
    person: Person
    education: Education[]
    experience: Experience[]
    projects: Project[]
    technicalSkills: TechnicalSkill[]
    softSkills: SoftSkill[]
    interests: string[]
}

export type { Person, Experience, Education, Project, TechnicalSkill, SoftSkill, Portfolio }