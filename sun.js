class Sun{
    constructor(){
         var options={
            isStatic:true
        }
        this.body=Bodies.circle(100,100,20,options)
        World.add(world,this.body)
        this.r=20
    }

    display(){
        fill("Yellow")
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,this.r,this.r)
    }

} 