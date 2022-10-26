/*
*Snack1*
Crea un array vuoto e chiedi all’utente un numero 
da inserire nell’array.
Continua a chiedere i numeri all’utente e a inserirli nell’array 
fino a quando la somma degli elementi è minore di 50.
*/

//creo array vuoto
let number = [];

//chiedo all'utente un numero per l'array
let numberUser = parseInt(prompt('Inserisci un numero'));
number.push(numberUser);
console.log(number);

