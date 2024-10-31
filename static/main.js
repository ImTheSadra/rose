let w,h;
if (innerWidth < innerHeight){
    w = innerWidth; h = innerWidth;
} else {
    h = innerHeight; w = innerHeight;
}

class Shape{
    constructor(){
        this.speed = 0.01;
        this.k = 0;
        this.angles = [];
        this.stoped = false;
        
        for(let i = 0; i < 360; i++){
            this.angles.push(i*(Math.PI/180))
        }
    }

    draw(){
        let center = [w/2, h/2];
        let old = null;
        for(let angle of this.angles){
            let k = this.k;
            if(this.stoped){k = Math.round(k);}
            let r = (w/2)*Math.cos(k*angle);
            let pos = [
                center[0]+Math.cos(angle)*r,
                center[1]-Math.sin(angle)*r
            ];
            if (old != null){
                stroke(255);
                line(old[0], old[1], pos[0], pos[1]);
            }
            old = pos;
        }
        if (!this.stoped){this.k += this.speed;}

        if (this.k >= 10 || this.k <= 0){
            this.speed = -this.speed;
        }

        document.getElementById("k_show").innerText = "k : "+this.k.toString()
    }
}

let shape;

function setup(){
    createCanvas(w, h);
    let main = document.getElementsByTagName("main").item(0);
    main.className = "flex flex-row items-center justify-center w-full h-full bg-slate-800";
    shape = new Shape();
}

function draw(){
    background(41);
    shape.draw();
}

document.getElementById("btn").onclick = ()=>{
    let btn = document.getElementById("btn");
    if (shape.stoped){
        btn.innerText = "stop";
        shape.stoped = false;
    } else {
        btn.innerText = "continue";
        shape.stoped = true;
    }
}