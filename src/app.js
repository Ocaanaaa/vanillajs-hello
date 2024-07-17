/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma ", "The mailman ", "My bird "];
let action = [" ate ", " peed ", " crushed ", " broke "];
let what = ["my homework ", "my phone ", "the car "];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

function generateRandomIndex(length) {
  return Math.floor(Math.random() * length);
}

function myFunction() {
  let random1 = generateRandomIndex(who.length);

  let random2 = generateRandomIndex(action.length);

  let random3 = generateRandomIndex(what.length);

  let random4 = generateRandomIndex(when.length);

  document.getElementById("excuse").innerHTML =
    who[random1] +
    " " +
    action[random2] +
    " " +
    what[random3] +
    " " +
    when[random4] +
    " ";
}
myFunction();
