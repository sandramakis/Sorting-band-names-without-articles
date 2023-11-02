"use strict";

const band = [
  "The Plot in you",
  "The Devil wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Cavemen",
  "The Bled",
  "The Midway Satte",
  "We came as Romans",
  "Counterparts",
  "Oh Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

const skip = function (article) {
  return article.replace(/^(a |the |an )/i, "").trim(); //using regex to replace the article we don't want with nthing
};

// sort the band array
const sortedBand = band.sort((a, b) => {
  // pass the value of a & b as parameters of the skip ftn
  return skip(a) < skip(b) ? -1 : 1;

  //   if (skip(a) < skip(b)) {
  //     return -1;
  //   } else if ((a = b)) {
  //     return 0;
  //   } else return 1;
});

console.log(band);

const bandUl = document.querySelector("ul");

bandUl.innerHTML = sortedBand.map((band) => `<li>${band}</li>`).join("");

console.log(bandUl);
