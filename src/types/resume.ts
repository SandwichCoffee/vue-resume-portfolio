export type SkillCategory = {
    id: number
    title: string
    description: string
    skills: string[]
}

export type CoreStrength = {
    id: number
    title: string
    description: string
}

export type ExperienceDetail = {
    id: number
    project: string
    description: string
    tasks: string[]
}

export type Experience = {
    id: number
    company: string
    period: string
    role: string
    details: ExperienceDetail[]
}

export type Project = {
    id: number
    title: string
    summary: string
    description: string
    period: string
    role: string
    techStacks: string[]
    features: string[]
    learned: string
    githubUrl?: string
    deployUrl?: string
}

export type ProfileLink = {
    id: number
    label: string
    url: string
}

export type Profile = {
    name: string
    title: string
    headline: string
    description: string
    email: string
    phone?: string
    githubUrl: string
    portfolioUrl?: string
    links: ProfileLink[]
}