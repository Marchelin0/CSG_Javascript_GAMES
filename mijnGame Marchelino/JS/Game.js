import TileMap from "./TileMap.js";

const tileSize = 32;
const canvas= document.getElementById("gameCanvas");
const ctx = canvas.getContext ('2d');
const  tileMap = new TileMap(tileSize);

function gameLoop(){
    console.log("game loop");

}

setInterval(gameLoop,1000/75)