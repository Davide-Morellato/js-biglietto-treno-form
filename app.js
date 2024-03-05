// Scrivere un programma che chieda all’utente:
// 1. Il numero di chilometri da percorrere
// 2. Età del passeggero
// 3. Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
//     3.a il prezzo del biglietto è definito in base ai km (0.21 € al km)
//     3.b va applicato uno sconto del 20% per i minorenni
//     3.c va applicato uno sconto del 40% per gli over 65.




// RICAVARE INFORMAZIONI KM DAL SUO INPUT [document.getElementById('id')]

const inputKilometri = document.getElementById('kilometri')   //string

console.log(inputKilometri)


// RICAVARE INFORMAZIONI ETA' DAL SUO INPUT [document.getElementById('id')]

const inputAge = document.getElementById('età')   //string

console.log(inputAge)


// RICAVARE INFORMAZIONI DALL'INPUT SUBMIT [document.getElementById('id')]

const inputSubmit = document.getElementById('submit')  //string

console.dir(inputSubmit)



// CALCOLO AL 'CLICK' SU SUBMIT [addEventListener('click' ....)]

inputSubmit.addEventListener('click', function(){

    // console.log('You have entered the correct info') ;

// RICAVO IL VALORE DA inputKilometri

const kilometri = inputKilometri.value  //string
console.log('Km: ', kilometri)
    

// RICAVO IL VALORE DA inputAge

const age = inputAge.value  //string
console.log('Età: ', age)


// PREZZO DEL BIGLIETTO: 0.21€/km

let price = parseInt(0.21 * kilometri) ;  //number [mediante "parseInt"]


    // CALCOLO

    if(age >= 18 && age < 65){          // SE età tra i 18 ed i 65 anni PREZZO INTERO
        console.log('Prezzo Intero: ', price.toFixed(2)) ;               //number
    } else if (age < 18){               // ALTRIMENTI SE età < 18 anni SCONTO 20% 
        const priceOff20 = (price * 0.2) ;                               //number
        const finalPrice20 = (price - priceOff20) ;                      //number
        console.log('Prezzo Sconto 20%: ', finalPrice20.toFixed(2)) ;    //number
    } else{                             // ALTRIMENTI età > 65 anni SCONTO 40%
        const priceOff40 = (price * 0.4) ;                               //number
        const finalPrice40 = (price - priceOff40) ;                      //number
        console.log('Prezzo Sconto 40%: ', finalPrice40.toFixed(2)) ;    //number
    }

})
