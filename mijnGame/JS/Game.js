import TileMap from "./TileMap.js";
import Pacman from "./PacMaas.js";
import Vijand from "./Enemy.js";

const tileSize = 48;
const velocity = 1;

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const tileMap = new TileMap(tileSize);
const pacman = tileMap.getPacman(velocity);

function gameLoop() {
  tileMap.draw(ctx);
  pacman.draw(ctx);
  // vijand1.draw(ctx);
  // vijand2.draw(ctx);
}

function setup(ctx) {
  pacmaas = new Pacman(o, o);
  //  vijand1 = new Vijand(10, 10);
  //  vijand2 = new Vijand(20, 20);
}

function draw() {}
tileMap.setCanvasSize(canvas);
setInterval(gameLoop, 1000 / 75);
