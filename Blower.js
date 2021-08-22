class Blower{
    constructor(x,y,w,h){
        this.body = Bodies.rectangle(x,y,w,h,{isStatic:true});
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        World.add(world, this.body);
    }

    show(){
        var pos = this.body.position;

        push();
        fill("#8D6E63");
       // noStroke();
        rectMode(CENTER);
        rect(pos.x, pos.y, this.w, this.h);
        pop();
    }
}