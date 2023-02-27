let ran1=Math.floor(Math.random()*6)+1;
let ran2=Math.floor(Math.random()*6)+1;
document.getElementById("image1").src=`images/dice${ran1}.png`;
document.getElementById("image2").src=`images/dice${ran2}.png`;

if (ran1>ran2) {
    document.querySelector("h1").innerHTML="Player 1 Wins";
}else if(ran2>ran1){
    document.querySelector("h1").innerHTML="Player 2 Wins";}
else {document.querySelector("h1").innerHTML="Draw";}