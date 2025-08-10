export interface ProjectItem {
    title: string,
    urlName: string,
    description: string,
    className: string,
    icon: Icon,
    technologies: Technology[],
    images: Image[],
    linkedin: Link,
    github: Link,
    website: Link,
}

export interface Icon {
    name: string;
    src: string;
}

export interface Link {
    name: string;
    url: string;
    icon: string;
}

export interface Image {
    image: string;
    altText: string;
}

export interface Technology {
    technology: string;
    backgroundColor: string;
    logo: string;
}