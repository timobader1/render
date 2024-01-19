module.exports = function (s) {
  s.registerTask ('linkAssetsBuildProd', [
    'sails-linker:prodJsBuild',
    'sails-linker:prodStylesBuild',
  ]);
};
