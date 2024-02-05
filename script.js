"use strict";

let selectedValue = document.getElementById("band").value;
let bandImage = "";
let bandName = "";
let bandInfo = "";

function checkBand(selectedValue) {
  switch (selectedValue) {
    case "Beatles":
      bandImage = "Beatles_early days.jpg";
      bandName = "Beatles";
      bandInfo =
        "Beatles - This info needs to be developed for this band. I will place some interesting info later. This is just a filler for later. This is just a filler for later. This is just a filler for later. This is just a filler for later. This is just a filler for later. This is just a filler for later. This is just a filler for later. This is just a filler for later.";
      bandFunction();
      break;

    case "Billy Idol":
      bandImage = "Billy Idol.jpg";
      bandName = "Billy Idol";
      bandInfo =
        "Billy Idol - This info needs to be developed for this band. I will place some interesting info later. This is just a filler for later. This is just a filler for later. This is just a filler for later. This is just a filler for later. This is just a filler for later. This is just a filler for later. This is just a filler for later. This is just a filler for later.";
      bandFunction();
      break;

    case "Rolling Stones":
      bandImage = "Rolling Stones.webp";
      bandName = "Rolling Stones";
      bandInfo =
        "Rolling Stones - This info needs to be developed for this band. I will place some interesting info later. This is just a filler for later. This is just a filler for later. This is just a filler for later. This is just a filler for later. This is just a filler for later. This is just a filler for later. This is just a filler for later. This is just a filler for later.";
      bandFunction();
      break;

    default:
      console.log("Choose a band");
      break;
  }
}

function bandFunction() {
  const a = document.createElement("div");
  const b = document.createElement("img");
  const c = document.createAttribute.src;
  const d = document.createElement("div");
  const e = document.createElement("H1");
  const f = document.createTextNode(bandName);

  const h = document.createElement("div");
  const i = document.createElement("p");
  const j = document.createTextNode(bandInfo);

  a.classList.add("wrapper");
  b.classList.add("band-image");
  d.classList.add("wrapper");
  e.classList.add("band-name");
  h.classList.add("wrapper");
  i.classList.add("band-info");
  document.body.appendChild(a).appendChild(b).setAttribute("src", bandImage);
  document.body.appendChild(d).appendChild(e).appendChild(f);
  document.body.appendChild(h).appendChild(i).appendChild(j);

  console.log(`Band Image is ${bandImage}`);
  console.log(`Band Name is ${bandName}`);
  console.log(`Band Info is ${bandInfo}`);
}
