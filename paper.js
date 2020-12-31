class Paper{
    constructor(x,y,r){
        var ball_options = {
            isStatic: false,
            restitution : 0.3,
            friction: 0.5,
            density :1.2
        
        }
        
        this.x = x;
        this.y = y;
        this.r = r;
        this.Body = Bodies.circle(this.x , this.y , this.r/2 , ball_options);
        World.add(world, this.Body);
    }
    display(){
        var paperPos = this.Body.position;

        push()
        translate(paperPos.x , paperPos.y);
        rectMode(CENTER);
        strokeWeight(1);
        fill("red");
        ellipse(0,0,this.r);
        pop ()
            
    }
}