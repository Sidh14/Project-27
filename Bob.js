class Bob
{
    constructor(x,y,r)
    {
        var options =
        {
            isStatic : false,
            restitution : 0.3,
            friction : 3,
            density : 1.2
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(x,y,r/2,options);
        World.add(world,this.body);
    }
   display()
   {
       var pos=this.body.position;

       push()
       translate(pos.x,pos.y);
       strokeWeight(3)
       fill(255,0,255)
       ellipseMode(CENTER)
       ellipse(0,0,this.r,this.r)
       pop()
   }
}