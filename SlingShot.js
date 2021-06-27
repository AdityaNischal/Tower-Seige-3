class SlingShot{
    constructor(bodyA,pointB){
        var option = {
            bodyA :bodyA,
           pointB:pointB,
            stiffness : 0.04,
            length : 5
        }  
        this.slingshot = Matter.Constraint.create(option);
        this.pointB=pointB;
        World.add(world,this.slingshot);

    }

    released(){
        this.slingshot.bodyA=null;
    }
    attach(obj){
        this.slingshot.bodyA = obj;
    }

    display(){
        if(this.slingshot.bodyA){
        var posA=this.slingshot.bodyA.position;
        var pointB=this.pointB;
        strokeWeight(5);
        stroke(78,218,188)
        line(posA.x,posA.y,pointB.x,pointB.y);
        }
    }
    
}