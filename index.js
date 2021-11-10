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
// const arr = [8, 14]
// const moyenne = () => {
//   const res = (arr[0] + arr[1]) / 2
//   console.log(res);
// }
// moyenne()

// BONUS:

// const moyenne = (arr) => {
//   const res = (arr[0] + arr[1]) / 2
//   console.log(res);
// }
// moyenne([8, 16])
// moyenne([5, 9])
// moyenne([11, 19])


// Exo 1:
// Créez une fonction qui prendra en paramètre un string
// et devra afficher: 'Bonjour <string au choix>'

// const func = (phrasePif) => {
//     console.log(`Bonjour ${phrasePif}`)
// }

// func("le codage JS")

// Exo 2
// A l'aide de ce tableau:
// Calculez et affichez dans le terminal la somme des âges.

// const clients = [
//   {
//     firstname: 'Claire',
//     age: 28
//   },
//   {
//     firstname: 'Max',
//     age: 32
//   },
//   {
//     firstname: 'Léo',
//     age: 23
//   }
// ]

// console.log(clients[0].age + clients[1].age + clients[2].age)


// exo 3 :
// créer une condition qui indiquera si vous avez le droit de boire en france,
// avec en variable votre age.

// let age = 19

// if (age < 18) {
//     console.log("Rentre chez toi billy")
// } else {
//     console.log("Tu peux boire sauf si t'es rebeu comme moi")
// }

// Exo 4:
// Créer une fonction, qui prendra en paramètre deux nombres
// et qui affichera le résultat de l'addition de ces nombres

// const calcul = (num1,num2) => {
//     console.log(num1 + num2)
// }

// calcul (25,15)

// exo 5 (BONUS):
// avec ce tableau:

// const students = [
//   'fatima',
//   'corentin',
//   'ikram',
//   'raphaelle',
//   'miriame',
//   'danny',
//   "Kafalounak"
// ]
// const danny = students[students.length-1]
// const last = danny[danny.length-1]

// console.log (students[students.length-1][students[students.length-1].length-1])
// console.log(students.length)
// console.log(students[students.length-1][students.])
// afficher en UNE SEULE LIGNE de code max
// la dernière lettre du dernier élément du tableau


// EXERCICE:
// -------------

// A l'aide de ce tableau et d'une boucle:
 // Calculez et affichez dans le terminal la somme des âges


// const clients = [
//     {
//       firstname: 'Claire',
//       age: 28
//     },
//     {
//       firstname: 'Max',
//       age: 32
//     },
//     {
//       firstname: 'Léo',
//       age: 23
//     }
//   ]

// let total = 0
// for (let i = 0; i < clients.length; i++) {
//   console.log(total);
//   total = total + clients[i].age
// }
// console.log(total);

 // -----------------------------------------------------
// EXERCICES
// -----------------------------------------------------

// 6. mettre dans un tableau 4 prénoms différents
// puis afficher le nombre de caractère au total
// c'est à dire le nombre de caratcères pour tous les prénoms additionés

const tab = ["Matthieu","Valentine","Agathe","Cléa" ]
let totalNom = 0

for (let i = 0; i < tab.length; i++) {
   totalNom = totalNom + tab[i].length
}

console.log(totalNom)

// 7. créer un tableau avec 4 nombres différents
// puis vous calculerez la somme de ces nombres
// et vous mettrez le résultat dans une variable
// afficher cette variable dans le terminal

const tableau = [3,1,5,17]
let totalTab = 0

for (let i = 0; i < tableau.length ; i++){
    totalTab = totalTab + tableau[i] 
}

console.log(totalTab)

// 8. créer 3 prénoms comme variables
// si un de ces 3 prénoms est vide, afficher dans le terminal: il manque un prenom
// si est un des prenoms est inférieur à 5 caractères, afficher dans le terminal: prenom trop court
// sinon afficher: tout est ok!

let r = "Ridzo"
let y = "Yassin"
let y2 = "Yohan"

if (r === "" || y === "" || y2 === "") {
    console.log("Il manque un prénom")
} else if (r.length < 5 || y.length < 5 || y2.length < 5) {
    console.log("prénom trop court")
} else {
    console.log("tout est ok")
}


// 9. Créer un array vide ([])
// Puis créez une fonction qui prendra 2 paramètres: 2 nombres
// Le seul but de la fonction sera de pousser le premier nombre à la suite de l'array
// x fois, par rapport au 2eme nombre
// exemple: function test(8, 3)
// résultat attendu: [8, 8, 8]

const t = []
const numbers = (x,y) => {
    for (let i = 0; i < y ; i++) {
        t.push(x)
    }
}
numbers(13,7)
console.log (t)

// 10. A l'aide de la phrase: "Le lorem ipsum est, en imprimerie, une suite de mots sans signification utilisée à titre provisoire pour calibrer une mise en page, le texte définitif venant remplacer le faux-texte dès qu'il est prêt ou que la mise en page est achevée."
// N'afficher dans le terminal que les 40 premiers caractères.
  
const str = "Veuillez m’excuser pour le retard, voici la synthèse du cours d'hier sur culture et droit numérique/ droit multimédia Bonne journée"
let resultat = ""
for (let i = 0 ; i < 40 ; i++) {
    resultat += str[i]
}
console.log(resultat)