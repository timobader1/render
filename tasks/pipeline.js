var cssFilesToInject = ['dependencies/**/*.css', 'styles/**/*.css'],
  jsFilesToInject = [
    'dependencies/sails.io.js',
    'dependencies/vue.global.js',
    'dependencies/vue-router.global.js',
    'dependencies/**/*.js',
    'js/**/*.js',
  ],
  templateFilesToInject = ['templates/**/*.html'],
  tmpPath = '.tmp/public/';
(module.exports.cssFilesToInject = cssFilesToInject.map (
  e =>
    '!' === e[0]
      ? require ('path').join ('!' + tmpPath, e.substr (1))
      : require ('path').join (tmpPath, e)
)), (module.exports.jsFilesToInject = jsFilesToInject.map (
  e =>
    '!' === e[0]
      ? require ('path').join ('!' + tmpPath, e.substr (1))
      : require ('path').join (tmpPath, e)
)), (module.exports.templateFilesToInject = templateFilesToInject.map (
  e =>
    '!' === e[0]
      ? require ('path').join ('!assets/', e.substr (1))
      : require ('path').join ('assets/', e)
));
