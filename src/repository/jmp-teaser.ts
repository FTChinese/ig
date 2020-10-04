import { jpmMap } from "../config/sitemap";

export interface Teaser {
  id: string;
  year: string;
  date: string;
  order: number;
  title: string;
  lead: string;
  fileName: string;
  href?: string;
}

const teasers: Teaser[] = [
  {
    id: "df5744d7d4a62ca04fabf569",
    "year": "2019",
    "date": "2019年8月7日",
    "order": 1,
    "title": "摩根大通企业竞跑赛将移师上海国际音乐村",
    "lead": "近年来，这项一年一度的5.6公里赛事每年都吸引来自200多家企业的5000多名选手参加。大家暂时放下手头的工作，与同事们一道在奔跑和快走中享受运动的欢乐、健康和职场友谊。",
    "fileName": "2019-01.md"
  },
  {
    id: "41932aae7beb578daa4a4933",
    "year": "2018",
    "date": "2018年7月31日",
    "order": 1,
    "title": "摩根大通企业竞跑赛10月18日重磅回归",
    "lead": "备受瞩目的第八届摩根大通企业竞跑赛上海赛事将于2018年10月18日鸣锣开赛。这项全球知名的企业团队竞技赛事，由5.6公里路跑和赛后联谊活动组成，预计本届竞跑赛将有望实现满额报名，吸引约8,000名参赛选手齐聚上海东方体育中心。",
    "fileName": "2018-01.md"
  }, 
  {
    id: "62d809e707ccbecda6c82ca7",
    "year": "2017",
    "date": "2017年9月13日",
    "order": 1,
    "title": "摩根大通诚邀企业界参与第七届摩根大通企业竞跑赛",
    "lead": "第七届摩根大通企业竞跑赛上海赛事（5.6公里）将于11月7日（星期二）下午3:30时在上海东方体育中心鸣锣开赛。",
    "fileName": "2017-01.md"
  },
  {
    id: "7dccda3321fc82aaa8b24d21",
    "year": "2017",
    "date": "2017年11月7日",
    "order": 2,
    "title": "摩根大通企业竞跑赛上海赛事吸引逾6,000名选手参加",
    "lead": "第七届摩根大通企业竞跑赛上海赛事于今天下午举行。来自近190家企业的6,000多名选手报名参赛，大家放下手头的工作，齐聚上海东方体育中心，携手参加一年一度的5.6公里赛事。上海赛事是2017年摩根大通企业竞跑赛系列赛事的最后一站，这项赛事迄今已连续举办41届，一直是全球最大规模的企业团队竞技赛事，足迹遍布五大洲、七个国家的13座城市。",
    "fileName": "2017-02.md"
  },

  {
    id: "f16fd31b40c7995583475031",
    "year": "2016",
    "date": "2016年8月4日",
    "order": 1,
    "title": "2016第六届摩根大通企业竞跑赛上海站将于10月20日鸣锣开赛",
    "lead": "摩根大通企业竞跑赛将于10月20日重新迎来上海站的比赛。今年的上海赛事仅面向受邀企业开放，来自摩根大通客户企业的员工以及摩根大通的员工将齐聚上海，在这场一年一度的趣味、健康和职场友谊并重的跑步项目中展开角逐",
    "fileName": "2016-01.md"
  },
  {
    id: "b52572b5cacb5a5af937bc17",
    "year": "2016",
    "date": "2016年10月13日",
    "order": 2,
    "title": "摩根大通企业竞跑赛下周再度开跑",
    "lead": "备受瞩目的第六届摩根大通企业竞跑赛上海站的比赛将于下周四（10月20日下午4点）在上海东方体育中心再度鸣锣开赛。今年有来自140家企业的员工报名参赛，大家将放下手头工作，与同事一起，通过团队竞跑的方式提升职场友谊、倡导健康生活方式",
    "fileName": "2016-02.md"
  },
  {
    id: "98c464c5f887b5860afabd3e",
    "year": "2016",
    "date": "2016年10月20日",
    "order": 3,
    "title": "第六届摩根大通企业竞跑赛今日开赛",
    "lead": "第六届摩根大通企业竞跑赛上海站的比赛今天下午于上海东方体育中心成功举行，来自140家企业的员工暂时放下手头繁忙的工作，与同事及业界同仁一起参加了这场赛程为5.6公里的年度赛事。赛事于今天下午四点正式开始,共计吸引了来自上海商界的数千名选手参与其中,共享增进友谊、提升健康的午后及晚间时光",
    "fileName": "2016-03.md"
  },
  
  {
    id: "0a73139c09c9c8c0822baf74",
    "year": "2015",
    "date": "2015年6月1日",
    "order": 1,
    "title": "上海最受欢迎的业余赛事将于9月17日在上海东方体育中心拉开帷幕",
    "lead": "第五届摩根大通企业竞跑赛将于2015年9月17日在上海拉开帷幕。作为一项全球知名的企业界体育赛事和社交活动，预期本届摩根大通企业竞跑赛将实现满额报名，吸引10,000名参赛选手齐聚上海东方体育中心。",
    "fileName": "2015-01.md"
  },
  {
    id: "c3a4e9e3102caa7aca1d3eda",
    "year": "2015",
    "date": "",
    "order": 2,
    "title": "今天你跑了吗？",
    "lead": "9月17日，第五届摩根大通企业竞跑赛将重返上海。这项5.6公里的团队赛事最早源于1977年在美国纽约举办的一场路跑活动，当年只有200人参加。如今，它已发展成为世界上规模最大、举办时间最长的企业竞技及社交活动，足迹遍及五大洲七个国家的十三个城市。",
    "fileName": "2015-02.md"
  },
  {
    id: "35c6beda0fb40dd4a4677772",
    "year": "2015",
    "date": "",
    "order": 3,
    "title": "天生是“跑男”",
    "lead": "1982年秋天，开始职业作家生涯的村上春树迷上了长跑，从美国夏威夷考艾岛跑到马萨诸塞州剑桥市，在日本村上市参加铁人三项赛再踏上希腊马拉松长跑古道。这位日本著名小说家认为，写小说很像跑全程马拉松。在今年再版的《当我谈跑步时，我谈些什么》一书中，他又一次以诙谐幽默的口吻，将那些在跑步中萌生的微小又稍纵即逝的想法一一捕捉。",
    "fileName": "2015-03.md"
  },
  {
    id: "1058d01c2953e53cd03afcf6",
    "year": "2015",
    "date": "",
    "order": 4,
    "title": "企业跑步旗舰赛",
    "lead": "十月的上海，气候温凉，来自240家公司的8,200余名参赛选手今晚齐聚徐汇滨江，竞逐第四届摩根大通企业竞跑赛上海赛事。三年来，上海已经成为这项跨五大洲、七个国家、十三座城市，倡导企业员工健康与职场友谊的企业赛事的重要一站。这是上海举办的第四届，也是全球的第38届系列赛事之一。",
    "fileName": "2015-04.md"
  },
  {
    id: "161c1b0b0b65c7500f2e8251",
    "year": "2014",
    "date": "2014年10月25日",
    "order": 1,
    "title": "一路奔跑，一路欢乐",
    "lead": "对许多人来说，跑步并不是一个容易坚持下来的习惯。倪海岚说自己也是在工作之后，为了缓解压力、放松身心，才开始有了主动锻炼的意识。现在她每两三天跑一次，生活因为跑步而变得更加丰富多彩。",
    "fileName": "2014-01.md"
  },
  {
    id: "f3be783c3ff92a86e7907be2",
    "year": "2014",
    "date": "2014-09-04",
    "order": 2,
    "title": "跑道上的精彩人生—— 一位跑者的感悟",
    "lead": "有两届女子组桂冠都被一个叫丁卉的姑娘摘得。这位来自普华永道的女白领只有25岁，但已坚持长跑七年。像很多热衷于这项运动的跑者一样，丁卉每年都参加大大小小的长跑比赛，不断刷新着自己的成绩。今年上半年，她又突破了自己的三项纪录：10公里跑用时43分钟，半程马拉松1小时32分，全程马拉松3小时21分。",
    "fileName": "2014-02.md"
  },
  {
    id: "c5acecbff17330dd30ad4eeb",
    "year": "2014",
    "date": "2014-10-24",
    "order": 3,
    "title": "5.6公里赛程引领白领新时尚 摩根大通企业竟跑赛再掀企业健身热潮",
    "lead": "这项全程5.6 公里的团队路跑赛最早源于1977年在美国纽约举办的一场简单的路跑赛事活动，当年只有200人参加。而如今它早已发展成为世界上规模最大、举办时间最长的公司竞技及社交活动，足迹遍及五大洲七个国家的十三个城市。",
    "fileName": "2014-03.md"
  },
  {
    id: "73e6dfa69c71116fd55880d9",
    "year": "2014",
    "date": "2014年7月1日",
    "order": 4,
    "title": "2014年摩根大通企业竞跑赛上海赛事10月23日举办",
    "lead": "作为一项全球知名的企业界赛事，第四届摩根大通企业竞跑赛将于2014年10月23日在上海徐汇滨江举行，预计参赛选手将达8,500名。",
    "fileName": "2014-04.md"
  },
  {
    id: "4ead07234b0d06585c410446",
    "year": "2013",
    "date": "2013年10月24日",
    "order": 1,
    "title": "中国白领爱上跑步——摩根大通企业竞跑赛所感",
    "lead": "10月24日下午，在第三次参加了摩根大通企业竞跑赛并以23分35秒的成绩跑完5.6公里的全程之后，我在微信朋友圈分享了“秋高气爽跑完全程”的信息，并附上了朋友帮忙拍摄的我的跑步照片。",
    "fileName": "2013-01.md"
  },
  {
    id: "0a20cc469d1692155a6b1c56",
    "year": "2013",
    "date": "2013年11月30日",
    "order": 2,
    "title": "摩根大通企业竞跑赛：职场人的竞跑嘉年华",
    "lead": "摩根大通举办的企业竞跑赛已经有37年的历史，2011年落地中国上海。越来越多的企业开始鼓励员工参加这项白领精英圈内的竞跑。除去竞技，它更像一个推动运动文化、增强团队意识和发扬慈善精神的嘉年华。",
    "fileName": "2013-02.md"
  },
  {
    id: "eba7dbb7b4d189c3236a3f5e",
    "year": "2013",
    "date": "2013年10月24日",
    "order": 3,
    "title": "7274名选手竞逐5.6公里赛程",
    "lead": "上海已经成为这项跨五大洲、七个国家、十三座城市，倡导企业员工健康与友谊的企业赛事的重要一站。摩根大通企业竞跑赛致力于在上海传递健康生活、公平竞争、团队精神以及慈善公益的理念。",
    "fileName": "2013-03.md"
  },
  {
    id: "7335d9be85c83d7c6936af87",
    "year": "2013",
    "date": "2013年10月24日",
    "order": 4,
    "title": "参与摩根大通企业竞跑赛，收获无限喜悦跑出精彩未来",
    "lead": "为何这项赛事仅在上海举办了三年便受到各大企业的追捧？其主要原因是全程5.6公里的竞跑赛向每一位参赛者敞开大门；无论你是顶尖跑者还是重在参与的慢跑者抑或是刚刚启动锻炼计划的快走者 ，你都可以加入到这项以强身健体为目标的赛事中。同时，赛事对于各大企业来说也是工作之余一次难得的大聚会。",
    "fileName": "2013-04.md"
  },
  {
    id: "c1e37059812c083fbd44c230",
    "year": "2012",
    "date": "",
    "order": 1,
    "title": "2012摩根大通企业竞跑赛上海赛事四大看点",
    "lead": "拥有悠久历史和现代多元金融体系的上海，有着中西合璧的文化底蕴和经济潜力。这座融合了古老和现代的国际都市将在2012年秋天再次迎来全球最知名的企业运动赛事——摩根大通企业竞跑赛。",
    "fileName": "2012-01.md"
  },
  {
    id: "d96c06677f417a99c8b0896b",
    "year": "2012",
    "date": "2012-08-16",
    "order": 2,
    "title": "摩根大通企业竟跑赛将精彩从办公室带到赛道",
    "lead": "这个夏天，如火如荼的奥运会聚集了全世界的视线，平时不爱好体育的人们也总会在各路媒体报道中关注中国运动员的竞赛情况。运动员们在赛场上的飒爽英姿多多少少会激起人们对舒展身心的向往。",
    "fileName": "2012-02.md"
  },
  {
    id: "92b304392aac7ea869c76fb3",
    "year": "2012",
    "date": "2012-08-30",
    "order": 3,
    "title": "慈善领跑者",
    "lead": "当首届摩根大通企业竞跑赛落户中国上海时，不仅仅将倡导职场友谊、团队精神及健康生活理念带给中国各大公司企业的白领精英们，同时，也将摩根大通对于慈善公益的传承更进一步融入到中国。",
    "fileName": "2012-03.md"
  },
  {
    id: "93f157feabbe632e74c30ed9",
    "year": "2012",
    "date": "2012年10月18日",
    "order": 4,
    "title": "6500名企业精英竞逐第二届摩根大通企业竞跑赛（上海赛事）",
    "lead": "2012摩根大通企业竞跑赛上海赛事今晚在上海徐汇滨江龙腾大道正式鸣锣开赛。来自225家企业的约6,500名职场精英展开了热烈的竞逐。来自英孚教育的Sarah Edson、艾奕康中国区分公司的Joe Burnet分别获得了本次企业竞跑赛的女子、男子第一。",
    "fileName": "2012-04.md"
  },

  {
    id: "1cee3c0af7fc971fe615443c",
    "year": "2011",
    "date": "2011年10月25日",
    "order": 1,
    "title": "摩根大通在华90周年 企业竞跑赛首落上海",
    "lead": "拥有35年历史的摩根大通企业竞跑赛于10月20日晚5时于上海徐汇滨江龙腾大道正式开跑。来自158家公司的3888名企业员工以组队报名的方式参加了这场全程5.6公里的竞跑比赛。",
    "fileName": "2011-01.md"
  },
  {
    id: "c9cf65507d5ab5e39053c481",
    "year": "2011",
    "date": "2011年9月30日",
    "order": 2,
    "title": "摩根大通企业竟跑赛 引领“文化衫”新时尚",
    "lead": "35年来，“摩根大通企业竞跑赛” 的足迹已踏遍世界各大顶级金融城市，纽约、波士顿、芝加哥、旧金山、法兰克福、伦敦、悉尼、新加坡……这是一场专门针对企业员工的竞跑赛，作为传统，它要求每个企业以组队的形式报名参赛。除了努力奔跑，一项别出心裁的企业文化衫设计大赛同样吸引了城市白领的目光和积极的参与。",
    "fileName": "2011-02.md"
  },
  {
    id: "2ef12bc39e1f817498032b06",
    "year": "2011",
    "date": "2011-08-04",
    "order": 3,
    "title": "摩根大通 “企业竞跑赛” 在华启动 上海为唯一举办中国城市",
    "lead": "摩根大通在上海宣布，将于10月20日在上海举办本年度的“摩根大通企业竞跑赛”。作为目前全球规模最大、距离最长的公司竞技活动，迄今已吸引了来自全球8000多个不同类型规模企业约25万名参赛者。",
    "fileName": "2011-03.md"
  },
  {
    id: "c82355e9c82d60137e094fb1",
    "year": "2011",
    "date": "2011年10月20日",
    "order": 4,
    "title": "3810名企业员工竞逐首届摩根大通企业竞跑赛上海站",
    "lead": "拥有35年历史的摩根大通企业竞跑赛于今晚5时于徐汇滨江龙腾大道正式开跑。来自176家公司的3,810名企业员工以组队报名的方式参加了当晚的竞跑比赛。参赛选手身着代表自己企业文化精神的定制服装，在跑道上共享团队友谊、共铸团队精神，共献慈善公益。",
    "fileName": "2011-04.md"
  }
];

export function getTeasers(year: string): Teaser[] {
  return teasers
    .filter(t => t.year === year)
    .sort((a, b) => a.order - b.order)
    .map(t => {
      t.href = `${jpmMap.content}/${t.id}`;
      return t;
    });
}

export function findTeaser(id: string): Teaser | undefined {
  return teasers.find(t => t.id === id);
}

export type Story = Teaser & {
  body: string;
}