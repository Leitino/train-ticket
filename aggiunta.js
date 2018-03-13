var today = new Date();
var hourNow = today.getHours(); //ora del sistema//
var greeting;

if (hourNow > 18){
  greeting = 'Buona Sera Fabio! scopri quanto spenderai';
}
else if (hourNow > 12){
  greeting = 'Buon pomeriggio Fabio! scopri quanto spenderai';
}
else if (hourNow > 0){
  greeting = 'Buon giorno Fabio! scopri quanto spenderai';
}
else {
  greeting = 'welcome!';
}
document.getElementById('prezzo').innerHTML =greeting;

var km  = prompt('Quanti km percorri? il risultato è in €');
var eta = prompt('quanti anni hai? sconto del 20% per minorenni e del 40% per over65');
var totale;
var prezzo;
var sconto18;
var sconto65;

prezzo = 0.21;
totale = prezzo * km;
sconto18 = prezzo * km * 20 / 100;
sconto65 = prezzo * km * 40 /100;

if (eta < 18){
  totale = prezzo * km - sconto18;
}
else if (eta >=65){
  totale = prezzo * km - sconto65;
}

document.getElementById('prezzo').innerHTML = totale;
