module.exports=function(s){s.config.set("watch",{assets:{files:["assets/**/*","tasks/pipeline.js","!**/node_modules/**"],tasks:["syncAssets","linkAssets"]}})};