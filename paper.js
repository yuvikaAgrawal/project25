class Paper{
    constructor(){
        var options={
            isStatic:false,
            restitution:0.2,
            friction:0.3,
            density:1.2
            
        }
        
        this.body=Bodies.circle(250,540,20,options),
       
        this.image=loadImage("paper.png")
        World.add(world,this.body)
       
    }
    display(){
        var pos =this.body.position
        var angle=this.body.angle
        push()
        fill("white")
        rotate(angle)
        imageMode(CENTER)
       image(this.image,pos.x,pos.y,55,55)
       pop()
    }
}