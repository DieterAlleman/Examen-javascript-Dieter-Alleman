let celcius = parseInt(prompt("wat is de temperatuur in celcius?"))

let fahrenheit = (9 / 5) * celcius + 32;
let gevoel;
if(celcius < 15){
    gevoel = "voelt frisjes aan"

}else if(celcius >=15 && celcius <= 25){
    gevoel = "voelt aangenaam aan"

}else{
    gevoel = "is te warm"
}

console.log(`${celcius} graden Celcius is gelijk aan ${fahrenheit} graden Fahrenheit en ${gevoel}`);

