class Polygon {
  constructor(x,y) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
    this.body = Matter.Bodies.polygon(x, y, 8, 30)
    World.add(world,this.body)
  
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    strokeWeight(1)
    stroke("black")
    fill("yellow");
    ellipse(pos.x, pos.y);
  }
};