class Rope{
    constructor(body1, body2,offsetX,offsetY){

        this.offsetX = 50;
        this.offsetY = 0;
        console.log(body1.position.x);
        var options = {
            bodyA: body1,
            bodyB:body2,
            pointB:{x:this.offsetX,y:this.offsetY},
            stiffness: 0.8,
            length:150
         
        }
        

        
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
    }

   

    display(){
        
            var pointA = this.rope.bodyA.position;
            var pointB = this.rope.bodyB.position;

            var Anchor1X = pointA.x;
            var Anchor1Y = pointA.y;

            var Anchor2X = pointB.x + this.offsetX;
            var Anchor2Y = pointB.y + this.offsetY;


            strokeWeight(4);
            line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
        }
        
    
}