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

!Objeto Math

var decimal = Math.random() * 10 ;
console.log(decimal);
console.log(Math.ceil(decimal))

° Deep strings

var cadena = "cadena"
for (let i = 0; i < cadena.length; i++ ){
    console.log(cadena[i])
}
var array = ["a", "r", "r", "a", "y"]
for (let i = 0; i< array.length; i++ ){
    console.log(array[i])
}

var vegetales = "pepino";
console.log(vegetales.length);
console.log(vegetales[0]);
console.log(vegetales[1]);

for (var i = 0; i < vegetales.length; i++){
    console.log(vegetales[i])
}
var saludo = "hola";
var usuario = "Lisa";
console.log(saludo.pop()) //Los metodos de funciones no funcionan en cadenas
console.log(saludo + usuario);
console.log(saludo.concat(usuario))

$Cheat strings

var palabra = "Matanga Dijo la changa"
 console.log(palabra.length); //longitud de variable
 console.log(palabra.charAt(5));//caracter ubicado en el valor solicitado
 console.log("Matanga dijo".concat(" la changa"));// concatenacion
 console.log(palabra.indexOf("g")); //Primera coincidencia del valor solicitado
 console.log(palabra.lastIndexOf("a")); //Ultima coincidencia del valor solicitado
 console.log("Hola que ase quitemos espacios".split(" "));//corta elementos en base a un valor eliminado
 console.log(palabra.toUpperCase());
 console.log(palabra.toLocaleLowerCase())

//Ejercicios
var clothes = [];
clothes.push("playera");
clothes.push("pantalon");
clothes.push("short");
clothes.push("gorra");
clothes.push("sombrero");
clothes.pop();
clothes.push("zapato");
console.log(clothes[3]);
var favcar = {}
favcar.color = "red"
favcar.covertible = "yes" || "no"
console.log(favcar)

% Object Methods

var gato = []
gato.ojos = "verdes";
gato.patas = "cuatro";
gato.gaticos = function(){
    gato.hambre = "mucha"
    gato.color = "manchado";
    console.log("Probando como funciona esto juas juas");

};
console.log(gato);
gato.gaticos();
console.log(gato);

!typeof

var test = typeof("Esta es una cadena");
 var test = typeof(10+10);
 var test = typeof(true);
 var test = typeof(["Esto es un array"]);
 var test = typeof({objeto: true});
 var test = typeof(function funcion (){console.log("esto es una funcion")});
console.log(test)

*/
/*
|Error handling

#bugs y errors
function bien (a, b) {
    console.log(a+b);
}
bien(1, 2);
console.log("Nuestra función quedó bien");
bien("1",2);
console.log("Nuestra función presenta un bug")
console.log(c, d)
console.log("Nuestro programa presetna un error")

% Try catch blocks

console.log(a+b)
throw new SyntaxError();

try{
    console.log(a+b);
} catch(err){
    console.log("Otei, aqui hay un error");
    //console.log(err)
}
console.log("El programa no se detiene (?)")

try{
    throw new TypeError
} catch(prueba){
    console.log(prueba);
    console.log("error de prueba");
} 
console.log("Aún así tenemos continuación de programa")

!Errores
throw new SyntaxError();
throw new TypeError();
throw new ReferenceError();
throw new RangeError();
/ Null, Undefined empty
var letter = "abc"
console.log(letter.match("a"))
console.log(letter.match("d"))

var nombres 
console.log(nombres)

console.log ("nombre")
console.log(nombres)

//Ejercicio
function addTwoNumbers (a, b){
    try{
        if(typeof(a) != `number`)
        { 
            throw new ReferenceError("El primer argumento no es valido")
        } else if(typeof(b) != `number`){
            throw new ReferenceError ("El segundo argumento no es un numero")
        }else{
            console.log(a+b)
        }
    }catch(err){
        console.log("Error!", err)
    }
}
addTwoNumbers("5" , "5");


function letterFinder(word, match) {
    var condition1 = typeof(word) == "string" && word.length >= 2; 
    var condition2 = typeof(match) == "string" && match.length==1;
    if(condition1 && condition2){
        for(i = 0; i < word.length; i++)
        {
            if(word[i] == match) {
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    }else{
        console.log("Pase los argumentos correctos")
    }
}
letterFinder("gato", "g")

function letterFinder(word, match) {
    var condition1 = typeof(word) == 'string' && word.length >= 2; //if the word is a string and the length is greater than or equal to 2
    var condition2 = typeof(match) == 'string' && match.length == 1; //if the match is a string and the length is equal to 1
    if(condition1 && condition2) { //if both condition matches
        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                check if the character at this i position in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    } else {
        if the requirements don't match
        console.log("Please pass correct arguments to the function")
    }
}
letterFinder("cat","c")
*/