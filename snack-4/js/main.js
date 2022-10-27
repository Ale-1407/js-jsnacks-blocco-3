let names = ['andrea', 'marco', 'fede'];
let nome = prompt('Inserisci il nome');
let i = 0;
let statoNome = false; //non sei iscritto


while( i < names.lenght ){

    if( nome == names[i]){
        //sei iscritto, quindi false => true
        statoNome = true;
    } else{
        statoNome = false;
    }

    i++;
}


if( statoNome ){
    console.log('Sei invitato');
} else {
    console.log('Iscriviti');
}

//opzione con includes
console.log( names.includes(nome));

