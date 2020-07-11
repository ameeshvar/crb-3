class Dustbin {
    constructor(x,y){
        var options={
            isStatic:true

        }
       
        this.image=loadImage("sprites/dustbingreen.png")
        this.x=x 
        this.y=y
        this.width=200
        this.height=230
        this.thickness=20
        this.bottomBody=Bodies.rectangle(this.x,this.y,this.width,this.thickness,options)
        this.leftBody=Bodies.rectangle(this.x-this.width/2,this.y-this.height/2,this.thickness,this.height,options)
        this.rightBody=Bodies.rectangle(this.x+this.width/2,this.y-this.height/2,this.thickness,this.height,options)
        World.add(world,this.bottomBody)
        World.add(world,this.leftBody)
        World.add(world,this.rightBody)
            
    }
    display(){
    var posBottom =this.bottomBody.position
    var posright =this.rightBody.position
    var posleft=this.leftBody.position
    push();
        translate(posleft.x, posleft.y);
        rectMode(CENTER)
        angleMode(RADIANS)
        fill(255)
        rotate(this.angle);
        
        pop();

        translate(posright.x, posright.y);
        rectMode(CENTER)
        angleMode(RADIANS)
        fill(255)
        rotate(this.angle*-1);
        
        pop();

        push();
        translate(posBottom.x, posBottom.y+10);
       
        angleMode(RADIANS)
        
        imageMode(CENTER);
        image(this.image, 0, -this.height/2, this.width, this.height);
        pop();
    }
}
    
 
     
    
  
