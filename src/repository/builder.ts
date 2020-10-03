import { JPCCStore } from "./store";
import {
    HomePage, 
    Jumbo, 
    Teaser,
    GalleryPage,
    ArticlePage,
} from "../models/jpmcc";
import homeData from "./home.json";
import pitchData from "./pitch.json";
import timelineData from "./timeline.json";
import storyData from "./stories.json";
import galleryData from "./galleries.json";

const store = new JPCCStore();

class Builder {
    /**
     * @description Date for homepage
     */
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

    /**
     * @description Article list for a specific year.
     * Transform the home.json to an array, then
     * fitler out those not in this year, and order
     * by `order` field.
     */
    private teasersOf(year: string): Teaser[] {
        return Object.entries(storyData)
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

    /**
     * @description home page for each individual year.
     */
    galleryOf(year: string): GalleryPage {

        const galleries = new Map(Object.entries(galleryData))

        if (!galleries.has(year)) {
            return null
        }
        const gallery = galleries.get(year);
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
        const stories = new Map(Object.entries(storyData));
        if (!stories.has(id)) {
            return null;
        }
        const story = stories.get(id);
        
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

export const contentBuilder = new Builder();
