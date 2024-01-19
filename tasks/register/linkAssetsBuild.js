module.exports = function (s) {
  s.registerTask ('linkAssetsBuild', [
    'sails-linker:devJsBuild',
    'sails-linker:devStylesBuild',
  ]);
};
