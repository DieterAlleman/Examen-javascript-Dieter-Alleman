let getal = parseInt(prompt("geef een getal in"));
let som = 0;
let deler = 10;

let bijTeTellenGetal = 0;

while(bijTeTellenGetal !== undefined){
    bijTeTellenGetal = getal % deler
    som += bijTeTellenGetal;
    deler *= 10;
}

console.log(som);


// werkt niet maar niet genoeg energie te zoeken achter wiskundige oplossing.




