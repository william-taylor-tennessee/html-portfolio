"use strict";

let bandImage = "";
let bandName = "";
let bandInfo = "";
let selectedValue = document.getElementById("band").value;

function checkBand(selectedValue) {
  switch (selectedValue) {
    case "Beatles":
      console.log(`In Beatles area, selected value is ${selectedValue}`);
      bandImage = "Beatles_early days.jpg";
      bandName = "Beatles";
      bandInfo =
        "Beatles - Gosh, it just seems like yesterday when I first saw them on the Ed Sullivan show. That was in February 1964 !";
      bandFunction();
      break;

    case "Billy Idol":
      console.log(`In Billy Idol area, selected value is ${selectedValue}`);
      bandImage = "Billy Idol.jpg";
      bandName = "Billy Idol";
      bandInfo =
        "Billy Idol - He can't wait to give a rebel yell and tell you all about his white wedding !";
      bandFunction();
      break;

    case "Rolling Stones":
      console.log(`In Rolling Stones area, selected value is ${selectedValue}`);
      bandImage = "Rolling Stones.png";
      bandName = "Rolling Stones";
      bandInfo =
        "Rolling Stones - Girls, they're just the typical bad boys next door. The kind you could introduce to your granny !";
      bandFunction();
      break;

    case "Scuzz Twittly":
      console.log(`In Scuzz Twittly area, selected value is ${selectedValue}`);
      bandImage = "Scuzz_Twittly.jpg";
      bandName = "Scuzz Twittly";
      bandInfo =
        'Scuzz Twittly says "Keep Yer Hands Off My PBR" ! Scuzz is a good ole boy and he loves his PBR !';
      bandFunction();
      break;

    case "Twisted Sister":
      console.log(`In Twisted Sister area, selected value is ${selectedValue}`);
      bandImage = "Twisted Sister.jpg";
      bandName = "Twisted Sister";
      bandInfo =
        "Twisted Sister wants you to know; They are not gonna take it any more ! No way !";
      bandFunction();
      break;

    default:
      /*console.log("Choose a band");*/
      break;
  }
}

function bandFunction() {
  const bandImgDiv = document.createElement("div");
  const bandImg = document.createElement("img");
  const c = document.createAttribute.src;

  const bandNameDiv = document.createElement("div");
  const bandNameH1 = document.createElement("H1");
  const bandNameText = document.createTextNode(bandName);

  const bandInfoDiv = document.createElement("div");
  const bandInfoP = document.createElement("p");
  const bandInfoText = document.createTextNode(bandInfo);

  const extraGraphicImg = document.createElement("img");

  bandImgDiv.classList.add("wrapper");
  bandImg.classList.add("band-image");
  bandNameDiv.classList.add("wrapper");
  bandNameH1.classList.add("band-name");
  bandInfoDiv.classList.add("wrapper");
  bandInfoP.classList.add("band-info");
  extraGraphicImg.classList.add("guitar-img");

  document.body
    .appendChild(bandImgDiv)
    .appendChild(bandImg)
    .setAttribute("src", bandImage);
  document.body
    .appendChild(bandNameDiv)
    .appendChild(bandNameH1)
    .appendChild(bandNameText);
  document.body
    .appendChild(bandInfoDiv)
    .appendChild(bandInfoP)
    .appendChild(bandInfoText);
  document.body
    .appendChild(extraGraphicImg)
    .setAttribute("src", "3082_JuiceDrop.png");

  console.log(`bandImgDiv is ${bandImgDiv}`);
  console.log(`bandImg is ${bandImg}`);
  console.log(`bandImage is ${bandImage}`);
  console.log("");

  console.log(`bandNameDiv is ${bandNameDiv}`);
  console.log(`bandNameH1 is ${bandNameH1}`);
  console.log(`bandNameText is ${bandNameText}`);
  console.log(`bandName is ${bandName}`);
  console.log("");

  console.log(`bandInfoDiv is ${bandInfoDiv}`);
  console.log(`bandInfoP is ${bandInfoP}`);
  console.log(`bandInfo is ${bandInfo}`);
  console.log("");

  console.log(`extraGraphicImg is ${extraGraphicImg}`);
  console.log(`Extra Graphic Image is "3082_JuiceDrop.png"`);
}
