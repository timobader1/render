module.exports = function (l) {
  l.registerTask ('buildProd', [
    'polyfill:prod',
    'compileAssets',
    'babel',
    'concat',
    'uglify',
    'cssmin',
    'hash',
    'copy:beforeLinkBuildProd',
    'linkAssetsBuildProd',
    'clean:build',
    'copy:build',
    'clean:afterBuildProd',
  ]);
};
