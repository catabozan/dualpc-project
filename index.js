var imagesInFolder = 2; //how many images are in /resources/images/index

var body = document.querySelector("body");
var sibiu = document.querySelector("#sibiu");
var imageCounter = 2;

sibiu.addEventListener("click", function(){
	//console.log(imageCounter);
	body.style.backgroundImage = "url(\"resources/images/index/" + imageCounter + ".jpg\")";
	imageCounter++;
	if(imageCounter > imagesInFolder) imageCounter = 1;
})