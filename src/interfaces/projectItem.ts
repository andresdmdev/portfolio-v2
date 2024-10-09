export interface ProjectItem {
    title: string,
    description: string,
    images: Image[],
    technologies: Technology[],
    links: Link[]
}

export interface Technology {
    technology: string,
    logo: string,
    backgroundColor: string
}

export interface Image {
    image: string,
    altText: string
}

export interface Link {
    name: string,
    url: string,
    icon: string
}