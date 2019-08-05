const path = require('path');
const nunjucks = require('nunjucks');
const markdown = require('nunjucks-markdown');
const marked = require('marked');
const util = require('util');

// const renderer = new marked.Renderer();
// renderer.heading = function(text, level) {
//   var className = '';
//   switch (level) {
//     case 3:
//       className = 'article__stand-first'
//       break;
//     case 4:
//       className = 'article__subheading';
//       break;
//     default:
//       className = 'article__title';
//   }

//   return `<h${level} class="${className}">${text}</h${level}>`
// }

marked.setOptions({
  headerIds: false,
  // renderer: renderer,
});

const env = nunjucks.configure(
  [
    path.resolve(process.cwd(), 'view'),
    path.resolve(process.cwd(), 'client')
  ], 
  {
    noCache: process.env.NODE_ENV === 'development',
    watch: process.env.NODE_ENV === 'development'
  }
);

markdown.register(env, marked);

module.exports = util.promisify(nunjucks.render);
