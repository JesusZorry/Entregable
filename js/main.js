var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var width = 1000;
var heigth = 1000;
var imageData

var image1 = new Image();
image1.src="C42.jpg";
image1.onload= function(){
    myDrawImageMethod(this);
}
//imageData= ctx.getImageData(0,0,this.width,this.height);
function myDrawImageMethod(image){
  ctx.drawImage(image,0,0);
}
//$( document ).ready(function() {}
console.log(ctx);
