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
    console.log(`${num} es igual a cero`)
}
!Operadores Lógicos
"And" &&
"Or" ||

*/
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