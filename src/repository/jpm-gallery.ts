interface Teaser {
  id: string;
  year: string;
  date: string;
  order: number;
  title: string;
  lead: string;
}

export interface Gallery {
  id: string;
  slides: string[];
  video?: string;
}

export const galleries: Gallery[] = [
  {
    id: "2018",
    slides: [
      "images/2018/1.jpg",
      "images/2018/2.jpg",
      "images/2018/3.jpg",
      "images/2018/4.jpg",
      "images/2018/5.jpg",
      "images/2018/6.jpg",
      "images/2018/7.jpg",
      "images/2018/8.jpg",
      "images/2018/9.jpg",
      "images/2018/10.jpg",
      "images/2018/11.jpg",
      "images/2018/12.jpg",
      "images/2018/13.jpg",
      "images/2018/14.jpg",
      "images/2018/15.jpg"
  ],
  video: "https://p.bokecc.com/player?vid=8F21840683CFAF2D9C33DC5901307461&siteid=922662811F1A49E9&autoStart=false&width=100%&height=100%&playerid=3571A3BF2AEC8829&playertype=1"
  },
  {
    id: "2017",
    "slides": [
      "images/2017/2017-00.JPG",
      "images/2017/2017-01.JPG",
      "images/2017/2017-weiweizhong.jpg",
      "images/2017/2017-tiffny-daiqian.jpg",
      "images/2017/2017-title03.jpg",
      "images/2017/2017-title04.jpg",
      "images/2017/2017-title05.jpg",
      "images/2017/KING2282.JPG",
      "images/2017/KING2238.JPG",
      "images/2017/DSC_9539.JPG",
      "images/2017/DSC_9482.JPG",
      "images/2017/DSC_7554.JPG",
      "images/2017/DONG7048.JPG",
      "images/2017/DONG7040.JPG",
      "images/2017/DONG6348.JPG",
      "images/2017/DONG6345.JPG",
      "images/2017/AB3K6545.JPG",
      "images/2017/AB3K6415.JPG"
    ],
    "video": "https://p.bokecc.com/player?vid=8F21840683CFAF2D9C33DC5901307461&siteid=922662811F1A49E9&autoStart=false&width=100%&height=100%&playerid=3571A3BF2AEC8829&playertype=1"
  },
  { id: "2016",
    "slides": [
      "images/2016/pic1_manyPeople.jpeg",
      "images/2016/pic2_menChampion.jpg",
      "images/2016/pic3_womenChampion.jpg",
      "images/2016/pic4_presentationOfAward.jpg"
    ],
  },
  {
    id: "2015",
    "slides": [
      "images/2015/2015-start-02.jpg",
      "images/2015/2015-start-03.jpg",
      "images/2015/2015-start-04.jpg",
      "images/2015/2015-start-05.jpg",
      "images/2015/2015-start-06.jpg",
      "images/2015/2015-start-07.jpg",
      "images/2015/2015-start-08.jpg",
      "images/2015/2015-start-09.jpg",
      "images/2015/2015-start-10.jpg",
      "images/2015/2015-start-11.jpg",
      "images/2015/2015-on-route-01.jpg",
      "images/2015/2015-on-route-02.jpg",
      "images/2015/2015-finish-01.jpg",
      "images/2015/2015-finish-02.jpg",
      "images/2015/2015-finish-03.jpg.jpg",
      "images/2015/2015-awards-01.jpg",
      "images/2015/2015-awards-02.jpg",
      "images/2015/2015-awards-04.jpg",
      "images/2015/2015-awards-05.jpg",
      "images/2015/2015-team-01.jpg",
      "images/2015/2015-team-02.jpg",
      "images/2015/2015-team-03.jpg" 
    ],
  },
  {
    id: "2014",
    "slides": [
      "images/2014/2014-01.jpg",
      "images/2014/2014-02.jpg",
      "images/2014/2014-03.jpg",
      "images/2014/2014-04.jpg",
      "images/2014/2014-05.jpg"
    ],
    "video": "http://p.bokecc.com/player?vid=402E9E7943F29BFD9C33DC5901307461&siteid=922662811F1A49E9&autoStart=false&width=100%&height=100%&playerid=3571A3BF2AEC8829&playertype=1"
  },
  {
    id: "2013",
    "slides": [
      "images/2013/2013-01.jpg",
      "images/2013/2013-02.jpg",
      "images/2013/2013-03.jpg",
      "images/2013/2013-04.jpg",
      "images/2013/2013-05.jpg"
    ],
    "video": "http://p.bokecc.com/player?vid=48BA61D358F39D959C33DC5901307461&siteid=922662811F1A49E9&autoStart=false&width=100%&height=100%&playerid=3571A3BF2AEC8829&playertype=1"
  },
  {
    id: "2012",
    "slides": [
      "images/2012/2012-01.jpg",
      "images/2012/2012-02.jpg",
      "images/2012/2012-03.jpg",
      "images/2012/2012-04.jpg"
    ],
    "video": "http://p.bokecc.com/player?vid=CAEC70E21B1C655A9C33DC5901307461&siteid=922662811F1A49E9&autoStart=false&width=100%&height=100%&playerid=3571A3BF2AEC8829&playertype=1"
  },
  {
    id: "2011",
    "slides": [
      "images/2011/2011-start-01.jpg",
      "images/2011/2011-start-02.jpg",
      "images/2011/2011-start-03.jpg",
      "images/2011/2011-start-04.jpg",
      "images/2011/2011-onroute-01.jpg",
      "images/2011/2011-finish-01.jpg",
      "images/2011/2011-finish-02.jpg"
    ],
    "video": "http://p.bokecc.com/player?vid=A3E97ED76C7F25D49C33DC5901307461&siteid=922662811F1A49E9&autoStart=false&width=100%&height=100%&playerid=3571A3BF2AEC8829&playertype=1"
  }
]

export function getGallery(year: string): Gallery | undefined {
  return galleries.find(g => g.id === year)
}
