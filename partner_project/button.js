console.log("theMessage is here! (the javascript is here)");

// const dot = document.getElementById("dotButton");
let theBody = document.querySelector("body");
let theButton = document.getElementById("dotButton");
let theButton2 = document.getElementById("dashButton");
let theButton3 = document.getElementById("dotButton2");

let S = document.getElementById("S");
let O = document.getElementById("O");
let S2 = document.getElementById("S2");


var clicks_counter = 0;

var complete_counter =0;

function count(){
    clicks_counter+=1;
    // document.getElementById("dotButton").innerHTML = clicks_counter;
    if( clicks_counter==3){
        theBody.style.backgroundColor = "green";
        theButton.style.backgroundColor = "red";
        S.style.color="red";
        O.style.color="green";
        S2.style.color="green";
        complete_counter+=1;
        
    }
}


var dash_counter = 0;
function count2(){
    if(complete_counter==1){
        dash_counter+=1;
        if( dash_counter==3){
            theBody.style.backgroundColor = "red";
            theButton2.style.backgroundColor = "red";
            O.style.color="red";
            S.style.color="red";
            S2.style.color="red";
            complete_counter+=1;
        }
    }else{ 
        alert("error");
        window.location.reload();
    }
}

// const dot2 = document.getElementById("dotButton");
var clicks_counter2 = 0;

function count3(){
    if(complete_counter==2){
        clicks_counter2+=1;
        if( clicks_counter2==3){
            theBody.style.backgroundColor = "black";
            theButton3.style.backgroundColor = "red";
            O.style.color="red";
            S.style.color="red";
            S2.style.color="red";
            
        }
    }else{
        alert("error");
        window.location.reload();
    }
}