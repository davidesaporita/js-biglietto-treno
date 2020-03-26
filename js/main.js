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

// 2) Calcolo del prezzo del biglietto standard (0,21€/km)
var prezzoStandard = (kmPercorrenza * 0.21).toPrecision(3);

// 3) Verifica delle condizioni per l'applicazione dello sconto (-20% per <18 e -40% per >= 65) e calcolo degli importi scontati
if ( etaPasseggero < 18) {
    prezzoScontato = (prezzoStandard * 0.80).toPrecision(3);
    alert('Compare ma sei minorenne! Ti becchi lo sconto del 20% e paghi solo € ' + prezzoScontato + ' | Ora clicca OK per avvisare automaticamente i tuoi genitori.');
} else if ( etaPasseggero >= 65 ) {
    prezzoScontato = (prezzoStandard * 0.60).toPrecision(3);
    alert('Grande Nonno! Tu hai il 40% di sconto. Si, non ti preoccupare il calcolo lo faccio io, devi sborsare € ' + prezzoScontato + ' | Aspetta, dove vai? Hai lasciato qui la dentiera!');
} else {
    alert('Vabbé tu paghi prezzo pieno, ovvero la modica cifra di €' + prezzoStandard );
}
