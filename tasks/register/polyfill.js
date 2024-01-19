module.exports = function (e) {
  e.registerTask (
    'polyfill:prod',
    'Add the polyfill file to the top of the list of files to concatenate',
    () => {
      e.config.set (
        'concat.js.src',
        [require ('sails-hook-grunt/accessible/babel-polyfill')].concat (
          e.config.get ('concat.js.src')
        )
      );
    }
  ), e.registerTask (
    'polyfill:dev',
    'Add the polyfill file to the top of the list of files to copy and link',
    () => {
      e.config.set (
        'copy.dev.files',
        e.config
          .get ('copy.dev.files')
          .concat ({
            expand: !0,
            cwd: require ('path').dirname (
              require ('sails-hook-grunt/accessible/babel-polyfill')
            ),
            src: require ('path').basename (
              require ('sails-hook-grunt/accessible/babel-polyfill')
            ),
            dest: '.tmp/public/polyfill',
          })
      );
      var l = e.config.get ('sails-linker.devJs.files');
      e.config.set (
        'sails-linker.devJs.files',
        Object.keys (l).reduce (
          (e, i) =>
            ((e[i] = ['.tmp/public/polyfill/polyfill.min.js'].concat (
              l[i]
            )), e),
          {}
        )
      );
    }
  );
};
