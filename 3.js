function swapImages() {
// Get two picture elements
var imageOne = document.getElementById('imageOne');
var imageTwo = document.getElementById('imageTwo');

// Check whether the image has been loaded
if (imageOne.complete && imageTwo.complete) {
// Exchange the src attribute of the image
var tempSrc = imageOne.src;
imageOne.src = imageTwo.src;
imageTwo.src = tempSrc;
} else {
// Add an event listener if the image is not already loaded
imageOne.onload = function() {
imageOne.onloading = false;
swapImages();
};
imageTwo.onload = function() {
imageTwo.onloading = false;
swapImages();
};
// Mark that the image is loading
imageOne.onloading = true;
imageTwo.onloading = true;
}
}