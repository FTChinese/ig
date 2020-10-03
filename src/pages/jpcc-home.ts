import { jpccStore } from "../repository/store";
import { Image } from "../widget/link";

interface PageMeta {
  title: string;
  description: string;
  ogImageUrl: string;
}

interface JPCCHomePage {
  meta: PageMeta;
  bannerImage: Image;
  bannerVideo: string;
  jumbo: {
    id: string;
    title: string;
    lead: string;
    body: string;
  }
}

export async function buildJPCCHomePage(): Promise<JPCCHomePage> {
  const article = await jpccStore.loadHomeContent();

  return {
    meta: {
      "title": "摩根大通企业竞跑赛2019",
      "description": "摩根大通携手 @FT中文网 开启2019年 #摩根大通企业竞跑赛#， 共同倡导Work & Life Balance，欢迎分享与跑步有关的个人经历，让更多朋友了解跑步的意义，加入到跑步的行列!",
      "ogImageUrl": ""
    },
    bannerImage: {
      src: "images/2019-pitch.jpg",
      href: "https://www.jpmorganchasecc.com/city/shanghai"
    },
    bannerVideo: "https://p.bokecc.com/player?vid=3E8622E4079C05549C33DC5901307461&amp;siteid=922662811F1A49E9&amp;autoStart=false&amp;width=100%&amp;height=100%&amp;playerid=3571A3BF2AEC8829&amp;playertype=1",
    jumbo: {
      id: "df5744d7d4a62ca04fabf569",
      title: "2019摩根大通企业竞跑赛将移师上海国际音乐村",
      lead: "赛事将于11月14日星期四举行，企业报名现已开放",
      body: article,
    }
  }
}
