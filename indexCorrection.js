// INTRO ALGORITHMIE
// ----------------------

// Définition: méthode permettant de résoudre un problème de manière systématique.

// ----------------------------------------
// I. LES VARIABLES
// ----------------------------------------

// Les variables nous servent à stocker des valeurs
// Nous pouvons d'ailleurs stocker toute sorte de valeurs

// Pour utiliser une variable, nous devons d'abord l'initialiser
// En lui donnant son nom, puis sa valeur de base.

// Obsolète:
// var prenom = "Julien"
// console.log(): Affiche dans le terminal ce que l'on souhaite
// console.log(prenom)
// var age = 24
// console.log(age)

// Depuis 2015, en Javascript, nou sommes passé à la version
// EcmaScript6 (ES6), et nous utilisons de nouvelles normes

// a. La CONST
// -----------

// Au lieu d'utiliser 'var', nous utilisons 'const'
// Une 'const' ne peut pas être modifiée
// Ni re-initialiser
// const prenom = "Julien"
// prenom = "gilles"
// console.log(prenom);

// a. La LET
// -----------

// Au lieu d'utiliser 'var', nous pouvons utiliser 'let'
// Une 'let' peut être modifiée
// Mais pas re-déclarer
// let prenom = "Julien"
// prenom = "gilles"
// let prenom = "mohamed"
// console.log(prenom);

// c. La convention Camel Case
// ----------------------------

// Pour définir le nom d'une variable, et si ce même nom
// est un mot composé, nous utilisons le camel case
// Il suffit de mettre le 2eme mot en majuscule
// const pereNoel = 'blablabla'
// const chocolatBlanc = 'blablabla'
// const tireBouchon = 'blablabla'

// ----------------------------------------
// II. LES DIFFERENTS TYPES DE VALEURS
// ----------------------------------------

// Il existe plusieurs types de valeurs
// Que l'on peut assigner à nos variables
// Voici leur liste:

// - nombres (number) : 24, 32, etc .....
// - les chaînes de caractère (string) : 'Celia', 'Nogoye'
// - les tableaux (array)
// - les objets (object)
// - vrai / faux (boolean: true / false)

// ----------------------------------------
// A. LES NOMBRES (NUMBER)
// ----------------------------------------

// Les nombres, comme le nom l'indique, nous servent à faire différents calculs
// const num1 = 50;
// const num2 = 30;

// 1ere façon de faire des calculs:
// const calcul = num1 + num2
// const calcul = num1 - num2
// const calcul = num1 / num2
// const calcul = num1 * num2

// 2eme façon de faire des calculs:
// let num1 = 50
// const num2 = 30

// Ajouter une valeur à une variable
// Sans recréer une troisième:
// num1 = num1 + num2
// num1 = num1 - num2
// num1 = num1 / num2
// num1 = num1 * num2

// Méthode un peu plus rapide:
// num1 = num1 + num2
// num1 += num2

// num1 = num1 - num2
// num1 -= num2

// num1 = num1 * num2
// num1 *= num2

// num1 = num1 / num2
// num1 /= num2

// const age = 30
// const plusTard = age + 10
// console.log(plusTard);

// ----------------------------------------
// B. LES CHAINES DE CARACTERES (STRING)
// ----------------------------------------

// Les String sont tout simplement des phrases
// Elles sont déclarées entre guillemets doubles ou simples ("", '')
// Attention aux apostrophes si vous utilisez des guillemets simples

// const text = "Bonjour"
// const otherText = 'Bonjour'
// const greetings = "Bonjour je m'appelle Julien"

// La concaténation
// ------------------

// La concaténation est le fait d'additionner du texte
// Ou d'autres valeurs
// const prenom = "Julien"
// const greetings = "Bonjour"
// const resultat = greetings + " " + prenom
// console.log(resultat);

// Exercice: 
// Générer une phrase à l'aide de 2 variables, qui sera: "Bonjour ..., tu as ... ans".
// Affichez cette String dans le terminal avec console.log()
// const prenom = "Selim"
// const age = 19
// const res = "Bonjour " + prenom + ", tu as " + age + " ans."
// console.log("Bonjour " + prenom + ", tu as " + age + " ans.");

// -----------
// WARNING
// -----------

// const num1 = "50"
// const num2 = "30"
// console.log(num1 * num2);

// --------------------
// Les Templates String
// --------------------

// Depuis ES6, nous pouvons utiliser des backquotes
// afin d'intégrer du Javascript à l'intérieur de String

// Exemple:
// const prenom = "Selim"
// const age = 19
// const res = "Bonjour " + prenom + ", tu as " + age + " ans."
// const res = `
//   Bonjour ${prenom}, tu as ${age} ans.
//   Bonjour ${prenom}, tu as ${age} ans.
//   Bonjour ${prenom}, tu as ${age} ans.
// `
// console.log(res);

// ----------------------------------------
// II. LES ARRAY (TABLEAUX)
// ----------------------------------------

// Les array sont un type de valeur extrèmement utilisés dans tous langage
// de programmation, et sont extrèmement puissants.
// Les array peuvent tout stocker, sans limite.
// Pour déclarer un array, nous utilisons les crochets []

// const prenom = "Julien"
// const signe = "Verseau"

// Lorsque l'on ajoute des valeurs à l'intérieur d'un array
// Nous devons les séparer par une virgule:
// const arr = [prenom, signe, 40, "Hello World"]

// Autre exemple:
// const amazoon = ["gilles", "mohamed", "lionel"]

// Nous pouvons accéder à n'importe quel item grâce à son index
// Pour ce faire: nous appellons notre tableau, puis l'index entre crochets
// ex: tableau[0]
// Attention: Les ordinateurs commencent à compter à partir de 0
// console.log(amazoon[2])

// TIPS: Les Strings sont "considérées" comme des array
// const text = "Bonjour"
// console.log(text[0])

// ---------------------------------
// AJOUTER DES DONNEES A VOTRE ARRAY
// ---------------------------------

// const client1 = "Celia"
// const client2 = "Nogoye"
// const amazoon = [client1, client2]

// Pour ajouter un item A LA SUITE d'un array
// Nous allons utiliser la méthode array.push()
// const client3 = "Francisco"
// amazoon.push(client3)
// const client4 = "Lionel"
// amazoon.push(client4)

// Pour ajouter un item AU DEBUT d'un array
// Nous allons utiliser la méthode array.unshift()
// const client5 = "Mohamed"
// amazoon.unshift(client5)

// Pour supprimer un item A LA FIN d'un array
// Nous allons utiliser la méthode array.pop()
// amazoon.pop()

// Pour supprimer un item AU DEBUT d'un array
// Nous allons utiliser la méthode array.shift()
// amazoon.shift()
// console.log(amazoon);

// Exercice sur les array
// ----------------------

// Vous devez créer 2 variables, pour votre prénom et votre nom.
// Vous assignerez ces variables dans un array.

// A l'aide de ce que l'on a appris récemment (de manière automatique), 
// votre array devra afficher:
// votre prénom, votre nom, vos initiales
// résultat attendu dans la console: ['Julien', 'Delusseau', 'JD']

// Solution de Gilles:
// const nom ="valot"
// const prenom ="gilles"
// const res = `${nom[0]}.${prenom[0]}`

// const arr = [nom,prenom,res]
// console.log(arr)

// ----------------------------------------
// III. LES OBJECT (OBJETS)
// ----------------------------------------

// Les Object sont des schémas qui nous servent à contenir
// plusieurs propriétés.
// Ces Object seront par la suite modifiables à volonté.
// Vous les retrouverez principalement dans la programmation orienté objet (POO)
// Pour déclarer un objet, nous utilisons les acolades {}

// Pour insérer des propriétés, nous utilisons un système de 'clé': 'valeur'
// const client1 = {
//   prenom: 'Julien',
//   nom: 'Delusseau',
//   email: 'julien@gmail.com',
//   tel: '0708090405',
//   basket: [
//     {
//       article: 'Jean',
//       price: 50
//     },
//     {
//       article: 'Shoes',
//       price: 99
//     }
//   ]
// }

// Pour accéder à une valeur définie, il suffit d'appeler l'objet.clé
// console.log(client1.basket[1].article)

// Pour modifier une valeur définie, il suffit d'appeler l'objet.clé et la modifier
// client1.email = "nouvelemail@gmail.com"
// console.log(client1);

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

// Correction de Sélim:
// --------------------

// const christmas = [
//   {
//       article: 'Play V',
//       price: 499
//   },
//   {
//       article: 'iPhone XIII',
//       price: 999
//   }
// ]

// console.log(`Tu vas payer ${christmas[0].price}€ pour la ${christmas[0].article} et ${christmas[1].price}€ pour l'${christmas[1].article} ce qui te fait au total ${christmas[0].price + christmas[1].price}€`)

// ----------------------------------------
// IV. LES BOOLEANS (TRUE / FALSE)
// ----------------------------------------

// Les boolean nous permettent de définir si une valeur, donnée, etc...
// est vrai (true) ou faux (false)
// Nous utilisons les boolean principalement
// lorsque l'on veut effectuer une condition

// Exemple:
// const a = 5
// const b = 10
// console.log(a === b)

// Il existe plusieurs façons de déterminer si quelque chose
// est 'truesy' ou 'falsy'

// ------------------
// a. Les opérateurs
// ------------------

// Il existe plusieurs opérateurs en Javascript
// qui nous permettent de vérifier des valeurs entre elles

// const a = 5
// const b = 10

// a == b : a égale b ?
// a === b : a égale b ET du même type ?
// === : pour la valeur ET le type

// a != b : a différent b ?
// a !== b : a différent b ET même type ?

// a > b : a supérieur b ?
// a >= b : a supérieur ou égale b ?

// a < b : a inférieur b ?
// a <= b : a inférieur ou égale b ?

// const gilles = 40
// const selim = 19
// console.log(selim !== gilles);

// -----------------------------------------
// b. La condition IF / ELSE IF / ELSE
// -----------------------------------------

// SI (la condition est remplie) {
//   fais quelque chose
// } OU SINON (la condition est remplie) {
//   fais quelque chose
// } SINON {
//   fais quelque chose
// }

// const a = 5
// const b = 10

// if (a === b) {
//   console.log("la 1ere condition est remplie");
// } else if (a <= b) {
//   console.log("la 2eme condition est remplie");
// } else if (b > a) {
//   console.log("la 3eme condition est remplie");
// } else {
//   console.log("toutes les autres conditions sont remplies");
// }

// Exercice:
// Créez une variable, qui prend en valeur un age
// Si cet age est supérieur ou égal à 18, vous afficherez: "Tu as le droit de boire!"
// Si cet age est inférieur à 18, vous afficherez: "Rentres chez toi"
// Si cet age est inférieur à 15, vous afficherez: "Va boire ton lait"

// Correction de Julien:
// const age = 17
// if (age >= 18) {
//   console.log("Tu as le droit de boire!");
// } else if (age < 15) {
//   console.log("Va boire ton lait");
// } else if (age < 18) {
//   console.log("Rentres chez toi");
// }

// -------------------------------------------
// Effectuer plusieurs condition en même temps
// -------------------------------------------

// const a = 5
// const b = 10
// const c = 10

// || veut dire 'ou' pour une double condition
// if (a === b || a < b) {
//   console.log("condition remplie")
// }

// && veut dire 'et' pour une double condition
// if (a < b && b === c) {
//   console.log("condition remplie")
// }

// const age = 17
// if (age >= 18) {
//   console.log("Tu as le droit de boire!");
// } else if (age < 18 && age >= 15) {
//   console.log("Rentres chez toi");
// } else {
//   console.log("vas boire ton lait");
// }

// -----------------------------------------
// c. La condition ternaire
// -----------------------------------------

// La condition ternaire remplie la même fonction
// que la condition IF, sauf qu'elle ne s'écrit en une seule instruction

// ? représente le IF
// : représente le ELSE
// const a = 5
// const b = 10
// const c = 10
// const exemple = `${a === b ? "a égale à b" : b === c ? "b est égale à c" : "tout le reste"}`
// console.log(exemple);

/* 
----------------------------------------------------------
LES FONCTIONS: FUNCTION
----------------------------------------------------------
*/

// Un des grands principes en développement, c'est d'avoir
// un code DRY (Don't Repeat Yourself)

// Personne numéro 1:
// const prenom = 'julien'
// const age = 36
// const signe = "verseau"
// const resultat = `Bonjour ${prenom}, tu as ${age} ans et tu es du signe ${signe}.`
// console.log(resultat);

// Pour éviter de faire du copier/coller, et automatisé le tout,
// nous allons utiliser les fonctions

// 1ère façon de déclarer / créer une fonction
// function greetings() {
//   const prenom = 'julien'
//   const age = 36
//   const signe = "verseau"
//   const resultat = `Bonjour ${prenom}, tu as ${age} ans et tu es du signe ${signe}.`
//   console.log(resultat);
// }
// Pour utiliser notre fonction, nous devons l'appeller
// greetings()

// Les Arguments d'une fonction
// ----------------------------

// Afin que notre fonction soit customisable
// Nous pouvons lui appliquer des paramètres

// function greetings(prenom, age) {
//   const resultat = `Bonjour ${prenom}, tu as ${age} ans.`
//   console.log(resultat);
// }

// greetings("julien", 36)
// greetings("gilles", 39)
// greetings("lionel", 24)

// 2eme façon d'écrire une fonction (depuis ES6)
// const calcul = (num1, num2) => {
//   console.log(num1 + num2);
// }
// calcul(10, 20)

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