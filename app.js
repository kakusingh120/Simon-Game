let gameseq = [];
let userseq = [];

let btns = ["pink", "red", "green", "blue"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
     if(started == false){
        console.log("game is started");
        started = true;
     }

     levelup();
});

function gameflash(btn){
   btn.classList.add("flash");
   setTimeout( function () {
    btn.classList.remove("flash");
   }, 300)
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout( function () {
     btn.classList.remove("userflash");
    }, 300)
 }

function levelup(){
    userseq = [];
    level++;
    h2.innerText = `level ${level}`;
    // random btn choose
    let randIdx = Math.floor(Math.random() * 3);
    let randcol = btns[randIdx];
    let randbtn = document.querySelector(`.${randcol}`);
    gameseq.push(randcol);
    console.log(gameseq);
    gameflash(randbtn);
}

function checkans(idx){
    if(userseq[idx] === gameseq[idx]){
        if(userseq.length == gameseq.length){
           setTimeout(levelup, 1000);
        }
    } else{
        h2.innerHTML = `Game over! your score was <b>${level}</b> <br> Press any key to start.`;

        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function (){
            document.querySelector("body").style.backgroundColor = "rgb(85, 85, 85)";
        }, 300)
        reset();
    }
}

function btnpress(){
    // console.log(this);
    let btn = this;
    userflash(btn);

    usercol = btn.getAttribute("id");
    userseq.push(usercol);
    checkans(userseq.length-1);
}

let allbtns = document.querySelectorAll(".btn");

for(btn of allbtns){
    btn.addEventListener("click", btnpress);
}

function reset(){
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}