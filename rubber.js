class rubber{
    constructor(x, y, r) {
        var options = {
            'restitution':0.3,
            'friction':5,
            'density':1.0
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(this.x, this.y,this.r, options);
       
        World.add(world, this.body);
      }
      display(){
        
        push();
        translate(this.body.position.x, this.body.position.y);
       fill(250,30,30);
      ellipse(0,0,this.r,this.r);
        pop();
      }
}