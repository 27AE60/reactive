'use strict';

var yo = require('yeoman-generator'),
  yosay = require('yosay');

module.exports = yo.generators.Base.extend({
  constructor: function() {
    yo.generators.Base.apply(this, arguments);
  },

  initializing: function() {
    this.pkg = require('../../package.json');
  },

  prompting: function() {
    var done = this.async();

    this.log(yosay('\'Allo! Devs! Reactive does lot of stuff.'));

    this.prompt([{
      type: 'input',
      name: 'rname',
      message: 'Your project name',
      default: this.appname // Default to current folder name
    }, {
      type: 'input',
      name: 'rauthor',
      message: 'Author name',
      default: 'Reactive' // Defaults to Reactive
    }], function(answers) {
      this.rname = answers.rname;
      this.rauthor = answers.rauthor;
      done();
    }.bind(this));
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
      this.mkdir('.reactive');
      this.mkdir('.reactive/tpl');
      this.copy('gulpfile.js', 'gulpfile.js');
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
      // this.copy('component_index.jade', 'src/components/yo/src/index.jade')
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
