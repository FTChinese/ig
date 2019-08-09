interface Meta {
    title: string;
    description: string;
    ogImageUrl: string;
}

interface Pitch {
    link: string;
    imageUrl: string;
    video: string;
}

interface TimelineCard {
    title: string;
    year: string;
    imageUrl: string;
}

interface CommonBlock {
    meta: Meta;
    pitch: Pitch;
    timeline: TimelineCard[];
}

interface Jumbo {
    title: string;
    lead: string;
    body: string;
}

interface HomePage extends CommonBlock {
    jumbo: Jumbo;
}

interface Teaser {
    id: string;
    year: string;
    date: string;
    order: number;
    title: string;
    lead: string;
    fileName: string;
}

interface Video {
    src: string;
}

interface GalleryPage extends CommonBlock {
    id: string;
    slides: string[];
    video: Video;
    teasers: Teaser[];
}

interface Story extends Teaser {
    content: string;
}

interface ArticlePage extends CommonBlock {
    story: Story;
}
