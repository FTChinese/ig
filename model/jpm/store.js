const fs = require("fs").promises;
const path = require("path");
const debug = require("debug")("ig:jpm-store");
const sharedData = require("./shared.json");
const homeData = require("./home.json");
const gallery = require("./gallery.json");
const stories = require("./stories.json");

/**
 * @typedef {Object} Pitch
 * @property {string} link
 * @property {stirng} imageUrl
 * 
 * @typedef {Object} TimelineCard
 * @property {string} title
 * @property {number} year
 * @property {string} imageUrl
 * 
 * @typedef {Object} Meta
 * @property {string} title
 * @property {string} description
 * @property {string} ogImageUrl
 */
class Store {

  /**
   * @typedef {Object} Home
   * @property {Meta} meta
   * @property {Object} jumbo
   * @property {string} jumbo.title
   * @property {string} jumbo.lead
   * @property {string[]} jumbo.body
   * @property {Pitch} pitch
   * @property {TimelineCard[]} timeline
   * 
   * @return {Home} 
   */
  buildHome() {
    return {
      ...homeData,
      ...sharedData,
    };
  }

  /**
   * @typedef {Object} Story
   * @property {string} year
   * @property {date} string
   * @property {number} order - the sort order
   * @property {string} title
   * @property {string} lead
   * @property {string} content
   * 
   * @param {string} id 
   * @return {?Story}
   */
  async buildStory(id) {
    const story = stories[id];
    if (!story) {
      return null;
    }

    if (!story.fileName) {
      return null;
    }

    const absFileName = path.resolve(process.cwd(), `model/jpm/articles/${story.fileName}`);

    const content = await fs.readFile(absFileName, "utf8");

    return {
      ...story,
      content,
    }
  }

  /**
   * @typedef {Object} Article
   * @property {string} id
   * @property {Meta} meta
   * @property {Story} story
   * @property {Pitch} pitch
   * @property {TimelineCard[]} timeline
   * 
   * @desc Load and build data for an article.
   * @param {string} id 
   * @return {?Article}
   */
  async buildArticle(id) {
    
    const story = await this.buildStory(id);

    return {
      id,
      meta: {
        title: story.title,
        description: story.lead,
        ogImageUrl: "",
      },
      story,
      ...sharedData,
    }
  }

  /**
   * @typedef {object} Teaser
   * @property {string} id
   * @property {string} year
   * @property {string} date
   * @property {number} order
   * @property {string} title
   * @property {string} lead
   * @property {string} fileName
   * 
   * @param {string} year 
   * @return {Teaser[]}
   * 
   */
  buildTeasers(year) {
    return Object.entries(stories).filter(([key, value]) => {
      return year == value.year;
    }).map(([key, value]) => {
      return {
        id: key,
        ...value,
      };
    }).sort((a, b) => {
      return a.order - b.order;
    });
  }

  /**
   * @typedef {Object} Gallery
   * @property {string} id
   * @property {Object} meta
   * @property {string} meta.title
   * @property {string} meta.description
   * @property {Object} meta.og
   * @property {string} meta.og.title
   * @property {string} meta.og.description
   * @property {string} meta.og.image
   * @property {string[]} slides
   * @property {?Object} video
   * @property {string} video.src
   * @property {Teaser[]} teasers
   * @property {Pitch} Pitch
   * @property {TimelineCard[]} timeline
   * 
   * @param {string} year 
   * @return {?Gallery}
   */
  buildGallery(year) {
    const g = gallery[year];
    if (!g) {
      return null;
    }

    const teasers = this.buildTeasers(year);

    return {
      id: year,
      ...g,
      teasers,
      ...sharedData
    }
  }
}

exports.jpmStore = new Store();
