const cv = require('opencv');

cv.readImage('zebra.jpg', function (err, img) {
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
function getBase64Image(img) {
    // Create an empty canvas element
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;

    // Copy the image contents to the canvas
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);

    // Get the data-URL formatted image
    // Firefox supports PNG and JPEG. You could check img.src to
    // guess the original format, but be aware the using "image/jpg"
    // will re-encode the image.
    var dataURL = canvas.toDataURL("image/png");

    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
}
var a = new Image(),
    b = new Image();
var a_base64 = getBase64Image('zbra.jpg'),
    b_base64 = getBase64Image('blga.jpg');

if (a_base64 === b_base64)
{
    console.log('yes')// they are identical
}
else
{
    console.log('no')// you can probably guess what this means
}
