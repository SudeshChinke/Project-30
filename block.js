class Block{
    constructor(x, y, width, height) {
        var options = {
          isStatic:false
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.Visiblity = 225;
        this.image=loadImage("block.png");
        World.add(world, this.body);
      }

      display(){
        var pos = this.body.position;

        if( this.body.speed < 3){
        push();      
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width, this.height);
        pop();

      }else {
       World.remove(world,this.body);
       push();
       this.Visiblity = this.Visibility-5;
       tint(255,this.Visiblity);
       image(this.image,pos.x,pos.y,this.width,this.height);
       pop();
      }
    }
}
