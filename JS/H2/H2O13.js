var aantalRijenRaster = 6;
var aantalKolommenRaster = 9;
var celGrootte;

var animatie = [];
var aantalBeeldjes = 6;
var nummer = 3;

var frame;
var xJos = 400;
var yJos = 300;

function preload() {
  brug = loadImage("images/backgrounds/dame_op_brug_1800.jpg");
  frame = loadImage("images/sprites/Jos100px/Jos_0.png");
}var animatie = [];
var aantalBeeldjes = 6;
var nummer = 5;

function preload() {
  for (var b = 0;b < aantalBeeldjes;b++) {
    nieuw_beeldje = loadImage("images/sprites/Jos_losse_beeldjes/Jos-" + b + ".png");
    animatie.push(nieuw_beeldje);
  }
}

function setup() {
  canvas = createCanvas(460,460);
  canvas.parent('processing');
  noStroke();
  frameRate(50);
}

function draw() {
  background('lavender');
  image(animatie[nummer],0,0);
  
  // straal van de neus is 180

  if (mouseX < 145) {
    nummer = 3;
  }
  else if (mouseX > 305) {
    nummer = 4;
  }
  else {
    if (mouseY < 145) {
      nummer = 1;
    }
    else if (mouseY > 305) {
      nummer = 0;
    }
    else {
      nummer = 5;
    }
  }
}

function setup() {
  canvas = createCanvas(900,600);
  canvas.parent('processing');
  frameRate(10);
  celGrootte = width / aantalKolommenRaster;
}

function draw() {
  background(brug);
  tekenRaster();

  if (keyIsDown(LEFT_ARROW)) {
    xJos -= celGrootte;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    xJos += celGrootte;
  }
  if (keyIsDown(UP_ARROW)) {
    yJos-=celGrootte;
  }
  if (keyIsDown(DOWN_ARROW)) {
    yJos += celGrootte;
  }
  
  xJos = constrain(xJos,0,width - celGrootte);
  yJos = constrain(yJos,0,height - celGrootte);
  
  image(frame,xJos,yJos);
}

function tekenRaster() {
  push();
  noFill();
  stroke('grey');
  for (var rij = 0;rij < aantalRijenRaster;rij++) {
    for (var kolom = 0;kolom < aantalKolommenRaster;kolom++) {
      rect(kolom*celGrootte,rij*celGrootte,celGrootte,celGrootte);
    }
  }
  pop();
}