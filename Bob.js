class Bob{

    constructor(x, y, r) {
        var options = {
          isStatic: false,
          restitution: 1,
          friction:0.7,
          density:1.2
        }

        this.radius=r
        this.x=x
        this.y=y
        this.body=Bodies.circle(x,y, r/2, options);
       

        World.add(world,this.body)
        
}

display(){
    var pos =this.body.position;
    var angle=this.body.angle
    push();
    translate(pos.x, pos.y);
    rotate(angle)
    rectMode(CENTER);
    fill(255,0,255);
    ellipse(0, 0, this.radius, this.radius);
    pop();
  }

}