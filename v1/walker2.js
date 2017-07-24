var fs = require('fs');

var walkPath = '/Users/kylewebb/Desktop/mesh_scraper/size_images/old_imgs';

var walk = function (dir, done) {
    fs.readdir(dir, function (error, list) {
        if (error) {
            return done(error);
        }

        var i = 0;

        (function next () {
            var file = list[i++];

            if (!file) {
                return done(null);
            }

            file = dir + '/' + file;

            fs.stat(file, function (error, stat) {

                if (stat && stat.isDirectory()) {
                    walk(file, function (error) {
                        next();
                    });
                } else {
                    // do stuff to file here
                    const cv = require('opencv');

                    cv.readImage(file, function (err,img) {
                      if (err) {
                        throw err;
                      }
                      var resemble = require('node-resemble-v2');

                      //var github_img1 = ;
                      var github_img1 = fs.readFileSync(file);
                      var github_img2 = fs.readFileSync('images/vaporm.jpg');

                      resemble(github_img1).onComplete(function(data){
                          console.log(data);
                      });

                      resemble(github_img1).compareTo(github_img2).onComplete(function(data){
                          console.log(data);
                      });
                    //img.save('images/000012.jpg');
                    });
                    console.log(file);


                    next();
                }
            });
        })();
    });
};

// optional command line params
//      source for walk path
process.argv.forEach(function (val, index, array) {
    if (val.indexOf('source') !== -1) {
        walkPath = val.split('=')[1];
    }
});

console.log('-------------------------------------------------------------');
console.log('processing...');
console.log('-------------------------------------------------------------');

walk(walkPath, function(error) {
    if (error) {
        throw error;
    } else {
        console.log('-------------------------------------------------------------');
        console.log('finished.');
        console.log('-------------------------------------------------------------');
    }
});
