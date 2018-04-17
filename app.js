// today's forecast is a constant value
const kelvin = 294;

// celsius is 273 degrees less than kelvin
const celsius = kelvin - 273;

// transform celsius to farenheit

let farenheit = celsius * (9/5) + 32;

// round the result so it's not decimal
farenheit = Math.floor(farenheit);

console.log(`The temperature is ${farenheit} degrees Farenheit.`);

//convert celsius to newton

let newton = celsius * (33/100);

//round down

newton = Math.floor(celsius);

console.log(`The temperature is ${newton} degrees Newton.`);
