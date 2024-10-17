let getal;
let aantalGetallen = parseInt(prompt("hoeveel getallen wil je ingeven? "));
let grootsteGetal = ""

for(let i = 1;  i <= aantalGetallen; i++){

    getal = parseInt(prompt(`Voer getal ${i} in`));
    if (getal > grootsteGetal){
        grootsteGetal = getal;
    }
}

console.log(`het grootste getal van ${aantalGetallen} getallen is ${grootsteGetal}`)

