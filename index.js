//Variable set to random number:
let randomNumberOne = Math.round(Math.random() * 5 + 1);
let randomNumberTwo = Math.round(Math.random() * 5 + 1);

//Setting img attribute before setAttribute():
let diceImageOne = "images/dice" + randomNumberOne + ".png";
let diceImageTwo = "images/dice" + randomNumberTwo + ".png";

//Grabbing HTML elements:
let dice1 = document.querySelectorAll('Img')[0];
let dice2 = document.querySelectorAll('Img')[1];

//Using setAttribute() to change the dice image:
dice1.setAttribute('src', diceImageOne);
dice2.setAttribute('src', diceImageTwo);

//Grab H1 element:
let title = document.querySelector('h1')

//If Statement..Game Logic:
if(randomNumberOne > randomNumberTwo){
  title.innerHTML = "	&#128681 Payer One wins!!";
}else if (randomNumberOne < randomNumberTwo){
  title.innerHTML = "Payer Two wins!! &#128681";
}else{
  title.innerHTML = "Draw!!";
};
