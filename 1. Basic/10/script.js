"use strict";
// Write a JavaScript program to convert temperatures to and from Celsius, Fahrenheit.  Go to the editor
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and 
// f = temperature in Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C
function celsiusToFahrenheit(celsius) {
    console.log(celsius / 5 * 9 + 32 + '°F');
}
function fahrenheitToCelsius(fahrenheit) {
    console.log((fahrenheit - 32) / 9 * 5 + '°C');
}
celsiusToFahrenheit(60);
fahrenheitToCelsius(45);
// 140
// 7.222222222222222
