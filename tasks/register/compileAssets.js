module.exports = function (e) {
  e.registerTask ('compileAssets', ['clean:dev', 'less:dev', 'copy:dev']);
};
