// p5 js
function setup() {
    createCanvas(1080, 720);
    strokeWeight(4);
    stroke(255, 204, 100); // Sets the color used to draw lines and borders around shapes
}

function draw() {
    // background(0);
    ellipse(mouseX, mouseY+20, 20, 20);// Draws an ellipse (oval) to the screen
    ellipse(mouseX, mouseY-20, 20, 20);
    ellipse(mouseX-20, mouseY, 20, 20);
    ellipse(mouseX+20, mouseY, 20, 20);
}