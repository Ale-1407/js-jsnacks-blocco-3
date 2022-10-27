/*
*Snack3* (Bonus)
Fai inserire un numero, che chiameremo N, all’utente.
Genera N array, quindi se l'utente inserisce 4, allora ci saranno 4 array.
Ognuno formato da 10 numeri casuali da 1 a 100.
Ogni volta che ne crei uno, stampalo.
*/

let n = parseInt(prompt('Inserisci un numero'));

let i = 0;

while( i < n ){
    
    let array = [];
    while ( array.length < 10 ){
        let randomNumber = Math.floor(Math.random() * 100);
        array.push(randomNumber);
    }

    console.log(array);

    i++;
}
