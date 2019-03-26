var imagesInFolder = 7; //how many images are in /resources/images/index

var body = document.querySelector("body");
var sibiu = document.querySelector("#sibiu");
var imageCounter = 2; //uncomment to have ordered images on index

sibiu.addEventListener("click", function(){
	//console.log(imageCounter);
	body.style.backgroundImage = "url(\"resources/images/index/" + imageCounter + ".jpg\")";
	imageCounter++; //uncomment to have ordered images on index
	if(imageCounter > imagesInFolder) imageCounter = 1; //uncomment to have ordered images on index
});
