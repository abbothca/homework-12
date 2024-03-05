"use strict";

// для елементу з текстом 'Навігація по DOM дереву'
const foundById = document.getElementById("headerTwo");
const foundByCSSSelectors = document.querySelector("div>h2");
console.log("для елементу з текстом 'Навігація по DOM дереву'");
console.log(foundById);
console.log(foundByCSSSelectors);


// для першого елементу <section>
const foundFirstSection = document.querySelector("section");
// const searchFirstSectionByClassName = document.querySelector(".firstSection");
const foundFirstSectionByClassName = document.getElementsByClassName("firstSection");  //колекція
const foundFirstSectionAsFirstOfType = document.querySelector("section:first-of-type");
console.log("\nдля першого елементу <section>");
console.log(foundFirstSection);
console.log(foundFirstSectionByClassName);
console.log(foundFirstSectionAsFirstOfType);


// для елементу списку з текстом 'Пункт 5'
const foundLiByCSSSelectors = document.querySelector("li:nth-of-type(5)");
const foundLiByCSSSelectorsOther = document.querySelector("li+.text+li");
console.log("\nдля елементу списку з текстом 'Пункт 5'");
console.log(foundLiByCSSSelectors);
console.log(foundLiByCSSSelectorsOther);


// для елементу з класом 'hatredLevelBlock'
const foundByClassName = document.querySelector(".hatredLevelBlock");
const foundByClassNameOther = document.getElementsByClassName("hatredLevelBlock");
console.log("\nдля елементу з класом 'hatredLevelBlock'");
console.log(foundByClassName);
console.log(foundByClassNameOther); //колекція