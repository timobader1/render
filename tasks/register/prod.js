module.exports = function (s) {
  s.registerTask ('prod', [
    'polyfill:prod',
    'compileAssets',
    'babel',
    'concat',
    'uglify',
    'cssmin',
    'sails-linker:prodJs',
    'sails-linker:prodStyles',
  ]);
};
