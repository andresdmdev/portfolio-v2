export interface Job {
    jobTitle: string,
    company: string,
    startDate: string,
    endDate: string,
    shortDescription: string,
    longDescription: string,
    linkedin: SocialIcon,
    webPage: SocialIcon,
    bullets: string[],
    isCurrentJob: string,
    isFirstJob: string
}

interface SocialIcon {
    logo: string,
    url: string
}