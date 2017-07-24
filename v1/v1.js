const cv = require('opencv');

cv.readImage('images/zebra.jpg', function (err, img) {
  if (err) {
    throw err;
  }

  const width = img.width();
  const height = img.height();

  if (width < 1 || height < 1) {
    throw new Error('Image has no size');
  }

  // do some cool stuff with img
  const lowThresh = 0;
  const highThresh = 150;
  const iterations = 1;

  img.canny(lowThresh, highThresh);
  img.dilate(iterations);
  //let bound = contours.boundingRect(largestAreaIndex);
  //largestContourImg.rectangle([bound.x, bound.y], [bound.width, bound.height], WHITE, 2);
  // save img
  img.save('zbra.jpg');
});
