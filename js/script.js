var myOutput = document.getElementById("btn_1");
myOutput.innerHTML="This is <br>the first <br>button";

var myButtons=document.getElementsByClassName("btn");
myButtons[1].innerHTML="This is <br>the second <br>button";

var myTags=document.getElementsByTagName("div");
myTags[2].innerHTML="This is <br>the Third <br>button";

var changeBtn=document.getElementsById("btn_4");
changeBtn.style.backgroundColor="green";

document.getElementsById("output").innerHTML=document.title;

console.dir(document.getElementsById("btn_1").style);

/*------------------------------------------------------------------------*/

var btn1=document.getElementsById("btn_1");
var output=document.getElementsById("output");
btn1.onclick=changeButton;

function changeButton(){
output.innerHTML="I was just clicked";
btn1.style.backgroundColor="yellow";
}

var img=document.getElementsById("myImage");
img.onmouseover=changeImage;

function changeImage(e) {
this.style.border="5px solid green";
this.src="https://www.google.com/search?q=karate+png&tbm=isch&ved=2ahUKEwjQnseKjpDoAhXZSBUIHfOzC2IQ2-cCegQIABAA&oq=karate+png&gs_l=img.3..0i67j0l8.5323.6614..6818...0.0..0.123.407.2j2......0....1..gws-wiz-img.......35i39.9n0RJvmvIy0&ei=KKNnXtDqAtmR1fAP8-eukAY&bih=625&biw=1366&rlz=1C1CHBF_enIE862IE862#imgrc=NG-DSJc-SHxpZM";

}