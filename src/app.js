/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  document.querySelector("#reload").addEventListener("click", () => {
    document.querySelector("#Excuses").innerHTML = GeneradorExcusas();
  });
  document.querySelector("#Excuses").innerHTML = GeneradorExcusas();
};

let GeneradorExcusas = () => {
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
  let whoaleatorio = Math.floor(Math.random() * who.length);
  let actionaleatorio = Math.floor(Math.random() * action.length);
  let whataleatorio = Math.floor(Math.random() * what.length);
  let whenaleatorio = Math.floor(Math.random() * when.length);

  return (
    who[whoaleatorio] +
    " " +
    action[actionaleatorio] +
    " " +
    what[whataleatorio] +
    " " +
    when[whenaleatorio]
  );
};
