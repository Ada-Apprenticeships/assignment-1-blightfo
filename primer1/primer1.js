function temperatureConversion(temperature, fromScale, toScale){

// TODO: Validate the input:
//        - Check if the temperature is null, undefined, or a non-numeric string. If so, throw an error "Invalid temperature input".
function checkTemperatureInput(temperature) {
    temperature = Number(temperature);
        if (temperature === null || temperature === undefined || isNaN(temperature)) {
            throw new Error("Invalid temperature input");
        }
    }
//        - Temperature is valid, continue with your logic
//        - Convert the temperature to a number.
        return temperature; 
}
//        - Normalise fromScale and toScale to uppercase.
function normalizeScale(scale) {
    return scale.toUpperCase();

}   
//        - Check if fromScale and toScale are valid ( e.g. 'C', 'F'). If not, throw an error "Invalid conversion type or input scale".
    const validScales = ['C', 'F'];
    if (!validScales.includes(scale)) {
        throw new Error("Invalid conversion type or input scale");

// TODO: Define helper functions for the conversions:
//        - toFahrenheit(celsius): Converts Celsius to Fahrenheit.
function toFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}
//        - toCelsius(fahrenheit): Converts Fahrenheit to Celsius.
function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
     
// TODO: Implement the conversion logic:
//        - Use conditional logic to handle different toScale values (e.g. 'C', 'F').
//        - Within each condition, handle conversions from different fromScale values (e.g. 'C', 'F') to the target toScale.
//        - Use the helper functions to perform the actual conversions.

    if (toScale === 'F') {
    if (fromScale === 'C') {
        return toFahrenheit(temperature);
    } else if (fromScale === 'F') {
        return temperature;
    }
} else if (toScale === 'C') {
    
    if (fromScale === 'F') {
        return toCelsius(temperature);

    } else if (fromScale === 'C') {
        return temperature; 
    }
}

}


}


export default temperatureConversion;
