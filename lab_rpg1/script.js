"use strict";

var userWins = 0;
var userDamage = 0;
var userHealth = 40;
var grantDamage = 0;
var grantHealth = 10;

// var playPrompt = prompt("Do you want to play?","Type yes or no");

// var userName = prompt(namePrompt);
// var namePrompt = "Please enter your name", "Type your name here";

// prompt("testing");

let greeting = prompt("would you like to play a game?");

if (greeting === "yes") {

  let userName = prompt("Please enter your name.");

  while (userWins < 3 && userHealth > 0) {

    if (grantHealth > 0) {

      // User's Turn
      userDamage = Math.floor(Math.random() * 2);
      // userDamage = 5;
      grantHealth -= userDamage;
      console.log(`${userName} inflicted ${userDamage} damage. Grant's health is ${ grantHealth}`);

      // Grant's Turn
      grantDamage = Math.floor(Math.random() * 2);
      // grantDamage = 12;
      userHealth -= grantDamage;
      console.log(`Grant inflicted ${grantDamage} damage. ${userName}'s health is ${ userHealth}`);
      // This happens if the user wins the round
    } else if (userWins < 3) { 
      userWins++;
      console.log(`You win round ${userWins}!`);
      grantHealth = 10;
    }
  }
  if (userHealth > 0) {
    console.log("You win the game!");
  } else {
    console.log("Sorry");
  } 
} else {
  console.log("See you next time!");
}