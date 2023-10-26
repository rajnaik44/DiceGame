//dice1

var randomNO1 = Math.floor(Math.random()*6) + 1;// 1-6

var randomeDiceImg = "dice" + randomNO1 + ".png";//dice1.png - dice6.png

var randonDiceSource = "images/" + randomeDiceImg;

var img1 = document.querySelectorAll("img")[0].setAttribute("src" , randonDiceSource);





//dice2
var randomNo2 = Math.floor(Math.random()*6) + 1;

var randomDiceImg2 = "dice" + randomNo2 + ".png";

var randomImgSource2 = "images/" + randomDiceImg2;

var img2 = document.querySelectorAll("img")[1].setAttribute("src" , randomImgSource2);



//
if (randomNO1 > randomNo2){
    document.querySelector("h1").innerHTML = "player 1 wins";
}
else if (randomNO1< randomNo2){
    document.querySelector("h1").innerHTML = "playwer 2 wins";
}
else{
    document.querySelector("h1").innerHTML = "its a draw";
}