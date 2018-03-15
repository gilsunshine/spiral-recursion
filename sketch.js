let d = 0;
let x = 100;
let y = 100;

let angle = 0;
function setup() {
  angleMode(DEGREES)
  background(255);
  createCanvas(windowWidth, windowHeight);
  frameRate(40);
}

function draw() {
  translate(windowWidth/2, windowHeight/2)
  d = d + .5;

  drawCircle(x, y, d)

  angle+=1
}

function drawCircle(x, y, d){
  rotate(angle);
  stroke(255, 200)
  fill(0,5);
  ellipse(x, y , d)
  if (d > 0){
    drawCircle(x, y, d - 100)

  }

}
