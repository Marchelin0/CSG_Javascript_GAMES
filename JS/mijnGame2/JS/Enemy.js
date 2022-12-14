export default class Vijand {
    constructor(x,y) {
        this.diameter = 75;
        this.straal = this.diameter / 2;
        this.x = x;
        this.y = y;
        this.kleur = 'blue' ;
        this.vx = random(-20,20);
        this.vy = this.vx + random(-5,5);
        this.actief = false;
        this.constrain = (1920,1080);
        this.stapGrootte = width / 23,height / 13 ;
        
    }
    beweeg() {
      this.x += floor(random(-1,2))*this.stapGrootte;
      this.y += floor(random(-1,2))*this.stapGrootte;
      
      this.x = constrain(this.x,0,width - raster.celGrootte);
      this.y = constrain(this.y,0,height - raster.celGrootte);
      }

    

    teken() {
        push();
        noStroke();
        fill(this.kleur);
        ellipse(this.x,this.y,this.diameter);
        pop();
    }
 
}