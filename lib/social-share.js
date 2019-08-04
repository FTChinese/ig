const {
  URL,
  URLSearchParams,
} = require('url');

class SocialShare {
  title = "";
  link = "";
  summary = "";

  constructor({title, link, summary}={}) {
    this.title = title;
    this.link = link;
    this.summary = summary;
  }

  addWx() {
    const u = new URL("http://www.ftchinese.com/m/corp/qrshare.html");
  
    const p = new URLSearchParams();
    p.set("title", this.title)
    p.set("url", this.link)
    p.set("code", "2C1A1408")
    
    u.search = p.toString();
  
    return u.toString();
  }

  addWebo() {
    const u = new URL("http://service.weibo.com/share/share.php");
  
    const p = new URLSearchParams();
    p.set("appkey", "4221537403");
    p.set("url", this.link);
    p.set("title", `【${this.title}】${this.summary}`);
    p.set("ralateUid", "1698233740"); // apprarently, this is a terrible mis-spelling.
    p.set("source", "FT中文网");
    p.set("sourceUrl", "http://www.ftchinese.com/");
    p.set("content", "utf8");
    p.set("ccode", "2G139005");
  
    u.search = p.toString();
  
    return u.toString();
  }

  addLinkedIn() {
    const u = new URL("http://www.linkedin.com/shareArticle");
  
    const p = new URLSearchParams();
    p.set("mini", true);
    p.set("url", this.link);
    p.set("title", this.title);
    p.set("summary", this.summary);
    p.set("source", "FT中文网");
  
    u.search = p.toString();
  
    return u.toString();
  }

  addFacebook() {
    const u = new URL("http://www.facebook.com/sharer.php");
    
    const p = new URLSearchParams("http://www.facebook.com/sharer.php");
    p.set("u", this.link);
  
    u.search = p.toString();
  
    return u.toString();
  }

  addTwitter() {
    const u = new URL("https://twitter.com/intent/tweet");
  
    const p = new URLSearchParams();
    p.set("url", this.link);
    p.set("text", `【${this.title}】`);
    p.set("via", "FTChinese");
  
    u.search = p.toString();
  
    return u.toString();
  }

  build() {
    return [
      {
        id: "wechat",
        name: "微信",
        href: this.addWx(),
      },
      {
        id: "weibo",
        name: "微博",
        href: this.addWebo(),
      },
      {
        id: "linkedin",
        name: "领英",
        href: this.addLinkedIn(),
      },
      {
        id: "facebook",
        name: "Facebook",
        href: this.addFacebook(),
      },
      {
        id: "twitter",
        name: "Twitter",
        href: this.addTwitter(),
      }
    ];
  }
}

module.exports = SocialShare;
