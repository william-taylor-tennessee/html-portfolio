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

  const h = document.createElement("div");
  const i = document.createElement("p");
  const j = document.createTextNode("Need text for this band ...");

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
  const dd = document.createElement("div");
  const e = document.createElement("H1");
  const f = document.createTextNode("Rolling Stones, Bad Boys of Rock !");
  const h = document.createElement("div");
  const hh = document.createElement("div");
  const i = document.createElement("p");
  const j = document.createTextNode("The Rolling Stones goes back to the 1960's. They were part of the early 'Britsh Invasion'.");

  a.classList.add("wrapper");
  b.classList.add("egg");
  d.classList.add("wrapper");
  e.classList.add("foo");
  //h.classList.add("wrapper");
  h.classList.add("top-container");
  hh.classList.add("title-container");
  //i.classList.add("apple");
  document.body
    .appendChild(a)
    .appendChild(b)
    .setAttribute("src", "Rolling Stones.webp");
  document.body.appendChild(d).appendChild(e).appendChild(f);
  document.body.appendChild(h).appendChild(hh).appendChild(i).appendChild(j);
}

/*
function beatlesFunction() {
  var c = document.createElement("div");
  var w = document.createElement("div");
  var x = document.createElement("H1");
  var y = document.createTextNode("Beatles, the Fab Four !");
  var v = document.createElement("img");
  var a = document.createAttribute.src;
  document.body
    .appendChild(c)
    .appendChild(v)
    .setAttribute("src", "Beatles_early days.jpg");
  document.body.appendChild(w).appendChild(x).appendChild(y);
  c.classList.add("wrapper");
  w.classList.add("wrapper");
  x.classList.add("foo");
  v.classList.add("egg");
}*/
