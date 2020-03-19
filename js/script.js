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
    var degrees = parseFloat(celsiusDegrees);
    function celsiusTofahreheitConverter () {       
        return (degrees * 1.8 + 32) + ' Fahrenheit degrees';        
    };
    if (isNaN(degrees)) {
        output.innerHTML = 'Number is incorrect!';
        return;
    } 
    if (degrees < 0) {
    output.innerHTML = celsiusTofahreheitConverter () + ' - water is frozen.';
    } 
    else if (degrees >= 100) {
        output.innerHTML = celsiusTofahreheitConverter () +  ' - water evaporates.';
    }
    else {
        output.innerHTML = celsiusTofahreheitConverter () +  ' - water is liquid.';
    }
}); 


fahrenheitOutput.innerHTML = 'Click the button! Convert Fahrenheit!' + '<br><br>' + fahrenheitOutput.innerHTML;
fahrenheitButon.addEventListener('click', function() {
    fahrenheitDegrees = window.prompt('Enter the temperature in Fahrenheit degrees.');
    var degrees = parseFloat(fahrenheitDegrees);
    function fahrenheitTocelsiusCoverter () {
        return (fahrenheitDegrees - 32) / 1.8 + ' Celsius degrees';
    }; 
    if (isNaN(degrees)) {
        fahrenheitOutput.innerHTML = 'Number is incorrect!';
        return;
    } 
    if (fahrenheitDegrees < 32) {
        fahrenheitOutput.innerHTML = fahrenheitTocelsiusCoverter () + ' - water is frozen.';
    } 
    else if (fahrenheitDegrees >= 212) {
        fahrenheitOutput.innerHTML = fahrenheitTocelsiusCoverter () + ' - water evaporates.';
    }
    else {
        fahrenheitOutput.innerHTML = fahrenheitTocelsiusCoverter () + ' - water is liquid.';
    }
});
