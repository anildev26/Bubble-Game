var timer = 10;
var score = 0;
var hitrn = 0;
function makeBubble (){
    var clutters = "";
    for (var i = 1; i <= 200; i++) {
        var rn = Math.floor(Math.random()*10);
        clutters += `<div class="bubble">${rn}</div>`;
    }

document.querySelector("#pbtm").innerHTML = clutters;
}

function runTimmer (){
    var timerint = setInterval(function(){
        if (timer > 0) {
            timer --;
            document.querySelector("#timerInterval").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over <br><br>Your Score : ${score}<h1>`;
        }
    },1000)
}

function getnewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hit").textContent = hitrn;
}

function increaseScore() {
    score += 10;
    document.querySelector("#score").textContent = score;

}   

document.querySelector("#pbtm").addEventListener("click",function(getdata){
   var clickedNumber = Number(getdata.target.textContent);
   console.log(clickedNumber)
   if(clickedNumber === hitrn){
    increaseScore();
    makeBubble();
    getnewHit();
   } 
   else if (timer >0){
   if(clickedNumber !== hitrn){
    score = score - 10;
    document.querySelector("#score").textContent = score;
    makeBubble();
    getnewHit();
   }
 } else {
    alert("Better Luck Next Time!");
 }
        
})

getnewHit();
runTimmer();
makeBubble();
