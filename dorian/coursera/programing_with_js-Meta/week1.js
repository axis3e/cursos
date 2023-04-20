// !Operadors in Js
/**
    Arithmetic
    + addition
    - substraction
    * multiplication
    / division

    console.log(3+5);
    console.log(8-7);
    console.log(5*5);
    console.log(10/2);
        Comparision
    < greater than
    > less than
    == equal
 */
// console.log(10>11);
// console.log(10>9);
// console.log(5*6/3+2-11);
// console.log(5<4);
// console.log(5<6);
// console.log(5==6);
// console.log(5==5);
// console.log(5*5==30-5);
// console.log(8*8);


// $Working with conditional statements
//Estamos trabajando con las variables, if y else, ademas de bloques de cambio

/*
if
var number = 50
if (number == 50*1){
    console.log ("Yeah, kamehameha, despues del tema del tetris viene el dragon ball rap")
}
*/

/*
if-else
var score = 50
score = 25
 if (score > 40){
     console.log("Felicidades, aprobaste, tu puntaje fue de: ", score)
 } else{
     console.log("Lo lamento, eres demasiado estupido y solo obtuivste ",score," puntos")
 }
*/ 

/*
else-if
var posicion = "primero";
if (posicion == "primero"){
    console.log("Felicidades, llegaste", posicion, "Te toca medalla de oro")
} else if (posicion == "segundo"){
    console.log("Felicidades, llegaste ", posicion, " al menos tienes medalla de plata" )
} else if (posicion == "tercero" ){
    console.log("Felicidades, llegaste ", posicion, " ya de perdis, te toca la de bronce" )
} else{
    console.log("Pedazo de basura, mejor ni participes")
}


posicion = "segundo";
if (posicion == "primero"){
    console.log("Felicidades, llegaste", posicion, "Te toca medalla de oro")
} else if (posicion == "segundo"){
    console.log("Felicidades, llegaste ", posicion, " al menos tienes medalla de plata" )
} else if (posicion == "tercero" ){
    console.log("Felicidades, llegaste ", posicion, " ya de perdis, te toca la de bronce" )
} else{
    console.log("Pedazo de basura, mejor ni participes")
}

posicion = "tercero";
if (posicion == "primero"){
    console.log("Felicidades, llegaste", posicion, "Te toca medalla de oro")
} else if (posicion == "segundo"){
    console.log("Felicidades, llegaste ", posicion, " al menos tienes medalla de plata" )
} else if (posicion == "tercero" ){
    console.log("Felicidades, llegaste ", posicion, " ya de perdis, te toca la de bronce" )
} else{
    console.log("Pedazo de basura, mejor ni participes")
}

posicion = "cuarto";
if (posicion == "primero"){
    console.log("Felicidades, llegaste", posicion, "Te toca medalla de oro")
} else if (posicion == "segundo"){
    console.log("Felicidades, llegaste ", posicion, " al menos tienes medalla de plata" )
} else if (posicion == "tercero" ){
    console.log("Felicidades, llegaste ", posicion, " ya de perdis, te toca la de bronce" )
} else{
    console.log("Pedazo de basura, mejor ni participes")
}

*/


///switch
/*
var distance = 3;

switch (distance){
    case 1:
        console.log("Llevas ", distance, " kilometros, genial!" );
        break
    case 2:
        console.log("Ahora llevas ", distance, "kilometros, tu puedes!!")
    case 3:
        console.log("Wow, vas ", distance, " kilometros, estoy impactade! 0:")
}
*/
/*
Ejercicios
var edad = 56;
if (edad>=65){
    console.log("Usted obtiene sus ingresos de pensión")
} else if (edad < 65 || edad >= 18){
    console.log("Cada mes obtiene un salario")
} else if (edad < 18){
    console.log("Obtiene una asignación")
} else{
    console.log("El valor edad no es numerico")
}

*/
/*
var day = "lun";

switch(day){
    case "lun":
        console.log("Lunes")
        break
    case "mar":
        console.log("Martes")
        break
    case "mier":
        console.log("Miercoles")
        break
    case "jue":
        console.log("Jueves")
        break
    case "vie":
        console.log("Viernes")
        break
    case "sab":
        console.log("Sabado")
        break
    case "dom":
        console.log("Domingo")
        break
    default:
        console.log("Quien sabe que perro día sea")
}
*/
//#Loops
/*
$For
for(var i = 1; i<= 25; i++){
    console.log(i)
}
console.log("No rifa, no llega a 999999")

for(var i = 10; i>= 1; i--){
    console.log(i)
} console.log("Happy New Year")

!While
var i = 10;
while(i > 0){
    console.log(i)
    i = i-1
}
console.log("Happy new year")

console.log("Contar de 2 en 2")
var x = 2;
while(x<=40){
    console.log(x);
    x = x+2 
}
var i = 10;
while(i>5){
    console.log(i);
    i--
}
console.log('Counting completed!')

!Nested
for(var año = 2023; año<=2024; año++){
    console.log("Año: " + año )
    for(var mes = 6; mes <= 8; mes++){
        console.log("Mes de verano - " + mes )
    }
}
for(var i = 100; i > 10; i = i - 10) {
    for(var j = 10; j > 9 ; j= j - 10) {
        console.log(i + " dividido entre " + j + " nos da: " + i/j);
    }
}
*/

 
