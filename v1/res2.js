var fs = require('fs');

var resemble = require('node-resemble-v2');

//var github_img1 = ;
var github_img1 = fs.readFileSync('images/zebra.jpg');
var github_img2 = fs.readFileSync('zbra.jpg');

resemble(github_img1).onComplete(function(data){
    console.log(data);
});

resemble(github_img1).compareTo(github_img2).onComplete(function(data){
    console.log(data);
});
