class Mango{
    constructor(x, y) {
        var options = {
            isStatic:true,
            'restitution':0,
            'friction':1,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        this.image = loadImage("mango.png");
      }

      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
      imageMode(CENTER);
       image(this.image,0, 0,50,50);
        pop();
      }
}