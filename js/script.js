'use strict';  
var output = document.getElementById('celsius-output');
var celsiusButton = document.getElementById('celsius-button');
var celsiusDegrees;
var fahrenheitOutput = document.getElementById('fahrenheit-output');
var fahrenheitButon = document.getElementById('fahrenheit-button');
var fahrenheitDegrees;

output.innerHTML = 'Click the button! Convert Celsius!' + '<br><br>' + output.innerHTML;
celsiusButton.addEventListener('click', function(){
	celsiusDegrees = window.prompt('Enter the temperature in Celsius degrees.'); 
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

fahrenheitOutput.innerHTML = 'Click the button! Convert Fahrenheit!' + '<br><br>' + fahrenheitOutput.innerHTML;
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




