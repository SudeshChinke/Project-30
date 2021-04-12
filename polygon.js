class Ball {
    constructor(x , y , r) {
      var options = {
        isStatic:false,
        restitution:0.5,
        density:0.5,
        friction:0.1

    }
        this.x=x;
		this.y=y;
		this.r=r;
        this.image=loadImage("polygon.png");
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);
    }  

    display(){
        var ballpos=this.body.position;		
        push()
        translate(ballpos.x, ballpos.y);
        imageMode(CENTER);
        ellipseMode(RADIUS);
        image(this.image, 0,0,this.r*2, this.r*2)
        pop()	

    }

}

