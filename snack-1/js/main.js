/*
*Snack1*
Crea un array vuoto e chiedi all’utente un numero 
da inserire nell’array.
Continua a chiedere i numeri all’utente e a inserirli nell’array 
fino a quando la somma degli elementi è minore di 50.
*/

//creo array vuoto
let number = [];

//creo un ciclo while per chiedere numeri all'utente finchè 
//la loro somma non è minore di 50
let sum = 0;
while ( sum < 50){
    //chiedo il numero
    let numberUser = parseInt(prompt('Inserisci un numero'));
    //sommo i numeri
    sum += numberUser;
    //aggiungo il numero dell'utente all'array
    number.push(numberUser);
    
}

console.log(number);
console.log(`La somma è: ${sum}`);