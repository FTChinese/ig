export interface Meta {
    title: string;
    description: string;
    ogImageUrl: string;
}

export interface Pitch {
    link: string;
    imageUrl: string;
    video: string;
}

export interface TimelineCard {
    title: string;
    year: number;
    imageUrl: string;
}

export interface CommonBlock {
    meta: Meta;
    pitch: Pitch;
    timeline: TimelineCard[];
}

export interface Jumbo {
    id: string;
    title: string;
    lead: string;
    body: string;
}

export interface HomePage extends CommonBlock {
    jumbo: Jumbo;
}

export interface Teaser {
    id: string;
    year: string;
    date: string;
    order: number;
    title: string;
    lead: string;
}

export interface Video {
    src: string;
}

export interface Gallery {
    meta: Meta;
    slides: string[];
    video?: Video;    
}

export interface GalleryPage extends CommonBlock {
    id: string;
    slides: string[];
    video: Video;
    teasers: Teaser[];
}

export interface Story extends Teaser {
    body: string;
}

export interface ArticlePage extends CommonBlock {
    story: Story;
}
