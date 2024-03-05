// sostituite l’input dell’età con una select dove l’utente potrà selezionare il tipo di sconto scegliendo tra queste 3 opzioni:
// nessuno (default)
// minorenne
// over 65
// Questo necessariamente vi porta a dover modificare le condizioni dell’if con cui andate a calcolare lo sconto.
// Infine stampate nella pagina tutte le informazioni di recap del viaggio:
// prezzo base del biglietto
// percentuale di sconto applicata
// prezzo totale





// RICAVARE INFORMAZIONI KM DAL SUO INPUT [document.getElementById('id')]

const inputKilometri = document.getElementById('kilometri')   //string

console.log(inputKilometri)


// RICAVARE INFORMAZIONI ETA' DAL SUO INPUT [document.getElementById('id')]

const inputAge = document.getElementById('eta')   //string

console.log(inputAge)


// RICAVARE INFORMAZIONI DALL'INPUT SUBMIT [document.getElementById('id')]

const inputSubmit = document.getElementById('submit')  //string

console.dir(inputSubmit)



// CALCOLO AL 'CLICK' SU SUBMIT [addEventListener('click' ....)]

inputSubmit.addEventListener('click', function(){

        // console.log('You have entered the correct info') ;

    // RICAVO IL VALORE DA inputKilometri  [.value]

    const kilometri = parseInt(inputKilometri.value);  //number [<=mediante "parseInt"]
    console.log('Km: ', kilometri)
        

    // RICAVO IL VALORE DA inputAge [.value]

    const age = inputAge.value  //string
    console.log('Età: ', age)


    // PREZZO DEL BIGLIETTO: 0.21€/km

    let price = (0.21 * kilometri);    //number

    // CALCOLO

    if(age === 'under18'){          // SE MINORENNE SCONTO 20%  [=== per comparare che il valore 'age' corrisponda al 'value' selezionato]
        const priceOff20 = (price * 0.2) ;                               //number
        const finalPrice20 = (price - priceOff20) ;                      //number
        console.log('Prezzo Sconto 20%: ', finalPrice20.toFixed(2)) ;    //number
    } else if (age === 'over65'){   // ALTRIMENTI SE OVER 65 SCONTO 40% 
        const priceOff40 = (price * 0.4) ;                               //number
        const finalPrice40 = (price - priceOff40) ;                      //number
        console.log('Prezzo Sconto 40%: ', finalPrice40.toFixed(2)) ;    //number
    } else{                             // ALTRIMENTI PREZZO INTERO
        console.log('Prezzo Intero: ', price.toFixed(2)) ;
    }
})