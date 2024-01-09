"use strict";

const selectedValue = document.getElementById("band").value;

function checkBand(selectedValue) {
  switch (selectedValue) {
    case "Rolling Stones":
      rollingStonesFunction();
      break;

    case 1:
      rollingStonesFunction();
      break;

    case 2:
      beatlesFunction();
      break;

    case 3:
      beatlesFunction();
      break;

    case 4:
      beatlesFunction();
      break;

    case 5:
      beatlesFunction();
      break;

    case "Beatles":
      beatlesFunction();
      break;
  }
}

function beatlesFunction() {
  const a = document.createElement("div");
  const b = document.createElement("img");
  const c = document.createAttribute.src;
  const d = document.createElement("div");
  const e = document.createElement("H1");
  const f = document.createTextNode("Beatles, the Fab Four !");
  const ff = document.createTextNode("Rolling Stones, Bad Boys of Rock !");

  const h = document.createElement("div");
  const i = document.createElement("p");
  const j = document.createTextNode("Need text for this band");

  a.classList.add("wrapper");
  b.classList.add("egg");
  d.classList.add("wrapper");
  e.classList.add("foo");
  h.classList.add("wrapper");
  i.classList.add("apple");

  document.body
    .appendChild(a)
    .appendChild(b)
    .setAttribute("src", "Beatles_early days.jpg");
  document.body.appendChild(d).appendChild(e).appendChild(f);
  document.body.appendChild(h).appendChild(i).appendChild(j);
}

function rollingStonesFunction() {
  const a = document.createElement("div");
  const b = document.createElement("img");
  const c = document.createAttribute.src;
  const d = document.createElement("div");
  const e = document.createElement("H1");
  const f = document.createTextNode("Rolling Stones, Bad Boys of Rock !");

  const h = document.createElement("div");
  const i = document.createElement("p");
  const j = document.createTextNode("The Rolling Stones goes back to the 1960's. They were part of the early 'Britsh Invasion'.");

  a.classList.add("wrapper");
  b.classList.add("egg");
  d.classList.add("wrapper");
  e.classList.add("foo");
  h.classList.add("wrapper");
  i.classList.add("apple");

  document.body
    .appendChild(a)
    .appendChild(b)
    .setAttribute("src", "Rolling Stones.webp");
  document.body.appendChild(d).appendChild(e).appendChild(f);
  document.body.appendChild(h).appendChild(i).appendChild(j);
}
