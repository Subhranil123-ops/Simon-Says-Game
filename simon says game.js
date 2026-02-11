let gameSeq=[];
let userSeq=[];
let colorbtn=['green','yellow','red','blue'];
let level=0;
let started=false;
let heading=document.querySelector('h3');
let btns=document.querySelectorAll('.color');
let body=document.querySelector('body');
document.addEventListener('keypress',function(){
    if(started==false){
        console.log('game started');
        started=true;
        levelUp();
    }
})
function flash(element){
    element.classList.add('flash');
    setTimeout(function(){
        element.classList.remove('flash');
    },250)
}
function levelUp(){
    level++;
    userSeq=[];
    heading.innerText=`Level=${level}`;
    let randomIndex=Math.floor(Math.random()*4);
    let randombtn=colorbtn[randomIndex];
    let randomcolor=document.querySelector(`.${randombtn}`);
    flash(randomcolor);
    gameSeq.push(randombtn);
    console.log(gameSeq);
}
function restartGame(){
    gameSeq=[];
    userSeq=[];
    level=0;
    started=false; 
    setTimeout(function(){
        heading.innerText='Start again by press any key';
    },1000);
}
function sequenceMatch(){
    let index=userSeq.length-1;
    if(gameSeq[index]===userSeq[index]){
        if(gameSeq.length===userSeq.length){
            setTimeout(levelUp,1000);
        }
    } else{
        heading.innerText=`Game Over!!!,Your score is ${level-1}.Try Again`;
        body.classList.add('flashingBody');
        setTimeout(function(){
            body.classList.remove('flashingBody');
        },500);
        restartGame();
    }
}
for(let btn of btns){
    btn.addEventListener('click',function(){
        console.log( `${btn.classList[1]} btn is pressed`);
        flash(btn);
        userSeq.push(btn.classList[1]);
        console.log(userSeq);
        sequenceMatch();        
    });
}

