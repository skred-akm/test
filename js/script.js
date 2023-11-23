const test = document.getElementById("main");
console.log(test);
const test2 = test.style.color ="#ff0000";
const test3 = test.textContent = "content modified "

let nouveauTexte = document.createTextNode("nouveau texte");
console.log(  nouveauTexte);
test.appendChild(nouveauTexte);

