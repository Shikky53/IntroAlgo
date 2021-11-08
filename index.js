// INTRO ALGO
// Déf : méthode permettant de résoudre un problème de manière systématique

//1. Les variables

// Les variables nous servent à stocker toute sorte de valeurs.
//Nous pouvons d'ailleurs stocker toute sorte de valeurs

//Pour utiliser une variable, nous devons d'abord l'initialiser
//En lui donnant son nom, puis sa valeur de base

//Méthode Obsolète :

//var pseudo = "Shadow"
// console.log() : Affiche dans le terminal ce que l'on souhaite 
///console.log(pseudo)

//var age = 42
//console.log(age)

//Depuis 2015 en js nous sommes passé à la version 
//EcmaScript (ES6) et utilisons de nouvelles normes

// A. la CONST
// Impossible à modifier
// Ne peux pas être re-déclarer 

//const age = 42
//console.log(age)

// A. la LET
// peut-être modifiée
// Mais ne peut pas être re-déclarer

// let anniv = "271101"
// anniv = "011127"
// let anniv = "251195"
// console.log(anniv);

// 2.Les différentes types de valeurs

// Il existe plusieurs types de valeurs
// Que l'on peut assigner à nos variables
// Voici leur liste:

// - nombres (number) : 24, 32, etc .....
// - les chaînes de caractère (string) : 'Celia', 'Nogoye'
// - les tableaux (array)
// - les objets (object)
// - vrai / faux (boolean: true / false)

// const prenom = "Satoru Gojo"
// let age = 28

// console.log("Bonjour M." + prenom + ", vous avez " + age)

// Exercice sur les array
// ----------------------

// Vous devez créer 2 variables, pour votre prénom et votre nom.
// Vous assignerez ces variables dans un array.

// A l'aide de ce que l'on a appris récemment (de manière automatique), 
// votre array devra afficher:
// votre prénom, votre nom, vos initiales
// résultat attendu dans la console: ['Julien', 'Delusseau', 'JD']

// const prenom = "Megumi"
// const ndFamille = "Fushiguro"
// const initial =  `${prenom[0]}.${ndFamille[0]}`
// const array = [prenom,ndFamille,initial]

// console.log(array)

// Exercice:
// ------------

// Calculer et afficher dans le terminal le prix de ce panier de Noël:

// const christmas = [
//     {
//         article: 'Play V',
//         price: 499
//     },
//     {
//         article: 'iPhone XIII',
//         price: 999
//     }
// ]

// console.log(`Tu vas payer ${christmas[0].price}€ pour la ${christmas[0].article} et ${christmas[1].price}€ pour l'${christmas[1].article} ce qui te fait au total ${christmas[0].price + christmas[1].price}€`)


// Exercice:
// Créez une variable, qui prend en valeur un age
// Si cet age est supérieur à 18, vous afficherez: "Tu as le droit de boire!"
// Si cet age est inférieur à 18, vous afficherez: "Rentres chez toi"
// Si cet age est inférieur à 15, vous afficherez: "Va boire ton lait"

// const age = 16

// if (age >= 18) {
//     console.log("Tu as le droit de boire!")
// }
//  else if (age < 15) {
//     console.log("Va boire ton lait")
// }
// else if (age < 18) {
//     console.log("Rentres chez toi")
// }

// Double Conditions

// const age = 17
// if (age >= 18) {
//   console.log("Tu as le droit de boire!");
// } else if (age < 18 && age >= 15) {
//   console.log("Rentres chez toi");
// } else {
//   console.log("vas boire ton lait");
// }

// Exercice:
// -----------------
// Créez un array contenant 2 nombres.
// Puis créez une fonction qui aura pour seul but
// d'afficher dans la console la moyenne de ces 2 nombres
// Bonus: utilisez les paramètres de votre fonction pour faire ce calcul


// Solution de Julien:
const arr = [8, 14]
const moyenne = () => {
  const res = (arr[0] + arr[1]) / 2
  console.log(res);
}
moyenne()

// BONUS:

// const moyenne = (arr) => {
//   const res = (arr[0] + arr[1]) / 2
//   console.log(res);
// }
// moyenne([8, 16])
// moyenne([5, 9])
// moyenne([11, 19])
