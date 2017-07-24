const cv = require('opencv');

cv.readImage('/Users/kylewebb/Desktop/mesh_scraper/size_images/imgs/279729.jpg', function (err,img) {
  if (err) {
    throw err;
  }

img.save('images/000012.jpg');
});
