module.exports=function(e){e.config.set("babel",{dist:{options:{presets:[require("sails-hook-grunt/accessible/babel-preset-env")]},files:[{expand:!0,cwd:".tmp/public",src:["js/**/*.js"],dest:".tmp/public"}]}})};