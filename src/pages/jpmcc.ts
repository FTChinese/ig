import { Link } from "../widget/link";
import { Layout, LayoutBuilder } from "./layout-page";
import { ShareBuilder, ShareLink } from "./social-share";
import { jpmMap } from "../config/sitemap";
import { Gallery, getGallery } from "../repository/jpm-gallery";
import { getTeasers, Teaser, Story, findTeaser } from "../repository/jmp-teaser";

interface PageMeta {
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

interface JPCCShared {
  pitch: Pitch;
  timeline: Link[];
}

type JPCCHomePage = Layout & JPCCShared & {
  meta: PageMeta;
  socialShare: ShareLink[];
}

function buildSharedBlock(): JPCCShared {
  return {
    pitch: {
      link: "https://www.jpmorganchasecc.com/city/shanghai",
      imageUrl: "images/2019-pitch.jpg",
      video: "https://p.bokecc.com/player?vid=3E8622E4079C05549C33DC5901307461&amp;siteid=922662811F1A49E9&amp;autoStart=false&amp;width=100%&amp;height=100%&amp;playerid=3571A3BF2AEC8829&amp;playertype=1",
    },
    timeline: [2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011].map(year => {
      return {
        text: `${year}`,
        href: `${jpmMap.gallery}/${year}`,
        imgSrc: `${jpmMap.imgPrefix}/images/thumbs/thumb-${year}.jpg`
      }
    }),
  }
}

export function buildHomePage(href: string): JPCCHomePage {
  
  const title = "摩根大通企业竞跑赛2019";

  const metaDesc = "摩根大通携手 @FT中文网 开启2019年 #摩根大通企业竞跑赛#， 共同倡导Work & Life Balance，欢迎分享与跑步有关的个人经历，让更多朋友了解跑步的意义，加入到跑步的行列!";

  return {
    ...LayoutBuilder.jpmcc(title),
    ...buildSharedBlock(),
    meta: {
      description: metaDesc,
      ogImageUrl: ""
    },
    socialShare: new ShareBuilder({
      title: title,
      link: href,
      summary: metaDesc,
    }).build(),
  };
}

type GalleryPage = Layout & JPCCShared & Gallery & {
  teasers: Teaser[]
}

export function buildGalleryPage(year: string): GalleryPage | undefined {
  const gallery = getGallery(year);
  if (!gallery) {
    return undefined;
  }

  const title = `摩根大通企业竞跑赛${year}`;

  return {
    ...LayoutBuilder.jpmcc(title),
    ...buildSharedBlock(),
    ...gallery,
    teasers: getTeasers(year)
  }
}

type StoryPage = Layout & JPCCShared & {
  teaser: Teaser
}

export function buildStoryPage(id: string): StoryPage | undefined {
  const teaser = findTeaser(id);
  if (!teaser) {
    return undefined;
  }

  return {
    ...LayoutBuilder.jpmcc(teaser.title),
    ...buildSharedBlock(),
    teaser,
  }
}
