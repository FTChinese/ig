import { URL, URLSearchParams } from "url";

interface ShareContent {
    title: string,
    link: string;
    summary: string;
}

interface ShareLink {
    id: string;
    name: string;
    href: string;
}

export class ShareBuilder {
    title: string;
    link: string;
    summary = "";

    constructor(content: ShareContent) {
        this.title = content.title;
        this.link = content.link;
        this.summary = content.summary;
    }

    private buildWxUrl(): string {
        const u = new URL("http://www.ftchinese.com/m/corp/qrshare.html");
      
        const p = new URLSearchParams();
        p.set("title", this.title)
        p.set("url", this.link)
        p.set("code", "2C1A1408")
        
        u.search = p.toString();
      
        return u.toString();
      }
    
    private buildWeboUrl(): string {
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
    
    private buildLinkedInUrl(): string {
        const u = new URL("http://www.linkedin.com/shareArticle");
      
        const p = new URLSearchParams();
        p.set("mini", "true");
        p.set("url", this.link);
        p.set("title", this.title);
        p.set("summary", this.summary);
        p.set("source", "FT中文网");
      
        u.search = p.toString();
      
        return u.toString();
    }
    
    private buildFacebookUrl(): string {
        const u = new URL("http://www.facebook.com/sharer.php");
        
        const p = new URLSearchParams("http://www.facebook.com/sharer.php");
        p.set("u", this.link);
      
        u.search = p.toString();
      
        return u.toString();
    }
    
    private buildTwitter(): string {
        const u = new URL("https://twitter.com/intent/tweet");
        
        const p = new URLSearchParams();
        p.set("url", this.link);
        p.set("text", `【${this.title}】`);
        p.set("via", "FTChinese");
        
        u.search = p.toString();
        
        return u.toString();
    }

    build(): ShareLink[] {
        return [
            {
              id: "wechat",
              name: "微信",
              href: this.buildWxUrl(),
            },
            {
              id: "weibo",
              name: "微博",
              href: this.buildWeboUrl(),
            },
            {
              id: "linkedin",
              name: "领英",
              href: this.buildLinkedInUrl(),
            },
            {
              id: "facebook",
              name: "Facebook",
              href: this.buildFacebookUrl(),
            },
            {
              id: "twitter",
              name: "Twitter",
              href: this.buildTwitter(),
            }
        ];
    }
}
