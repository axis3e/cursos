//? Spreed Operator
/*
Operador de expansión, su sintaxis es "..."

*/
const numbers = [2,3,4,5,6,7]
console.log(...numbers)

/*
|Enviar elementos de un array a una función

const addNmbrs = (a,b,c) =>{
    console.log(a+b+c)
};
let nums = [2,3,4]
console.log(addNmbrs(...nums))
*/
/*,
|Añadir un array a otro array

const array1 = [1,2,3,4]
const array2 = [5,6,7,8]
array1.push(...array2)
console.log(array1)
*/
/*
|Copiar arrays

const array1 = [1,2,3,4]
const array2 = [...array1]
console.log(array2)
*/
/*
|Concatenar arrays

const array1 = [1,2,3,4];
const array2 = [5,6,7,8];
let  concatArry = [...array1,...array2];
console.log(concatArry)
*/
/*
|Enviar un número indefinido de argumentos a una función (parámetros REST)

const restParms = (...num) => {
    console.log(num.sort())
}
restParms(2,3,4,5,6,7,8,9,3,4,5,6)
*/
/*
|librería math

const numbers = [-12, 2, 3, 23, 43, 2, 3]

console.log(Math.max(...numbers))
console.log(Math.min(...numbers))
*/
/*
|Eliminar elementos duplicados

let restParms = [2,3,4,5,6,7,8,9,3,4,5,6]
let nums = [... new Set (restParms)]
console.log(nums)
*/