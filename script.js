"use strict";

let selectedValue = document.getElementById("band").value;

function checkBand(selectedValue) {
  switch (selectedValue) {
    case "Beatles":
      beatlesFunction();
      break;

    case "Billy Idol":
      billyIdolFunction();
      break;

    case "Rolling Stones":
      rollingStonesFunction();
      break;

    default:
      console.log("Choose a band");
      break;
  }
}

function beatlesFunction() {
  const a = document.createElement("div");
  const b = document.createElement("img");
  const c = document.createAttribute.src;
  const d = document.createElement("div");
  const e = document.createElement("H1");
  const f = document.createTextNode("Beatles");

  const h = document.createElement("div");
  const i = document.createElement("p");
  const beatlesInfo =
    "This info needs to be developed for this band. I will place some interesting info later. This is just a filler for later. This is just a filler for later. This is just a filler for later. This is just a filler for later. This is just a filler for later. This is just a filler for later. This is just a filler for later. This is just a filler for later.";
  const j = document.createTextNode(beatlesInfo);

  a.classList.add("wrapper");
  b.classList.add("band-image");
  d.classList.add("wrapper");
  e.classList.add("band-name");
  h.classList.add("wrapper");
  i.classList.add("band-info");

  document.body
    .appendChild(a)
    .appendChild(b)
    .setAttribute("src", "Beatles_early days.jpg");
  document.body.appendChild(d).appendChild(e).appendChild(f);
  document.body.appendChild(h).appendChild(i).appendChild(j);
}

function billyIdolFunction() {
  const a = document.createElement("div");
  const b = document.createElement("img");
  const c = document.createAttribute.src;
  const d = document.createElement("div");
  const e = document.createElement("H1");
  const f = document.createTextNode("Billy Idol");

  const h = document.createElement("div");
  const i = document.createElement("p");
  const billyIdolInfo =
    "This info needs to be developed for this band. I will place some interesting info later. This is just a filler for later. This is just a filler for later. This is just a filler for later. This is just a filler for later. This is just a filler for later. This is just a filler for later. This is just a filler for later. This is just a filler for later.";
  const j = document.createTextNode(billyIdolInfo);

  a.classList.add("wrapper");
  b.classList.add("band-image");
  d.classList.add("wrapper");
  e.classList.add("band-name");
  h.classList.add("wrapper");
  i.classList.add("band-info");

  document.body
    .appendChild(a)
    .appendChild(b)
    .setAttribute("src", "Billy Idol.jpg");
  document.body.appendChild(d).appendChild(e).appendChild(f);
  document.body.appendChild(h).appendChild(i).appendChild(j);
}

function rollingStonesFunction() {
  const a = document.createElement("div");
  const b = document.createElement("img");
  const c = document.createAttribute.src;
  const d = document.createElement("div");
  const e = document.createElement("H1");
  const f = document.createTextNode("Rolling Stones");

  const h = document.createElement("div");
  const i = document.createElement("p");
  const rollingStonesInfo =
    "This info needs to be developed for this band. I will place some interesting info later. This is just a filler for later. This is just a filler for later. This is just a filler for later. This is just a filler for later. This is just a filler for later. This is just a filler for later. This is just a filler for later. This is just a filler for later.";
  const j = document.createTextNode(rollingStonesInfo);

  a.classList.add("wrapper");
  b.classList.add("band-image");
  d.classList.add("wrapper");
  e.classList.add("band-name");
  h.classList.add("wrapper");
  i.classList.add("band-info");

  document.body
    .appendChild(a)
    .appendChild(b)
    .setAttribute("src", "Rolling Stones.webp");
  document.body.appendChild(d).appendChild(e).appendChild(f);
  document.body.appendChild(h).appendChild(i).appendChild(j);
}
