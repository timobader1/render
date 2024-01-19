module.exports = function (s) {
  s.registerTask ('linkAssets', [
    'sails-linker:devJs',
    'sails-linker:devStyles',
  ]);
};
