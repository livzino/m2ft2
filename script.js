"use strict";

convertSquareMToSquareFt();

function convertSquareMToSquareFt(m2) {
  return m2 * 10.76391042;
}

let beregnetft2 = convertSquareMToSquareFt(1020);
console.log("beregnetft2", beregnetft2);

/* udregnRektangelAreal();

function udregnRektangelAreal(width, height) {
  return width * height;
}

let beregnetAreal = udregnRektangelAreal(30, 20);
console.log("beregnetAreal", beregnetAreal);


function momsBeregner(beloeb, moms = 25) {
  return beloeb * (1 + moms / 100);
}

let beregnetMoms = momsBeregner(100);
console.log("beregnetMoms", beregnetMoms); */
