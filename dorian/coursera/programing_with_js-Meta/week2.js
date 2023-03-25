/*
!Functions
function func (){
    var a = 10;
    var b = 5;
    var c = a+b;
    console.log(c)
}
func();

function func (a, b){
    var c = a+b;
    console.log(c)
}
func(10, 20)

°Arrays

console.log(train[3])
var train = ["sal", "ajo", "cebolla", "pimienta", "clavo"];

//Ejercicios
function prueba(arr){
    for(var i = 0; i < arr.length; i++){
        console.log(arr[i])
    }
}
var colors = ["red", "yellow", "green", "purple", "gray", "black", "white"]
prueba(colors)

function letterfinder (word , match){
    for (var i = 0;i < word.length; i++)
    if(word[i] == match){
        console.log("Found the",  match, "at", i)
    }
}
letterfinder("asterisco", "s")
|Objetos
var objeto = {
    guitarra: 2,
    zapato: 5,
    vasos: 4,
    persona:1
}
console.log(objeto)

var casa = {
    familia: 6
}
casa.cuartos = 2
casa.color = "rosa"
casa.mascotas= 4
casa.familia = 33
console.log(casa)

var casa = {
    cuartos: 3
}
casa["familia"] = 12
casa.mascotas = 4
console.log(casa)

var details = ["speed", "altitude", "color"];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for(var i = 0; i < details.length; i++){
    console.log(drone[details[i]])
}
// Ejercicios push y pop
var exce = ["excers", "ejercisie"]

console.log(exce)

exce.push("pusch")
console.log(exce)

exce.pop();
exce.pop();
console.log(exce);


function func (uno , dos , tres ){
    var arr = ["cero"]
    arr.push(uno);
    arr.push(dos);
    arr.push(tres)
    console.log(arr)
    arr.pop();
    arr.pop();
    console.log(arr)
    arr.pop();
    console.log(arr)
}
var fun = func("funciones", "arrays", "objetos")

console.log(fun)
*/
