let rez=0, uslov=true;

let score = document.getElementById("score");
let krug = document.getElementById("jump");
let gameVer = document.getElementById("pokaziskor");

function giveHeight(){
    let max = 300;
    let min = -300;
    let visina = Math.floor(Math.random() * (max - min)) + min;
    return visina;
}

function giveWidth(){
    let max = 150;
    let min = -150;
    let sirina = Math.floor(Math.random() * (max - min)) + min;
    return sirina;
}

function update()
{
    if(uslov){
        let visina = giveHeight();
    let sirina = giveWidth();
    krug.style.top = `${visina}px`;
    krug.style.left = `${sirina}px`;
    rez++;
    score.innerHTML =  "Score: " +rez;
    console.log(visina);
    } 
}

function pause(){
    if(uslov==true) uslov=false;
    else uslov=true;
}

function kraj(){
  jedan.style.display = "none";
  gameVer.innerHTML = "Vas score je: " + rez;
  dva.style.display = "block";
  
}