module.exports = function (s) {
  s.registerTask ('build', [
    'compileAssets',
    'linkAssetsBuild',
    'clean:build',
    'copy:build',
  ]);
};
