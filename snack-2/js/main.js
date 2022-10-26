/*
*Snack2*
Il software deve chiedere per 5 volte all’utente di inserire
un numero. Il programma stampa la somma di tutti i numeri inseriti.
*/

let sum = 0;
//i numeri da inserire devono essere 5, creo un ciclo con una variabile somma
let i = 0;

// i < 5 ==> si riferisce al numero di volte che il ciclo deve iterare
// in questo caso quante volte il numero deve essere chiestto all'utente
while (i < 5){
    let number = parseInt(prompt('Inserisci un numero'));
    sum += number;
    i++;
}

//stampo la sommadei numeri inseriti dall'utente
console.log(`La somma è: ${sum}`);