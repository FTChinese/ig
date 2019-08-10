import { Store } from "./store";
import {
    Meta,
    HomePage, 
    Jumbo, 
    Teaser,
    GalleryPage,
    Video,
    ArticlePage,
} from "./def";
import homeData from "./home.json";
import pitchData from "./pitch.json";
import timelineData from "./timeline.json";
import storyData from "./stories.json";
import galleryData from "./galleries.json";

const store = new Store();

interface Galleries {
    [index: string]: {
        meta: Meta;
        slides: string[],
        video?: Video;
    };
}



interface Stories {
    [index: string]: {
        year: string;
        date: string;
        order: number;
        title: string;
        lead: string;
        fileName: string;
    }
}

const stories = storyData as Stories;
const galleries = galleryData as Galleries;

class Builder {
    async homePage(): Promise<HomePage> {
        const content = await store.loadHomeContent();

        const jumbo = homeData.jumbo as Jumbo;
        jumbo.body = content;

        return {
            meta: homeData.meta,
            pitch: pitchData,
            timeline: timelineData,
            jumbo: jumbo,
        }
    }

    private teasersOf(year: string): Teaser[] {
        return Object.entries(stories)
            .filter(([key, value]) => {
                return year == value.year;
            })
            .map(([key, value]) => {
                return {
                    id: key,
                    year: value.year,
                    date: value.year,
                    order: value.order,
                    title: value.title,
                    lead: value.lead
                };
            })
            .sort((a, b) => {
                return a.order - b.order;
            })
    }

    galleryOf(year: string): GalleryPage {
        const gallery = galleries[year];
        if (!gallery) {
            return null
        }
        
        return {
            meta: gallery.meta,
            pitch: pitchData,
            timeline: timelineData,
            id: year,
            slides: gallery.slides,
            video: gallery.video,
            teasers: this.teasersOf(year),
        }
    }

    async articleOf(id: string): Promise<ArticlePage | null> {
        const story = stories[id];
        if (!story) {
            return null;
        }
        if (!story.fileName) {
            return null;
        }

        const content = await store.loadStory(story.fileName);

        return {
            meta: {
                title: story.title,
                description: story.lead,
                ogImageUrl: "",
            },
            pitch: pitchData,
            timeline: timelineData,
            story: {
                id: id,
                year: story.year,
                date: story.date,
                order: story.order,
                title: story.title,
                lead: story.lead,
                body: content,
            },
        }
    }
}
