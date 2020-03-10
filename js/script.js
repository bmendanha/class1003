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
img.onmouseout=changeImage2;

function changeImage(e) {
this.style.border="5px solid green";
this.src="https://img.pngio.com/karate-png-free-download-karate-png-450_300.png";
}
function changeImage2(e) {
this.style.border="none";
this.src="https://i.etsystatic.com/17831127/r/il/ce9bd9/1887792183/il_570xN.1887792183_n5kx.jpg";
}

/*-------------------------------EVENT LISTENERS------------------------------------------*/
var btn3 = document.getElementsById("btn_3");
btn3.addEventListener("click", function(e){
    btn3.style.backgroundColor="blue";
    this.style.color="white";
    img.style.border="5px dashed gray";
});

/*-------------------------------SELECT MULTIPLE ELEMENTS------------------------------------------*/
function changeAllButtons(){
    var mySelection, i;
    mySelection=document.querySelectorAll("div.btn");
    for (i=0; i<mySelection.length; i++){
        mySelection[i].innerHTML="I changed";
    }
}
/*-------------------------------ADD ELEMENT------------------------------------------*/
document.getElementsById("btn_4").addEventListener("click", addText);
function addText(){
    var newEl=document.createElement("h2");
    var newContent= document.createTextNode("This is a new heading!");
    //shoe where to position content
    newEl.appendChild(newContent);
    output.appendChild(newEl);
}