/*
let js = 'amazing';
if (js === 'amazing') alert('JavaScript is FUN!');

consto.log('jonas');
console.log(23)

let firstName = 'Jonas';

console.log(firstName);
console.log(firstName);
console.log(firstName);

let jonas_matilda = 'JM';
let $function = 27;

let person = 'jonas';
let PI = 3.1415;

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

let job1 = 'programmer';
let job2 = 'teacher';

console.log(myFirstJob)


// Boolean type
let javascriptIsFun = true;
console.log(javascriptIsFun);

// console.log(typeof true);
console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof 'Jonas');

// Dinamicki tip
javascriptIsFun = 'YES';
console.log(typeof javascriptIsFun)

// Definisemo promenljivu bez vrednosti, ukoliko je prikazesmo u konzoli videcemo da ova promenljiva drzi vrednost undefined
let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

// Postoji jedna greska kod typeof operatora a to je kada probamo da ocitamo typeof od null
console.log(typeof null) // it returns object


let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990;
// const job;

var job = 'programmer';
job = 'tecaher'a

lastName = 'Meza';
console.log(lastName)


// Matematicki operatori

const now = 2037;

const ageJonas = now - 1991;
const ageSarah = now - 2018;
console.log(ageJonas, ageSarah);

// ostatka matematickih operacija

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// 2 ** 3 znaci 3 = 2 * 2 * 2

// mozemo da spajamo dva stringa operatorom +
const firstName = 'Stefan';
const lastName = 'Meza';
// dodajemo ' ' dakle prazan string kako bi dobili rezultat gde je ime odvojedno od prezimena
// postoji bolji nacin za spajanje stringova ali o tome nesto kasnije
console.log(firstName + ' ' + lastName);

// Opearatori dodeljvivanja
let x = 10 + 5; // 15
x += 10; // x = x + 10
x *= 4; // x = x * 4
x++ // x = x + 1
x-- // x = x - 1
console.log(x)

// Uporedjujuci operatori uvek vracaju boolean vrednost (true ili false)
console.log(ageJonas > ageSarah);
console.log(ageSarah >= 18);

const isFullAge = ageSarah >= 18;

// Ovde se postavlja pitanje kako javascript zna koji operator treba prvo da odradi da li je to u pitanju > operator ili prvo treba da resi -
console.log(now - 1991 > now - 2018)


const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018)

let x, y; // mozemo da deklarisemo dve promenljive u istoj liniji, tacnije ovde smo deklarisali dve prazne promenlijve koje trenutno imaju vrednost undefined.

x = y = 25 - 10 - 5; // x = y = 10, x = 10
console.log(x, y)

const averageAge = (ageJonas + ageSarah) / 2;



// #Coding challenge #1
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

const marskWeight = 78;
const marksHeight = 1.69;

const johnWeight = 92;
const johnHeight = 1.95;

const marksBMI = marskWeight / (marksHeight * marksHeight);
const johnBMI = johnWeight / (johnHeight * johnHeight);

const markHigherBMI = marksBMI > johnBMI;

console.log(markHigherBMI, marksBMI, johnBMI)


// Type Conversion

const inputYear = "1991";
// Mozemo da koristimo number funckiju da konvertujemo sami string u broj, medjutim jako je bitno da razumemo da originalna promneljiva nije promenila tip podataka (inputYear je ostao string '1991')
console.log(Number(inputYear));
console.log(Number(inputYear) + 18);

console.log(Number("jonas")); // vratice NuN (not a number) dakle kad god Number() funkciji prosledimo nesto sto ne moze da se konvertuje u broj ona ce vratiti NuN
// ali ako proverimo tip NuN vratice nam da je njegov tip broj :)
console.log(typeof NaN);

// Takodje mozemo da konvertujemo brojeve u stringove
console.log(String(23));

// Type Coercion
// + operator konvertuje u stringove
console.log("I am " + 23 + " years old");

// -, *, / konvertuje u brojeve, ukoliko ne moze da konvertuje u broj taj string vratice NaN (broj koji nije validan)
console.log("23" - "10" - 3);
console.log("23" * "2");

// Truthy and Falsy vrednosti
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean("Jonas"));
console.log(Boolean({}));
console.log(Boolean(""));
console.log(!!"word");

const money = 0;

if (money) {
  console.log("Don't spend it all ;)");
} else {
  console.log("You should get a job!");
}

*/
