/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  document.querySelector(".btn").addEventListener("click", () => {
    document.getElementById("excuse").innerText = MainRandom();
  });

  function MainRandom() {
    let who = ["The dog", "My grandma", "The mailman", "My bird"];
    let action = ["ate", "peed", "crushed", "broke"];
    let what = ["my homework", "my phone", "the car"];
    let when = [
      "before the class",
      "when I was sleeping",
      "while I was exercising",
      "during my lunch",
      "while I was praying"
    ];
    function RandomGenerator(list) {
      return list[Math.floor(Math.random() * list.length)];
    }

    return (
      RandomGenerator(who) +
      " " +
      RandomGenerator(action) +
      " " +
      RandomGenerator(what) +
      " " +
      RandomGenerator(when)
    );
  }
};
