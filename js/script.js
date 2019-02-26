'use strict';  
// Zapisujemy w zmiennej odwołania do diva, w którym będziemy wypisywać teksty. 
var output = document.getElementById('celsius-output');
// Tylko zawartość pierwszego cudzysłowu będzie się zmieniać - reszta jest odpowiedzialna za dodanie pustych linii oraz odwróconą kolejność pisania tekstów. 
output.innerHTML = 'Click the button! Convert Celsius!' + '<br><br>' + output.innerHTML; 
// Zapiszemy w zmiennej odwołanie do guzika na stronie.
var celsiusButton = document.getElementById('celsius-button');
// Zmienna na stopnie Celcjusza. 
var celsiusDegrees;
// Kod będzie wykonywany zawsze po kliknięciu guzika.
celsiusButton.addEventListener('click', function(){
	// Wszystko oprócz ostatniej linijki kodu wykona się po każdym kliknięciu guzika. 
	celsiusDegrees = window.prompt('Enter the temperature in Celsius degrees.');
	// Tekst w cudzysłowiu będzie wyświetlony nad polem na odpowiedź. Odpowiedź mamy w zmiennej, wystarczy wyświetlić ją na stronie. 
	if (celsiusDegrees != '') {
        if (celsiusDegrees < 0) {
            output.innerHTML = 'Water is frozen.';
        } 
        else if (celsiusDegrees > 100) {
            output.innerHTML ='Water evaporates.';
        }
        else {
            output.innerHTML = 'Water is liquid.';
        }
	    output.innerHTML = celsiusDegrees + ' Celsius degrees'+ ' equals ' + celsiusDegrees * 1.8 + 32 + ' Fahrenheit degrees' + '!' + '<br><br>' + output.innerHTML;    
    }
    else {
        output.innerHTML = 'Number is incorrect!'
    }
}); 

var fahrenheitOutput = document.getElementById('fahrenheit-output');
fahrenheitOutput.innerHTML = 'Click the button! Convert Fahrenheit!' + '<br><br>' + fahrenheitOutput.innerHTML;
var fahrenheitButon = document.getElementById('fahrenheit-button');
var fahrenheitDegrees;
fahrenheitButon.addEventListener('click', function(){
    fahrenheitDegrees = window.prompt('Enter the temperature in Celsius degrees.');
    if (fahrenheitDegrees != '') {
        if (fahrenheitDegrees < 32) {
            fahrenheitOutput.innerHTML = 'Water is frozen.';
        } 
        else if (fahrenheitDegrees > 212) {
            fahrenheitOutput.innerHTML ='Water evaporates.';
        }
        else {
            fahrenheitOutput.innerHTML = 'Water is liquid.';
        }
	        fahrenheitOutput.innerHTML = fahrenheitDegrees + ' Fahrenheit degrees'+ ' equals ' + (fahrenheitDegrees - 32) / 1.8 + ' Celsius degrees' + '!' + '<br><br>' + fahrenheitOutput.innerHTML;    
    }
    else {
        fahrenheitOutput.innerHTML = 'Number is incorrect!'
    }
});




