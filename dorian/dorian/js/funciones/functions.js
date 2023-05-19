/*
!Funciones
/Son fragmentos de codigo que escrinimos para ejecutar una tarea y bi vilever a escrubir el musmo codigo mas de una vez, tamnbien ayudah a modaluzar el codigo y en teoria solo deben cumplir una sola tarea 
°sintaxis
function nombrefuncion () {
    codigo a ejecutar
}

let funcion = () =>{
    //codigo a eejecutar
    console.log(`Funcionó la función`)

}
funcion()
const saludo = user =>{
    console.log(`Hola, ${prompt(`Agrega tu nombre`)}, que tal, ¿cómo estás? :D`)
}
saludo()
*/

// const suma = (num1, num2) => {
//     num1 = prompt(`Agrega un numero :D`)
//     num2 = prompt(`Agrega otro numero :D`)
//     console.log(`Si multiplicamos ${num1} por ${num2}, tenemos como resultado ${num1*num2}`)
// }
// suma()

// const sumados = (parametro1, parametro2) =>  parametro1 + parametro2
function sumados (parametro1, parametro2){
    return parametro1 + parametro2
}
console.log(sumados(1,2))