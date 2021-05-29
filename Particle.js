

class Particles{
    constructor(x,y,r){
       var options={

           'restitution':0.4

       }
       this.r=r;
       this.color= color( random(0,255) , random(0,255) , random(0,255));
       this.body= Matter.Bodies.circle(x,y,r,options);
       
      
       World.add(world,this.body);
    }

    display(){
        var pos=this.body.position;
    
        push()
       
       
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(pos.x,pos.y,this.r,this.r);
        pop()
    }
    
}
