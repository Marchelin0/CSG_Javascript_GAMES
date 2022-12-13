import TileMap from "./TileMap.js";
import Pacman from "./PacMaas.js";

const tileSize = 48;
const velocity = 1;

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");
const tileMap = new TileMap(tileSize);
const pacman = tileMap.getPacman(velocity);

function gameLoop() {
  tileMap.draw(ctx);
  pacman.draw(ctx);
}
function draw() {
  bal.teken();
}
function setup () {
poppetje = new Bal(40,43);
}
tileMap.setCanvasSize(canvas);
setInterval(gameLoop, 1000 / 75);

