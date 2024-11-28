// LES EXOS https://ludivineboc.github.io/chalenge-Js/
// EXO 5
// Role: 
// Paramètre:
// Retour:
let listeM = document.querySelector(".liste");

let listeCourses = [
  ["pain", 2],
  ["lait", 1],
  ["beurre", 1],
  ["fromage", 3],
  ["fruits", 4],
];

function afficherListe (listeC){
    listeC.forEach((element) => {
        console.log(`- ${element[0]} x${element[1]}`);
        listeM.innerHTML += `<li> ${element[0]} x${element[1]}</li>`
    });
  }



listeCourses.forEach((element) => {
  console.log(element[0]);
});
liste.innerHTML = listeCourses;

// EXO 2
// Role: calculer une valeur dans un tableau par une autre
// Paramètre:Le tableau, le nombre de personnes
// Retour:retour rien

let ingredients = [
  ["farine", 20],
  ["sucre", 30],
  ["beurre", 25],
  ["noix de coco", 20],
];

function liste(ListeIngredients, nbr) {
  ListeIngredients.forEach((ingred) => {
    console.log(`${ingred[1] * nbr}g de ${ingred[0]}`);
  });
}

// EXO 3
let tableau = [1, 2, 3, 4, 5]
for (let i = 0; i < tableau.length; i++) {
    const chiffre = tableau[i];
    multiplication(chiffre)
}
function multiplication(chiffre) {
    for(let i = 1; i<=10; i++){console.log(i*chiffre)
console.log(`${i} x ${chiffre} = ${i*chiffre}`);
    }
}

