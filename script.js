"use strict";

const randArray = new Array();
//Function that add "Reverse" button
const addReverseButton = () => {
  let x = document.createElement("button");
  let t = document.createTextNode("Reverse");
  x.appendChild(t);
  document.body.appendChild(x);
};

//Function that return a random number between 1 and 6
const diceRollNum = () => {
  //Math.floor(Math.Random() * 6) --> returns random int from 0 to 5
  return Math.floor(Math.random() * 6) + 1;
};

//Function declaration working with static array
function createRandArray_dec() {
  const randArray = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  for (let i = 0; i < 10; i++) {
    randArray[i] = diceRollNum();
  }

  document.getElementById("dice_roll_result").textContent = "Result: ";
  for (let i = 0; i < 10; i++) {
    document.getElementById("dice_roll_result").textContent +=
      randArray[i] + " ";
  }
  addReverseButton();
}

const createRandArray_exp = function () {};

//Arrow function working with dynamic array
const createRandArray_arrowFu = () => {
  const randArrLength = randArray.length;
  //Clear randArray
  for (let i = 0; i < randArrLength; i++) {
    randArray.pop();
  }

  for (let i = 0; i < 10; i++) {
    randArray.push(diceRollNum());
  }

  document.getElementById("dice_roll_result").textContent = "Result: ";
  for (let i = 0; i < 10; i++) {
    document.getElementById("dice_roll_result").textContent +=
      randArray[i] + " ";
  }
};

const reverseArray = () => {
  const revArr = randArray.reverse();
  document.getElementById("reverse_result").textContent = revArr;
};
