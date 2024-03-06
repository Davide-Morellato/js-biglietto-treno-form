// sostituite l’input dell’età con una select dove l’utente potrà selezionare il tipo di sconto scegliendo tra queste 3 opzioni:
// nessuno (default)
// minorenne
// over 65
// Questo necessariamente vi porta a dover modificare le condizioni dell’if con cui andate a calcolare lo sconto.
// Infine stampate nella pagina tutte le informazioni di recap del viaggio:
// prezzo base del biglietto
// percentuale di sconto applicata
// prezzo totale
// Aggiungete la validazione dei dati,
// il calcolo dovrà essere eseguito solo se:
// i km sono > 0 ed è un numero valido
// il nome del passeggero è diverso da stringa vuota




// RICAVARE INFORMAZIONI NOME DAL SUO ID INPUT [document.getElementById('id')]

const inputName = document.getElementById('name')   //string

console.log(inputName)


// RICAVARE INFORMAZIONI COGNOME DAL SUO ID INPUT [document.getElementById('id')]

const inputSurname = document.getElementById('surname')   //string

console.log(inputSurname)



// RICAVARE INFORMAZIONI KM DAL SUO ID INPUT [document.getElementById('id')]

const inputKilometri = document.getElementById('kilometri')   //string

console.log(inputKilometri)


// RICAVARE INFORMAZIONI ETA' DAL SUO ID INPUT [document.getElementById('id')]

const inputAge = document.getElementById('age')   //string

console.log(inputAge)


// RICAVARE INFORMAZIONI SUBMIT DAL SUO ID INPUT [document.getElementById('id')]

const inputSubmit = document.getElementById('submit')   //string

console.dir(inputSubmit)





// CALCOLO AL 'CLICK' SU SUBMIT [.addEventListener('click', ....)]

inputSubmit.addEventListener('click', function(){

        // console.log('You have entered the correct info') ; [<= prova se funziona il Listener]


    // RICAVO IL VALORE name DA inputName [.value]

    const name = inputName.value  //string
    console.log('Nome: ', name)


    // RICAVO IL VALORE name DA inputName [.value]

    const surname = inputSurname.value  //string
    console.log('Cognome: ', surname)


    // RICAVO IL VALORE Kilometri DA inputKilometri  [.value]

    const kilometri = parseInt(inputKilometri.value);  //number [<=mediante "parseInt"]
    console.log('Km: ', kilometri)
        

    // RICAVO IL VALORE age DA inputAge [.value]

    const age = inputAge.value  //string
    console.log('Età: ', age)



    // VALIDAZIONE DEI DATI:
    // [SE nome strettamente diverso (!==) da stringa vuota ('') AND (= operatore di funzione &&)
    //     cognome strettamente diverso (!==) da stringa vuota ('') AND
    //     kilometri strettamente diverso (!==) da stringa vuota ('') AND
    //     kilometri maggiore 0 AND
    //     kilometri NOT(!) isNaN (è Not a Number) (--> NON E' UN NaN)
    //  ALTRIMENTI alert]
    
    if (name !== '' &&
        surname !== '' &&
        kilometri !== '' &&
        kilometri > 0 &&
        !isNaN(kilometri)){
        } else {
            alert("Il campo Nome è obbligatorio.");
        }



    // PREZZO DEL BIGLIETTO: 0.21€/km

    let price = (0.21 * kilometri);    //number


    // DICHIARO LA VARIABILE discount (così da averla poi globale nelle Funzioni)

    let discount = 'none'


    
    // DICHIARO LA VARIABILE finalPrice COME LA VARIABILE price
    // (perchè poi all'interno delle Funzioni la svolgo per averla scontata e
    // usarla nella stampa del biglietto finale per differenziarla dal prezzo del biglietto senza sconto)
    // per capire cosa intendo andare in GoLive e verificare cosa accade

    let finalPrice = price




    // CALCOLO

    if(age === 'under18'){           // SE MINORENNE SCONTO 20%  [=== per comparare che il valore 'age' corrisponda al 'value' selezionato]
        discount = '20%' ;       // SCONTO APPLICATO (PER LA STAMPA DEL BIGLIETTO)     
        const priceOff = (price * 0.2) ;                               //number
        finalPrice = (price - priceOff) ;                        //number
        console.log('Prezzo Sconto 20%: ', finalPrice.toFixed(2)) ;      //number
    } else if (age === 'over65'){   // ALTRIMENTI SE OVER 65 SCONTO 40% 
        discount = '40%' ;      // SCONTO APPLICATO (PER LA STAMPA DEL BIGLIETTO)
        const priceOff = (price * 0.4) ;                               //number
        finalPrice = (price - priceOff) ;                        //number
        console.log('Prezzo Sconto 40%: ', finalPrice.toFixed(2)) ;      //number
    } 


    // POSSO OMETTERLA PERCHE' E' UNA CONDIZIONE CHE SI SVOLGE UGUALMENTE

    // else{                             // ALTRIMENTI PREZZO INTERO 
    //     discount = 'none'
    //     let priceOff = 0           // SCONTO APPLICATO (PER LA STAMPA DEL BIGLIETTO)                             
    //     finalPrice = (price - priceOff)
    //     console.log('Prezzo Intero: ', finalPrice.toFixed(2)) ;               //number
    // }




    
    // RICAVO INFORMAZIONI TICKET DAL SUO ID INPUT [document.getElementById('id')]

    const inputTicket = document.getElementById('ticket')   //string

    console.log(inputTicket)


    // STAMPO I VALORI NELLA PAGINA NELL'inputTicket [.innerHTML]
    // INSERISCO ELEMENTI <tag> CON RISPETTIVA CLASSE,
    // INSERISCO CONTENUTO (${}) USANDO LE VARIABILI (const) USATE IN JS

    inputTicket.innerHTML = `
    <h2 class="ticket_info"> Il Tuo Biglietto </h2>
    <div class="ticket_name_surname"> Nome e Cognome Passeggero: ${name + ' ' + surname} </div>

    <div class="ticket_price"> Prezzo del Biglietto: € ${price} </div>

    <div class="ticket_discount"> Sconto Applicato: ${discount} </div>

    <div class="ticket_price"> Prezzo Finale: € ${finalPrice} </div>

    <input id="submit" type="submit" placeholder="Stampa" />
    `
})