import { Link } from "../widget/link";
import { viper } from "../config/viper";
import { FooterSection, ftcFooter } from "./footer";
import { jpmMap } from "../config/sitemap";
const pkg = require("../../package.json");

const bsVersion = pkg.devDependencies.bootstrap.replace("^", "");
const bsNativeVersion = pkg.devDependencies["bootstrap.native"].replace("^", "")
const iconUrl = "http://interactive.ftchinese.com/favicons";

interface Copyright {
  owner: string;
  isFT: boolean;
}

export interface Layout {
  iconUrl: string;
  pageTitle: string;
  styles: {
    links: string[];
    includes: string[];
  };
  scripts: {
    srcUrls: string[];
    includes: string[];
  },
  navBrand: Link;
  footerMatrix?: FooterSection[];
  copyright: Copyright;
  appVersion: string;
}

export class LayoutBuilder {

  private title = "Interactive Graphics";

  private copyright: Copyright = {
    owner: `© FT中文网 ${new Date().getFullYear()}.`,
    isFT: true
  }

  setTitle(t: string): LayoutBuilder {
    this.title = t;
    return this;
  }

  setCopyright(c: Copyright): LayoutBuilder {
    this.copyright = c;
    return this;
  }

  build(): Layout {
    return {
      iconUrl,
      pageTitle: this.title,
      styles: {
        links: [],
        includes: [],
      },
      scripts: {
        srcUrls: [],
        includes: [],
      },
      navBrand: {
        text: "FT中文网",
        href: "https://www.ftchinese.com",
      },
      footerMatrix: this.copyright.isFT
        ? ftcFooter
        : [],
      copyright: {
        owner: `© ${this.copyright.owner} ${new Date().getFullYear()}.`,
        isFT: this.copyright.isFT,
      },
      appVersion: pkg.version,
    };
  }

  static jpmcc(title: string): Layout {
    const layout = new LayoutBuilder()
      .setTitle(title)
      .setCopyright({
        owner: "摩根大通",
        isFT: false,
      }).build();

    if (viper.isProduction) {
      layout.styles.links = [
        `https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/${bsVersion}/css/bootstrap.min.css`,
      ];

      layout.styles.includes = [
        "jpmcc/partials/style.html",
        "jpmcc/partials/analytics.html"
      ];

      layout.scripts.srcUrls = [
        `https://cdnjs.cloudflare.com/ajax/libs/bootstrap.native/${bsNativeVersion}/bootstrap-native-v4.min.js"`
      ];
    } else {
      layout.styles.links = [
        "/bootstrap/dist/css/bootstrap.css",
        "/style/jpmcc.css"
      ];

      layout.scripts.srcUrls = [
        "/bootstrap.native/dist/bootstrap-native.js"
      ];
    }

    layout.navBrand = {
      href: jpmMap.base,
      imgSrc: `${jpmMap.assetsBaseUrl}/images/cc-logo.png`
    }

    return layout;
  }
}
