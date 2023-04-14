//создание ячеек карты
const map=".".repeat(15*15).split("")

const gameLevel=document.querySelector(".gameLevel")

function drawMap(mape) {
    mape.forEach(row => {
        let cletka=document.createElement("div")
        cletka.className="pusto"
        gameLevel.appendChild(cletka)
    });
}
drawMap(map)


class Vec{
    constructor(x,y){
        this.x=x
        this.y=y
    }

    plus(x,y){
        return new Vec (this.x+x,this.y+y)
    }

    time(mash){
        return new Vec(this.x*mash,this.y*mash)
    }
}

class Sneak{
constructor(pos){
    this.pos=pos
}

 static start(){
    return new Sneak(new Vec(0,0).plus(7,7).time(26.66))
 }
}
let sneak=Sneak.start()


 function drawSneak(sneake){
let elementSneak= document.querySelector(".sneak")

 elementSneak.style.left=sneake.x+"px"
 elementSneak.style.top=sneake.y+"px"
}



function runAnimation(){
let lastTime=0
   function goSneak(time){

 
drawSneak( sneak.pos.plus(0,lastTime/100))
lastTime=time
requestAnimationFrame(goSneak)
}
requestAnimationFrame(goSneak)
}
runAnimation()
