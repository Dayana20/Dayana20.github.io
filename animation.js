console.log("theMessage is here! (the javascript is here)");

let child2pic = document.getElementById("child2_pic");
function change1(){
    alert("I am already an adult");
}
var count = 0
function change2(){
    count+=1;
    if (count==1){
        child2pic.src="pictures/b3.jpg";
    }
    if (count==2){
        child2pic.src="pictures/b2.jpg";
    }
    if(count==3){
        count=0;
        alert("I am all grown up");
        window.location.reload();
    }

}
let img = document.getElementById("g1");
var cl = 0;
function enlargeImg1() {
    cl+=1
    img.style.width = "150%";
    img.style.height = "150%";
    if (cl==2){
        cl=0;
        img.style.width = "100%";
        img.style.height = "100%";
    }
}

let img2 = document.getElementById("g2");
var cl2 = 0;
function enlargeImg2() {
    cl2+=1
    img2.style.width = "200%";
    img2.style.height = "200%";
    if (cl2==2){
        cl2=0;
        img2.style.width = "100%";
        img2.style.height = "100%";
    }
}

let text = document.getElementById("art");
function changeColor(){
    const r1 = Math.floor(Math.random() * 255)
    const r2 = Math.floor(Math.random() * 255)
    const r3 = Math.floor(Math.random() * 255)
    text.style.color = 'rgb(' + r1 + "," + r2 + "," + r3 + ')';
}

setInterval(changeColor,1000);