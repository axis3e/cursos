// ? Arrays - Métodos II
/*
| .from(iterable)
Convierte en array el elemento iterable

let letters = `Hola k ase`
console.log(Array.from(letters))
console.log(letters.split(``))
*/
/*
|.sort([callback])
Ordena los elementos de un array alfabéticamente(valor Unicode), si le pasamos un callback los ordena en función del algoritmo que le pasemos.

let letras = [`w`,`x`,`r`,`o`]
console.log(letras.sort())

const numbers = [1,5,100,40,35]
console.log(numbers.sort((a, b) => a-b))

# const letters = ['b', 'c', 'z', 'a']
# const numbers = [1,8,100,300,3]
# 
# console.log(letters.sort())
# console.log(numbers.sort())
# 
# console.log(numbers.sort((a,b)=>a-b))
# 
# function menorMayor(a, b) {
# if (a-b < 0) return -1;
# if (a-b > 0) return 1;
# if(a == b) return 0;
# }
# 
# function mayorMenor(a, b) {
# if (b-a < 0) return -1;
# if (b-a > 0) return 1;
# if(b == a) return 0;
# }
*/
/*
|.forEach(callback(currentValue, [index])) 
Ejecuta la función indicada una vez por cada elemento del array.

const numbers = [12, 32, 55,1,9,0.7,111]
let num = numbers.sort((a,b)=>a-b)
num.forEach((element, index)=>console.log(`${element}, está en la posición ${index}`))
*/
/*
|.some(callback)
Comprueba si al menos un elemento del array cumple la condición
|.every(callback)
Comprueba si todos los elementos del array cumplen la condición

const letters = [`uno`, `doe`, `tre`, `cuarte`]
console.log(letters.some(letra => letra.length>7))
console.log(letters.every(letra => letra.length>2))
*/
/*
|.map(callback)
Transforma todos los elementos del array y devuelve un nuevo array
|.filter(callback)
Filtra todos los elementos del array que cumplan la condición y devuelve un nuevo array
|.reduce(callback)
Reduce todos los elementos del array a un único valor
const numbers = [2,4,10,18,1,13,7];
    numbers.map(number => console.log(number * 2))
const numb = numbers.filter(number => number > 2)
const num = numbers.reduce((a,b)=>a+b)
console.log(numb)
console.log(num)
*/
const users = [
    {
        name :`user1`,
        online : true 
    },
    {
        name :`user2`,
        online : false 
    },
    {
        name :`user3`,
        online : false 
    },
    {
        name :`user4`,
        online : true
    },
    {
        name :`user5`,
        online : true 
    },
    {
        name :`user6`,
        online : false 
    },
    {
        name :`user7`,
        online : true 
    },
]
const usersOnline = users.reduce((cont, user)=>{
    if(user.online) cont++
    return cont
},0)
console.log(`Hay un total de ${usersOnline} usuarios conectados`)
