class Bal {
    constructor() {
        this.diameter = 75;
        this.straal = this.diameter / 2;
        this.x = 40;
        this.y = 43;
        this.kleur = 200;
        this.vx = random(-20,20);
        this.vy = this.vx + random(-5,5);
        this.actief = false;
        this.constrain = (1920,1080);
   
        
    }
        beweeg() {
            if (keyIsDown(LEFT_ARROW)) {
                this.x -= width / 23;
              }
              if (keyIsDown(RIGHT_ARROW)) {
                this.x += width / 23;
              }
              if (keyIsDown(UP_ARROW)) {
                this.y -= height / 13;
              }
              if (keyIsDown(DOWN_ARROW)) {
                this.y += height / 13;
              }
            
            this.x = constrain(this.x,0,width - raster.celGrootte);
            this.y = constrain(this.y,0,height - raster.celGrootte);
          }

          Geraakt(Vijand) {
            if (this.x == Vijand.x && this.y == Vijand.y) {
             this.Geraakt= true;
            }
            else {
            return false;
            }
          }



    teken() {
        push();
        noStroke();
        fill(this.kleur);
        ellipse(this.x,this.y,this.diameter);
        pop();
    }
}