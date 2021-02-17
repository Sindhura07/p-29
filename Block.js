class Block{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':0.1
        }
        
        this.width = width;
        this.height = height;
        this.block = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.block);
      }
      display(){
        //var angle = this.block.angle;
        push();
        translate(this.block.position.x, this.block.position.y);
        rectMode(CENTER)     
        fill(223,133,0)
       



        strokeWeight(2);
        rect(0,0,this.width, this.height);
        pop();
      }
}