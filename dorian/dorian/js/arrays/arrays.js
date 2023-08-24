/*
!Arrays
let palabras = ["palabra1", "palabra2", "palabra3"]
let numero = [1,2,3,4,5,6]
let boolean = [true, true, false, false]

console.log(`La palabra ${palabras[1]} tiene ${palabras[1].length} letras`)
console.log(`Sumando ${numero[2]} más ${numero[5]} tenemos ${numero[2]+numero[5]}`)
console.log(!boolean[1])

!Propiedades
° Array.length 
|Nos devuelve el número de posiciones de un array
let numeros =[1,2,3,4,5]
console.log(numberos.length)

!Métodos
° Array.isArray(variable a evaluar)
| Nos indica si nuestra varibale es un Array
let num = 5;
console.log(Array.isArray(num));
let nums = [1,2,3,4,5];
console.log(Array.isArray(nums));

° .shift / .pop
| Eliminan el primer y el ultimo elemento de nuestro array respectivamente
let number =[1,2,3,4,5,6,7,8,9,10]
console.log(number);
number.pop();
console.log(number);
number.shift();
console.log(number)

° .push / .unshift
| Añaden uno o más elementos al final y al inicio de nuestro array
let num = [1,2,3,4,5,6];
console.log(num);
num.push(7,8,9,10);
console.log(num);
num.unshift(-2,-1,0)
console.log(num)

° .indexof()
| Devuelve el primer índice del elemento que coincida con el valor especificado, o -1 si ninguno es encontrado.
let palabra = ["parangaricutirimicuraro", "pasa", "reno"];
console.log(palabra);
console.log(`La palabra ${palabra[2]} está en la posición ${palabra.indexOf("pasa")+1}`);

° .lastIndexOf
| Devuelve el último índice del elemento que coincida con el valor especificado, o -1 si ninguno es encontrado.
let num =[1,2,3,4,5,4,3,2,1];
console.log(num.lastIndexOf(2));

° .reverse
|Invierte el orden de los elementos 
let nums = [1,2,3,4,5,6];
console.log(nums);
console.log(nums.reverse());

° .join (separador)
| Devuelve una string con el separador que indiquemos
let nums =[1,2,3,4,5,6];
console.log(nums)
console.log(nums.join(` ~ `))

° .splice(a, b, items)
| Cambia elementos de un array eliminando y/o agregando nuevos (indice de inicio, numero de elementos, elementos a añadir)
let nums =[1,2,3,4,5,6];
console.log(nums);
nums.splice(3);
console.log(nums)
/elimina a partir de la 3ra posición
let numsa = [1,2,3,4,5,6,7,8]
numsa.splice(1,2)
console.log(numsa)
/elimina a partir de la posición 1 el numero de elementos definidos (2)
let numso = [1,2,3,4,5,6,7,8,9]
numso.splice(4,3,99999999999999,8888888888888888,777777777777777)
console.log(numso)
/elimina a partir de la posición 4, el numero de elementos definido (3) y los sustituye por los valores dados
let nam = [1,2,3,4,5,6,9];
console.log(nam);
nam.splice(6,0,7,8);
console.log(nam)
/a partir de la sexta posición agrega los elementos definidos

° .slice
|Extrae elementos de un array desde el índice a hasta el índice b. Si no existe b lo hace desde a hasta el final, si no existe ni a ni b hace una copia del original.

*/
let numbers = [1,2,3,4,5,6,7,8,9];
let newNum = numbers.slice(2,4);
console.log(numbers.slice(2,6))
console.log(newNum)
