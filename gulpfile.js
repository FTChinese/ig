const gulp = require("gulp");
const ts = require("gulp-typescript");
const rollup = require("rollup");
let cache;
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const imagemin = require("gulp-imagemin");
const buildHtml = require("./util/build-html");

const tsProject = ts.createProject("tsconfig.json");

/**
 * Gulp tasks is only used for development.
 * To build for production, use Makefile or `npm run`
 * 
 * Build directory structrure
 * 
 * build/
 * |--- js/
 * |--- dist
 * |    └--- main.js
 * |--- dev/
 * |    |--- script/
 * |    |    └---- main.js
 * |    └--- style/
 * |         └---- main.css
 * └--- production/
 *      |--- main.js
 *      └--- main.css
 */
// Output directory of typescript
const tsOutDir = "build/tsout";
// Input file for rollup
const jsInputFile = "build/tsout/main.js";
// rollup output file
const jsOutFile = "build/dev/script/main.js";
// node-sass output directory.
const cssOutDir = "build/dev/style";

/**
 * @description Compile TypeScript to ES5
 * Compiles typescript sources specified in tsconfig.json `client/script/*`
 * to vanilla JS file under `build/js`.
 * The output are not linked into a single file.
 */
function compileTs() {
  return tsProject.src()
    .pipe(tsProject())
    .pipe(gulp.dest(tsOutDir));
};

/**
 * @description Bundle JS to a single file.
 * After typescript is compiled into vanilla JS, this function links
 * the main output file `build/js/main.js` into a single file 
 * `build/dev/script/main.js`
 */
async function linkJs() {
  const bundle = await rollup.rollup({
    input: jsInputFile,
    cache,
    plugins: [
      // babel({
      //   exclude: 'node_modules/**'
      // })
    ],
  });

  console.log(bundle.watchFiles);

  await bundle.write({
    file: jsOutFile,
    format: "iife",
    sourcemap: true,
  });
}

/**
 * @description Compile ts and bundle js.
 * The generated js is put into `dist` directory. 
 * It is not minified and is committed to version 
 * control in case we need to copy + paste the code 
 * somewhere else without the need to waste time 
 * installing all the build toolchains, 
 * which are often shabby and broken.
 * To get a minified version, run command
 * `npm run build-ts` which will directly compile
 * from ts files and put resulting file into 
 * `build/outputs` directory.
 * The minified file is actually embedded into HTML. 
 * You can see it in file under `view/assets`.
 * Remember never build frontend assets on server-side
 * when a request comes. Front end assets building are
 * quite CPU intensive. They should be static the
 * the moment serve app starts.
 */
const buildJs = gulp.series(compileTs, linkJs);

function buildCss() {
  return gulp.src('client/scss/*.scss')
    .pipe(sourcemaps.init({loadMaps:true}))
    .pipe(sass({
      outputStyle: 'expanded',
      precision: 2,
      includePaths: "node_modules/bootstrap"
    }).on('error', (err) => {
      console.error(err);
    }))
    // .pipe(postcss([
    //   cssnext({
    //     features: {
    //       colorRgba: false
    //     }
    //   })
    // ]))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(cssOutDir));
}

exports.script = buildJs;
exports.style = buildCss;

exports.watch = gulp.parallel(buildCss, function() {
  // gulp.watch(["client/script/*.ts"], buildJs);
  gulp.watch(["client/scss/**/*.scss"], buildCss);
});

exports.build = gulp.parallel(buildJs, buildCss);

function minifyImage() {
  return gulp.src('./public/images/**/*.{svg,png,jpg,jpeg,gif}')
  .pipe(imagemin({
    progressive: true,
    interlaced: true,
    svgoPlugins: [{cleanupIDs: false}],
    verbose: true
  }))
  .pipe(gulp.dest('../ft-interact/corporate-challenge'));
}

async function html() {
  await buildHtml();

  return gulp.src("./public/**/*.html")
  .pipe(gulp.dest("../ft-interact/corporate-challenge"));
}

exports.images = minifyImage;

exports.deploy = gulp.parallel(html, minifyImage);
