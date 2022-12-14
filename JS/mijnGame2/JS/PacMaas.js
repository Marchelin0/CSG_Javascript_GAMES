

export default class Pacman {
  constructor(x, y, tileSize, velocity, tileMap) {
    this.x = x;
    this.y = y;
    this.tileSize = tileSize;
    this.velocity = velocity;
    this.tileMap = tileMap;
    this.#loadPacmanImages();

    this.backgroundmusic = new Audio ('./sounds/background.mp3')
  }
  draw(ctx){
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

    this.pacmanImageIndex = 1;
  }

  beweeg() {
    if (keyIsDown(LEFT_ARROW)) {
        this.x -= 10;
      }
      if (keyIsDown(RIGHT_ARROW)) {
        this.x += 10;
      }
      if (keyIsDown(UP_ARROW)) {
        this.y -= 10;
      }
      if (keyIsDown(DOWN_ARROW)) {
        this.y += 10;
      }
    
    this.x = constrain(this.x,0,width - raster.celGrootte);
    this.y = constrain(this.y,0,height - raster.celGrootte);
  }
    
}





// Pacman( voor welke waardes pacman zelf nodig heeft in de constructor
//     column * this.tileSize,
//     row * this.tileSize,
//     this.tileSize,
//     velocity,
//     this
//   );
