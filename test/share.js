const SocialShare = require("../lib/social-share");

describe("share", function() {
  it("build links", function() {
    const share = new SocialShare({
      title: "摩根大通企业竞跑赛2019",
      link: "http://interactive.ftchinese.com/corporate-challenge",
      summary: "摩根大通携手 @FT中文网 开启2019年 #摩根大通企业竞跑赛#， 共同倡导Work & Life Balance，欢迎分享与跑步有关的个人经历，让更多朋友了解跑步的意义，加入到跑步的行列!"
    });

    console.log(share.build());
  });
});
