import Richting from "./Richting.js";
import Beweeg from "./Richting.js";

export default class Pacman {
  constructor(x, y, tileSize, velocity, tileMap) {
    this.x = x;
    this.y = y;
    this.tileSize = tileSize;
    this.velocity = velocity;
    this.tileMap = tileMap;

    this.currentRichting = null;
    this.requestedRichting = null;
    this.#loadPacmanImages();

    document.addEventListener("keydown", this.#keydown);

    this.backgroundmusic = new Audio("./sounds/background.mp3");
  }
  draw(ctx) {
    ctx.drawImage(
      this.pacmanImages[this.pacmanImageIndex],
      this.x,
      this.y,
      this.tileSize,
      this.tileSize
    );
  }

  #loadPacmanImages() {
    const pacmanImage1 = new Image();
    pacmanImage1.src = "images/pac0.png";

    const pacmanImage2 = new Image();
    pacmanImage2.src = "images/pac1.png";

    const pacmanImage3 = new Image();
    pacmanImage3.src = "images/pac2.png";

    const pacmanImage4 = new Image();
    pacmanImage4.src = "images/pac1.png";

    this.pacmanImages = [
      pacmanImage1,
      pacmanImage2,
      pacmanImage3,
      pacmanImage4,
    ];

    this.pacmanImageIndex = 2;
  }
  // eventlistener gebruiken, dus als het volgene 'event' gebeurd, dan.....
  #keydown = (event) => {
    // pijltje omhoog
    if (event.keyCode == 38) {
      //38 is de keycode voor het pijltje omhoog etc.
      if (this.currentRichting == Richting.down) 
      this.currentRichting == Richting.up;
      this.requestedRichting == Richting.up;
    }
    // pijltje naarbeneden
    if (event.keyCode == 40 ) {
      if (this.currentRichting == Richting.up) 
      this.currentRichting == Richting.down;
      this.requestedRichting == Richting.down;
    }
    // pijltje naar links
    if (event.keyCode == 37) {      
      if (this.currentRichting == Richting.right) 
      this.currentRichting == Richting.left;
      this.requestedRichting == Richting.left;
      
    }
    // pijltje naar rechts
    if (event.keyCode == 39) {
      if (this.currentRichting == Richting.left) 
      this.currentRichting == Richting.right;
      this.requestedRichting == Richting.right;
    }
  }

}

// Pacman( voor welke waardes pacman zelf nodig heeft in de constructor
//     column * this.tileSize,
//     row * this.tileSize,
//     this.tileSize,
//     velocity,
//     this
//   );
