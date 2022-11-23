function setup() {
  canvas = createCanvas(450,450);
  background('silver');
  canvas.parent('processing');
  //noLoop();
}
function preload() {
  kever = loadImage("images/sprites/kever.png");
}

function draw() {
  background('grey');  
}
function kevers(){ 
  image(kever,25,25,50,50);
}

for (var i = 0;i < 10;i++) {
  image(kever);
  translate(50,0,0,0)

}