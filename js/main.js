/**
 * Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero. 
 * Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.
 * Il prezzo del biglietto è definito in base ai km (0.21 € al km), ma va applicato uno sconto del 20% per i minorenni e del 40% per gli over 65.
 * Mostrare a schermo il prezzo del biglietto, indicando anche se è stato applicato un eventuale sconto.
 */

// 1) Inizializzazione variabili e raccolta dati

var kmPercorrenza = parseInt(prompt('Allora sentiamo, quanti chilometri devi percorrere?'));
alert('Non ti sembrano un po\' troppi alla tua età?');

var etaPasseggero = parseInt(prompt('A proposito, quanti anni hai?'));
alert('Clicca OK se hai appena dichiarato il falso');

var sconto = 0;

// 2) Calcolo del prezzo del biglietto standard (0,21€/km)

var prezzoStandard = (kmPercorrenza * 0.21).toPrecision(3);

// 3) Verifica delle condizioni per l'applicazione dello sconto (-20% per <18 e -40% per >= 65) e calcolo degli importi scontati

if ( etaPasseggero < 18) {
    prezzoFinale = (prezzoStandard * 0.80).toPrecision(3);
    sconto = 20;
} else if ( etaPasseggero >= 65 ) {
    prezzoFinale = (prezzoStandard * 0.60).toPrecision(3);
    sconto = 40;    
} else {
    prezzoFinale = prezzoStandard;
}

// 4) Inserimento dei valori ottenuti in HTML
document.getElementById('prezzo').innerHTML = prezzoFinale + ' <br>Complimenti! Stai anche usufruendo<br>del seguente sconto: ' + sconto + '%!';
