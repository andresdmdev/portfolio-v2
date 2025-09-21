export interface ProjectItem {
    title: string,
    urlName: string,
    descriptionShort: string,
    descriptionLong: string,
    className: string,
    icon: Icon,
    technologies: Technology[],
    images: Image[],
    linkedin: Link,
    github: Link,
    website: Link,
    tag: string,
    backPageHref: string,
    paragraphs: Paragraph[]
}

export interface Paragraph {
    title: string;
    description: string;
    diagram: Diagram | null;
    gif: string | null;
    img: string | null;
}

export interface Diagram {
    name: string;
    src: string;
    alt: string;
    position: string;
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