/*
! Primero
let nombre = prompt(`¿Cómo dices que dijistes que te llamas?`)
let edad = prompt(`Ingresa tu edad, parito.`)
//let edad = parseInt(prompt(`Ingresa tu edad, parito.`))

let texto = document.getElementById(mensaje)

mensaje.textContent = `Hola, ${nombre}, si ahora tienes ${edad}, el proximo año tendras ${++edad} años`

!Segundo

let texto = document.getElementById("texto2")
let figura = prompt(`¿Qué figura quieres usar para calcular area, triangulo, rectangulo o circulo?`)

if (figura == `triangulo`) {
    let b = prompt(`Ingresa su base`)
    let h = prompt(`Ingresa la altura`)
    texto2.textContent = `El area de tu triangulo es de ${b * h / 2}`
 } else if(figura == `rectangulo`){
     let b = prompt(`Ingresa su base`)
     let h = prompt(`Ingresa la altura`)
     mensaje2.textContent = `El area de tu rectangulo es de ${b * h }`
 
 } else if(figura== `circulo`){
     let r = prompt(`Ingresa su radio`)
     mensaje2.textContent = `El area de tu circulo es ${Math.pow(r, 2)*Math.PI}`
 }else{
    alert(`Ingresaste datos invalidos`)
 }

 !Tercero
 let num = prompt(`Echame tu numero perro`)
 //var text = document.getElementById("mensaje3")
 
 for(i = num; i>0 ; i--){
     if (i%2 == 0){
         //mensaje3.textContent(`${i} es par`)
         console.log(`${i} es par`)
     }else{
         //mensaje3.textContent(`${i} es impar`)
         console.log(`${i} es impar`)
     }
 }

 !Cuarto
 //(Quedó +/-)
 let num = parseInt(prompt(`Introduce un número mayor a 1`));
 for(i=2; i<num; i++){
     if(num % i == 0){
         console.log(`${num} entre ${i} es igual a  ${num/i}, no es primo `)
         break
         
     }
     if (num % i != 0){
         console.log(`${num} es primo`)
 }
 }
!Quinto
let num = parseInt(prompt(`Dame un numero prro`))
let result = 1
for(i=num; i>0; i--){
    result *= i
}
document.write(`El factorial de ${num} es ${result}`)

!Sexto
let count = 0;
let num = 0;

while(num < 50){
    num += parseInt(prompt(`Agrega numeros cainal`))
    count++
}
console.log(`Llegamos a ${num} con ${count} numeros`)

!Septimo
let num = [3, 5, 6, 7, 9];
let pares = [];
let impares = [];

for(i = 0; i <num.length ; i++){
    ward = num[i] 
    mult = Math.ceil(Math.random()*10)
    num2 = ward*mult 
    if((num2) % 2 == 0){
        pares.push(num2)

    }else{
        impares.push(num2)
    }
    console.log(`${ward} * ${mult} = ${num2}`, pares, impares)
}

!Noveno
let letters = prompt(`Inserte aquí su palabra`);
let cons =[]
let voc = []
for(let letter of letters){
    if(letter == `a`|| letter ==`e`|| letter ==`i`|| letter ==`o`||letter ==`u`)
        voc.push(letter)
    else cons.push(letter)
}
console.log(`La palabra ${letters} tiene una longitud de ${letters.length} caracteres `)
console.log(`Tu palara ${letters}  tiene ${voc.length} vocales y ${cons.length} consonantes`)

°Forma de Dorian
°let letters = prompt(`Inserte aquí su palabra`);
°let cons =0
°let voc = 0
°for(let letter of letters){
°    if(letter == `a`|| letter ==`e`|| letter ==`i`|| letter ==`o`||letter ==`u`)
°        voc++
°    else cons++
°}
°console.log(`La palabra ${letters} tiene una longitud de ${letters.length} caracteres `)
°console.log(`Tu palara ${letters}  tiene ${voc} vocales y ${cons} consonantes`)

!Decimo

*/
let color = prompt(`Escoge uno de estos colores "azul", "amarillo", "rojo", "verde", "rosa"`)
let colors = ["azul", "amarillo", "rojo", "verde", "rosa"]

if (colors.indexOf(color) !== -1){
    console.log(`Vientos`)
}else{
    console.log(`Tas mal mijo`)
} 