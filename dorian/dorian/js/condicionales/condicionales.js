/*
°Condicionales
!Simple
let num = 5;
if(num>0){
    console.log(`${num} es mayor que 0`)
}

!Compuesto
let num = -5;
if(num>0){
    console.log(`${num} es mayor que 0`)
}else{
    console.log(`${num} es menor que 0`)
}

!multipĺe
let num = -6;
if(num>0){
    console.log(`${num} es mayor que 0`)
}else if(num<0){
    console.log(`${num} es menor que 0`)
}else{
    console.log(`${num} es igual a cero`)3 - Solicita un número e imprime todos los números pares e impares desde 1 hasta ese número con el mensaje "es par" o "es impar" si el número es 5 el resultado será: 1 - es impar 2 - es par 3 - es impar 4 - es par 5 - es impar
}
!Operadores Lógicos
"And" &&
"Or" ||

let num1 = 0
let num2 = 0

if(num1>0){
    if(num2>0){
        console.log(`${num1} y ${num2} son mayores que 0`)
        }else if(num2<0){
            console.log(`${num1} es mayor que 0 y ${num2} es menor que 0`)
        }else{
            console.log(`${num1} es mayor que cero y ${num2} es igual a 0`)
        }
}else if(num1<0){
    if(num2>0){
        console.log(`${num1} es menor que 0 y ${num2} es mayor que 0`)
        }else if(num2<0){
            console.log(`${num1} y ${num2} son menores que 0`)
        }else{
            console.log(`${num1} es menor que cero y ${num2} es igual a 0`)
        }
}else{
    if(num2>0){
        console.log(`${num1} es igual a 0 y ${num2} es mayor que 0`)
        }else if(num2<0){
            console.log(`${num1} es igual a cero ${num2} es menor que 0`)
        }else{
            console.log(`${num1} y ${num2} son iguales a 0`)
        }
}

!Ejercicio

*/
const numbers =  document.getElementById(`numbers`);
const result = document.getElementById(`result`);

let a = prompt(`Agrega tu número prro`);
let b = prompt(`Agrega otro sin miedo cainal`);
let c = prompt(`Sigamos, echame el ultimo`);

numbers.textContent = `Me pusiste estos números perrillo ${a}, ${b} y ${c}`

if(a>=b && a>=c){
    if(b>c){
        result.textContent = `El más grandecito es ${a}, le sigue ${b} y terminamos con ${c} que está chiquito`
    }else{
        result.textContent = `El más grandecito es ${a}, le sigue ${c} y terminamos con ${b} que está chiquito`
    }
}else if(b>=a && b>=c){
    if(a>c){
        result.textContent = `El más grandecito es ${b}, le sigue ${a} y terminamos con ${c} que está chiquito`
    }else{
        result.textContent = `El más grandecito es ${b}, le sigue ${c} y terminamos con ${a} que está chiquito`
    }
}else{
    if(a>b){
    result.textContent = `El más grandecito es ${c}, le sigue ${a} y terminamos con ${b} que está chiquito`
    }else{
        result.textContent = `El más grandecito es ${c}, le sigue ${b} y terminamos con ${a} que está chiquito`
    }

}