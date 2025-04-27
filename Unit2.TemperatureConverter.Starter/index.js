/* Note: the reason I included detailed comments is to show my current level of understanding regarding this coursework */

/*Step 1: Define your convertToCelsius() function to take a Fahrenheit temperature, convert it to Celsius, and return the value. To convert the value from F to C, subtract 32 from the F value, then multiply it by 5/9. */

/*expression with assignment statement */
let fahrenheitTemp = Number(prompt("Enter a number you want to convert to Celsius:")); 

/* named function with an argument, and a return expression */
/* conversion formula is (fahrenheitTemp - 32) * (5/9) */
function convertToCelsius(fahrenheitTemp) {
    return (fahrenheitTemp - 32) * (5/9);
}

/* ------------------------------------------------------------------ */

/* Step 2: The createMessage() function should take the Fahrenheit temperature and the Celsius equivalent as arguments and determine how it feels based on certain temperature ranges. It should return a message telling the user the conversion from Fahrenheit to Celsius and how that feels. (See the chart about function definition.) */

/* named function with an agrument, conditional expressions, string assignments, and a return expression */
function createMessage(fahrenheitTemp) {
    let feeling;

    if (fahrenheitTemp <= 0) {
        feeling = "Dangerously Cold - Frostbite risk in minutes. Bundle up!";
    } else if (fahrenheitTemp >0 && fahrenheitTemp <=32) {
        feeling = "It's Freezing, thick coat, scarf, and gloves are recommended.";
    } else if (fahrenheitTemp >=33 && fahrenheitTemp <=50) {
        feeling = "It's cold, light to medium jacket weather.";
    } else if (fahrenheitTemp >=51 && fahrenheitTemp <=65) {
        feeling = "It's Cool, sweater weather, especially at night.";
    } else if (fahrenheitTemp >=66 && fahrenheitTemp <=75) {
        feeling = "It's Mild/Comfortable, most people love it, no jacket needed.";
    } else if (fahrenheitTemp >=76 && fahrenheitTemp <=85) {
        feeling = "It's Warm T-shirt weather, might get sweaty.";
    } else if (fahrenheitTemp >=86 && fahrenheitTemp <=95) {
        feeling = "It's Hot, find some shade and stay hydrated.";
    } else if (fahrenheitTemp >=96 && fahrenheitTemp <=105) {
        feeling = "It's very Hot, avoid outdoor activity if you can.";
    } else {
        feeling = "Extremely Hot - Heat warning territory! Be careful!";
    }

    return `${fahrenheitTemp} °F is equivalent to ${celsiusTemp.toFixed(1)} °C. ${feeling}`;
}

/* ------------------------------------------------------------------ */

/* Step 3: Define the rand() function to take a limit and return a random number between 0 and that number. */

/* named function with one argument and a return expression */
/* math.round return a value from 0 to limit*/
/* Math.random() gives a decimal number between 0 (inclusive) and 1 (exclusive) */
/* Multiplying by (limit) scales the result to a number between 0 and limit */
/* limit is a parameter that takes the value of 'fahrenheitTemp' in the function call: 
rand(fahrenheitTemp) */
function rand(limit) {
    return Math.round(Math.random() * limit);
}

/* --------------------------------------------------------------------- */

/*Below are different function call assignments */
/* alert() are pop-up dialog boxes with different messages to provide the user with feedback */
/* console.log() prints the information to the browser's console. */

const celsiusTemp = convertToCelsius(fahrenheitTemp);
console.log(celsiusTemp);

const messageOutput = createMessage(fahrenheitTemp, celsiusTemp);
console.log(messageOutput);
alert(messageOutput);

const randomFahrenheit = rand(fahrenheitTemp);
console.log(`Random Fahrenheit value (between 0 and your input): ${randomFahrenheit}`);
alert(`Random Fahrenheit value (between 0 and your input): ${randomFahrenheit}`);

/* Note: the reason I included detailed comments is to show my current level of understanding regarding this coursework */
