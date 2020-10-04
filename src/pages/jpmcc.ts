import { Link } from "../widget/link";
import { jpccStore } from "../repository/store";
import { Layout, LayoutBuilder } from "./layout-page";
import { ShareBuilder, ShareLink } from "./social-share";
import { jpmMap } from "../config/sitemap";

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
  jumbo: {
    id: string;
    title: string;
    lead: string;
    body: string;
  }
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

export async function buildHomePage(href: string): Promise<JPCCHomePage> {
  const article = await jpccStore.loadHomeContent();
  
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
    jumbo: {
      id: "df5744d7d4a62ca04fabf569",
      title: "2019摩根大通企业竞跑赛将移师上海国际音乐村",
      lead: "赛事将于11月14日星期四举行，企业报名现已开放",
      body: article,
    },
  };
}
