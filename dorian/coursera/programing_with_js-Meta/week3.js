//°Introduction to functional programming//
/*
!Programación funcioanl

var moneda1 = 100;
var moneda2 = 0;
var tipoCambio = 1.2;
function cambio (cantidad, tasa) {
    return cantidad * tasa
}
moneda2 = cambio(100, 1.2)
console.log(moneda2)
!Return values from functions
function consoleLog (value){
    console.log(value)
}
consoleLog("Hello")


function number(doble){
    return doble*2
}

function objectMaker (val){
console.log({
    prop: val
})
}
objectMaker(20)
objectMaker(number(20))


let counter = 3
function example(){
     console.log(counter);
     counter = counter - 1;
     if (counter === 0){return};
     example();
 }

example()
var canicas = 20;
function descanicado (total) {
    console.log(total);
    total = total-1;
    if(total === 0){
        console.log("Nimodo,te quedaste en ceros");
        return
    }
    descanicado(total)
}
descanicado(canicas)


let lineasFaltantes = 15
function pared(restan){ 
    if(restan == 15){
        console.log("Camara may, vamos a empezar");
    } 
    restan = restan - 1;
    if(restan >= 6){
        console.log("Chale gfe, ya quiero acabar, y todavia nos faltan ", restan)
    } else if(restan >= 1){
        console.log("Mire may, ya nomás nos fatlan ", restan)
    } else if (restan === 0){
        console.log("Vientos mi may, ya acabamos, vamonos que aquí espantan");
        return
    }
    pared(restan)
}
pared(lineasFaltantes)


var pet ={
    somnoliento: true,
    nap: function(){
        this.somnoliento = false
    }
}
console.log(pet.somnoliento)
pet.nap()
console.log(pet.somnoliento)

!Var, let, const
console.log(quescte);
var quescte;

console.log(damn)
let damn //No puedes usar una variable let antes de declararla 

let damn = "red"
let damn = "green"
const damnit = "red" //No puedes usar una constante antes de declararla
const damnit = "blue" //tampoco puedes volver a declarar una constante ya declarada
console.log(damnit)
!OOP



var shoess = 50;
var impuestos = 1.16;
function preciototal(shoess, impuestos){
    return shoess * impuestos;
}
var pagas = preciototal(shoess, impuestos)
console.log(pagas)


var compra1 = {
    shoes: 50,
    impuesto: 1.16,
    preciototal: function(){
        var calculadora = compra1.shoes * compra1.impuesto;
        console.log('Precio total: ', calculadora)

    },
}
compra1.preciototal()

!Classes

class Car{
    constructor(color, speed){
        this.color = color;
        this.speed = speed;
    }
    turboOn(){
        console.log(this.color, this.speed)
    }
    probando(){
        console.log("Ya estás entendiendo mainfren")
    }
}
const car1 = new Car ("red", 120)
const car2 = new Car("yellow", 200)

car1.turboOn()
car2.probando()

/Dorian
class Persona{
    constructor(nombre, apellido, edad ){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }
    saludar(){
        return `Hola, me llamo ${this.nombre} ${this.apellido} y tengo ${this.edad} años`
    }
}
var Ariel = new Persona("Ariel", "Hernandez", 23)
console.log(Ariel.saludar())

//Herencia
class Animal{
    constructor (especie, familia, nombre){
        this.raza
    }
}
class Bird extends Animal{
    constructor (vuela, nada, habitat){
        this.casa
    }
}
class Rostizado extends Bird{
    constructor (death, peso){
        this,rosticeria
    }
}
//poliformismo
const bici ={
    campana: function(){
        console.log("ring ring, alv hdsptm"); 
    }
}
const puerta ={
    campana: function(){
        console.log("Abreme hdtpm")
    }
}

puerta.campana()

function campanaso(thing){
    console.log(thing.campana())
}

campanaso(bici)

class Ave {
    alas(){
        console.log("Vuela, inutil, vuela")
    }
}
class Aguila extends Ave{
    alas(){
        super.alas()
        console.log("Vuela forest, vuela")
    }
}
class Penguin extends Ave{
    alas(){
        console.log("Buceele mijo, buceele")
    }
}
var aguilucho = new Aguila();
var machote = new Penguin();
aguilucho.alas();
machote.alas();
!Inheritance
var bird ={
    hasWings: true,
    canFly: true,
    hasPlumas: true
}
var eagle1 = Object.create(bird)
console.log(eagle1.hasWings)  
console.log(eagle1.canFly)

var eagle2 = Object.create(bird)
console.log("Mira 0: ",eagle2.canFly)

var humano ={
    ojos: true,
    nariz: true,
    boca: true,
    dietnes: true
}

var carlos = Object.create(humano)
var Diana = Object.create(humano);
Diana.ojos= false
console.log(Diana.ojos)
console.log(Diana.nariz )
console.log(carlos.ojos)
*/

class Train {
    constructor(color, lightsOn){
        this.color = color;
        this.lightsOn = lightsOn;
    }
    vagon(){
        console.log(vagon1)
    }
    riel(){
        console.log(riel1)
    }
}
var chuchu = new Train ("red", "false");
console.log(chuchu)