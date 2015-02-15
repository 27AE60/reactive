'use strict';

var yo = require('yeoman-generator');

module.exports = yo.generators.Base.extend({
  constructor: function() {
    yo.generators.Base.apply(this, arguments);
  },

  initializing: function() {
    this.pkg = require('../../package.json');
    console.log('fuck you babaji', this.pkg)
    // "gulp-postcss": "^3.0.0",<% if (includeSass) { %>
    // "gulp-sass": "^1.2.4",<% } %>
    // "gulp-cache": "^0.2.2",
    // "gulp-csso": "^0.2.6",
    // "gulp-filter": "^2.0.0",
    // "gulp-flatten": "^0.0.4",
    // "gulp-if": "^1.2.1",
    // "gulp-imagemin": "^2.0.0",
    // "gulp-jshint": "^1.5.3",
    // "gulp-load-plugins": "^0.8.0",
    // "gulp-minify-html": "^0.1.6",
    // "gulp-size": "^1.1.0",
    // "gulp-sourcemaps": "^1.3.0",
    // "gulp-uglify": "^1.0.1",
    // "gulp-useref": "^1.0.2",
    // "jshint-stylish": "^1.0.0",
    // "main-bower-files": "^2.1.0",
    // "opn": "^1.0.0",
    // "wiredep": "^2.0.0"
    // "autoprefixer-core": "^4.0.2",
    // "browser-sync": "^1.8.2",
    // "del": "^1.1.1",
  },

  writing: {
    appJSON: function() {
      this.template('app.json', 'app.json');
    },
    git: function() {
      this.copy('gitignore', '.gitignore');
      this.copy('gitattributes', '.gitattributes');
    },
    bower: function() {
      // this.copy('bower.json', 'bower.json');
      this.copy('bowerrc', '.bowerrc');
    },
    packageJSON: function() {
      this.template('package.json', 'package.json');
    },
    reactive: function() {
      this.copy('gulpfile.js', 'gulpfile.js');
      this.mkdir('.reactive');
      this.mkdir('.reactive/tpl');
      this.copy('component.js', '.reactive/component.js');
      this.copy('compile.js', '.reactive/compile.js');
      this.copy('component.json.tpl', '.reactive/tpl/component.json.tpl');
      this.copy('component.jsx.tpl', '.reactive/tpl/component.jsx.tpl');
      this.copy('trigger.jsx.tpl', '.reactive/tpl/trigger.jsx.tpl');
      this.copy('component.jade.tpl', '.reactive/tpl/component.jade.tpl');
      this.copy('component.scss.tpl', '.reactive/tpl/component.scss.tpl');
    },
    components: function() {
      this.mkdir('src/components');
      this.mkdir('src/components/Yo');
      this.mkdir('src/components/Yo/src');
      this.mkdir('src/components/Yo/test');
      this.mkdir('src/components/Yo/src/jsx');
      // this.copy('component_index.jade', 'src/components/yo/src/index.jsde')
    },
    src: function() {
      this.mkdir('src/actions');
      this.mkdir('src/constants');
      this.mkdir('src/dispatchers');
      this.mkdir('src/layouts');
      this.mkdir('src/media');
      this.mkdir('src/media/styles');
      this.mkdir('src/media/images');
      this.mkdir('src/media/fonts');
      this.mkdir('src/mixins');
      this.mkdir('src/stores');
      this.mkdir('src/utility');
    },
    app: function() {
      // add app directories
      this.mkdir('src');
      this.mkdir('.tmp');
      this.mkdir('.tmp/components');
      this.mkdir('test');
    }
  }
});
