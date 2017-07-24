var dirname = '/Users/kylewebb/Desktop/mesh_scraper/size_images/imgs';
var fs    = require("fs");
console.log("Going to get file info!");
fs.stat(dirname, function (err, stats) {
    if (err) {
        return console.error(err);
    }
    console.log(stats);
    console.log("Got file info successfully!");

    // Check file type
    console.log("isFile ? " + stats.isFile());
    console.log("isDirectory ? " + stats.isDirectory());
});
