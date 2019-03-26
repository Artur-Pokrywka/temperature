'use strict';  
var output = document.getElementById('celsius-output');
var celsiusButton = document.getElementById('celsius-button');
var celsiusDegrees;
var fahrenheitOutput = document.getElementById('fahrenheit-output');
var fahrenheitButon = document.getElementById('fahrenheit-button');
var fahrenheitDegrees;

output.innerHTML = 'Click the button! Convert Celsius!' + '<br><br>' + output.innerHTML;
celsiusButton.addEventListener('click', function () {
    celsiusDegrees = window.prompt('Enter the temperature in Celsius degrees.');
    function converter () {   
    return (celsiusDegrees * 1.8 + 32) + ' Fahrenheit degrees';
    };
    if (celsiusDegrees != '') {
            if (celsiusDegrees < 0) {
                output.innerHTML = converter () + ' - water is frozen.';
            } 
            else if (celsiusDegrees > 100) {
                output.innerHTML = converter () +  ' - water evaporates.';
            }
            else {
                output.innerHTML = converter () +  ' - water is liquid.';
            }
        }
        else {
            output.innerHTML = 'Number is incorrect!'
        }
}); 


fahrenheitOutput.innerHTML = 'Click the button! Convert Fahrenheit!' + '<br><br>' + fahrenheitOutput.innerHTML;
fahrenheitButon.addEventListener('click', function(){
    fahrenheitDegrees = window.prompt('Enter the temperature in Fahrenheit degrees.');
    function coverter2 () {
        return (fahrenheitDegrees - 32) / 1.8 + ' Celsius degrees';
    };
    if (fahrenheitDegrees != '') {
        if (fahrenheitDegrees < 32) {
            fahrenheitOutput.innerHTML =  coverter2 () + ' - water is frozen.';
        } 
        else if (fahrenheitDegrees > 212) {
            fahrenheitOutput.innerHTML =  coverter2 () + ' - water evaporates.';
        }
        else {
            fahrenheitOutput.innerHTML =  coverter2 () + ' - water is liquid.';
        }
    }
    else {
        fahrenheitOutput.innerHTML = 'Number is incorrect!'
    }
});


                   // TYLE DZIAŁA
// function converter () {   
//     return (celsiusDegrees * 1.8 + 32);
// }
// output.innerHTML = converter () + " Fahrenheit degrees"; 
