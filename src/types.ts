interface Person {
    name: string
    title: string
    bio?: string
    photo?: string
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
interface Contact {
    phone: string
     links: {
        linkedin: string
        github: string
        email: string
    }

}

interface Portfolio {
    person: Person
    projects: Project[]
    technicalSkills: TechnicalSkill[]
    softSkills: SoftSkill[]
    contact: Contact
}



export type { Person, Project, TechnicalSkill, SoftSkill, Portfolio, Contact }