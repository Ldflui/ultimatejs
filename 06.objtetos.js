// personaje de De Futbol
let nombre = "luka modrik";
let posicion = "bolante";
let edad = 39;

let personaje = {
    nombre: "luka modrik",
    posicion: "bolante",
    edad: 39,
}

console.log(personaje);
console.log(personaje.nombre)
console.log(personaje['edad'])

personaje.edad = 14;

let llave = 'nombre';
personaje[llave] = 17;

 console.log(personaje);
