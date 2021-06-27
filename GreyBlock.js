class GreyBlock extends BaseClass{
constructor(x,y,width,height) {
 
  super(x,y,width,height)

  this.visiblity = 255;
    }
    
    score(){
      if(this.visiblity < 0 && this.visiblity > -105) {
        score = score+1;
      }
     }

    display(){
     if(this.body.speed <3.5){
      fill(134, 135, 135);
      super.display();
     }
     else{
      World.remove(world,this.body);
      push()
      this.visiblity = this.visiblity - 5
      tint(255,this.visiblity);
      rect(this.body.position.x,this.body.y,width,height)
      pop()
     }
    
     
    }
  };