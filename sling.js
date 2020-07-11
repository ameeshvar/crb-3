
class Rope{
    
    constructor(ball,pointB)
    {
        var options = {
            bodyA:ball.body,
            pointB:pointB,
            stiffness:0.04,
            length:10
          }
        this.body  = Constraint.create(options);
        this.bodyA = ball;
        this.pointB = pointB;
        World.add(world,this.body);
    }

    display()
    {
          if(this.body.bodyA){
        strokeWeight(5);
        line(this.bodyA.body.position.x,this.bodyA.body.position.y,this.pointB.x,this.pointB.y);
          }
    }
    fly(){
        this.body.bodyA=null
    }
     
}

    
