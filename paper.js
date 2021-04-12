class Paper{
    constructor(){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
     this.body=Bodies.circle(100,100,20,options);
     this.radius=20;
     this.addImage=loadImage("Paper.png")
     World.add(world,this.body);
    }

    display(){
     imageMode(RADIUS) 
     image(this.addImage,this.body.position.x,this.body.position.y,this.radius,this.radius);



        
    }
}