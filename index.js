

var randomNumber1 = Math.ceil(Math.random()*6);
var randomNumber2 = Math.ceil(Math.random()*6);

console.log(randomNumber1);
console.log(randomNumber2);

document.getElementsByClassName("img1")[0].setAttribute("src","images\\dice"+randomNumber1+".png");
document.getElementsByClassName("img2")[0].setAttribute("src","images\\dice"+randomNumber2+".png");

var containerString = "";

if(randomNumber1>randomNumber2){
  containerString = "🚩Player 1 Wins!";
}else if(randomNumber1<randomNumber2){
  containerString = "Player 2 Wins!🚩";
}else {
  containerString = "🚩Draw!🚩";
}

console.log(containerString);

document.querySelector("div.container h1").innerHTML = containerString;
