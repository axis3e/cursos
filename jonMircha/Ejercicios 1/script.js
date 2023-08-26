/*
(1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.

    let string = prompt(`Agrega una palabra o una frase`)

    const miFunction = (palabra)=>{
        if (isNaN(palabra)){
            let num = palabra.length
            console.log(num);
            alert(`${palabra} tiene ${num} caracteres`)
            
        }else{
            alert(`Agrega por favor un valor que no sea numerico`)
        }
    }
    miFunction(string)
*/
/*
(2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".

    let string = prompt(`Agrega una frase`)
        let cut = prompt(`Dime cuantos caracteres para dividir la frase`)

        const miFunction = (palabra, cut)=>{
            if (isNaN(palabra)){
                let num = palabra.slice(0, cut)
                console.log(num);
                alert(num)
                
            }else{
                alert(`Agrega por favor un valor que no sea numerico`)
            }
        }
    miFunction(string, cut)
    
*/
/*
(3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].


    let string = prompt(`Agrega una frase`)
            let cut = prompt(`Dime con que dividir la frase`)

            const miFunction = (palabra, cut)=>{
                if (isNaN(palabra)){
                    let num = palabra.split(cut)
                    console.log(num);
                    alert(num)
                    
                }else{
                    alert(`Agrega por favor un valor que no sea numerico`)
                }
            }
        miFunction(string, cut)
*/
/*
(4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.

    let word = prompt(`Dame una frase para repetir parito`),
        repeat = prompt(`Dime el numero de veces a repetir`);

    const rep = (word , repeat)=>{
    let repeating = word.repeat(repeat)
    alert(repeating)
    }

    rep(word, repeat)
*/
/*
(5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".

let word = prompt(`Dame una frase pa' darle la vuelta :D`)

const reverse = (word)=>{
    let sep = word.split(""),
    wrdrvrs = sep.reverse(),
    wrdjn = wrdrvrs.join("")
    alert(wrdjn.toLowerCase())
}
reverse(word)
*/
/*
(6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.

const repeated = (word = "", text="")=>{
    if(!word) return console.warn("No ingresaste el texto origen");
    if(!text) return console.warn("No ingresaste la palabra destino");

    let i = 0,
    count = 0;
    
    while(i !== -1 ){
        i = text.indexOf(word, i);
        if (i !== -1){
            i ++;
            count ++
        }
    }
    
    console.log(`La palabra "${word}" aparece ${count} veces en el texto`);
}

repeated("mundo","hola mundo mundo mundo")
*/
/*
(7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.

const palind = (word)=>{
    if(!word) return console.warn("No hay palabra ingresada");

    word = word.toLowerCase()

    let revers = word.split("").reverse().join("")

    return (revers === word)
    ? console.log(`La palabra "${word}" es un palindromo, al revés se lee ${revers}`)
    : console.log(`La palabra "${word}" no es palindromo, al revés se lee ${revers}`);
}
palind("Saas")
palind("Casa")

*/
/*
(8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.

const elim = (text, pat) =>
(!text)
    ? console.warn("No hay texto") 
    : (!pat)
        ? console.warn("No hay patrón") 
        : console.info(text.replace(new RegExp(pat, "ig"),""))

elim("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")

*/
/*
(9) Programa una función que obtenga un numero aleatorio entre 501 y 600.

const rand = () => {
    let num = 0;
    while (num > 600 || num < 501){
        num = Math.round(Math.random()*1000)
    }
    console.log(num);
}

rand()

console.log(Math.round(Math.random()*100)+500);

*/
/*
(10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

const capicua = (num)=>{

    const numc = num.toString().split("").reverse().join("")

    return console.log(`El número ${num} al revés es ${numc}, entonces ${Number(numc) === num ? "sí" : "no"} es capua`)

        //? console.log(`${num} al revés es ${numc}, entonces sí es capicua`)
        //: console.log(`${num} al revés es ${numc}, entonces no es capicua`)
    }

capicua(22.12)
*/
/*
(11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.

const fact = (num)=>{

    let fac = 1

    for( i = num; i > 1; i--){
        fac *= i;
    }
    console.log(fac);
}
fact(6)

*/
/*
(12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true.

const prim = (num = undefined) =>{

    if(num === undefined) return console.warn("Por favor ingresa un valor");
    if(isNaN(num)) return console.error(`El valor "${num}" NO es un numero`);
    if(num === 0) return console.error(`El numero a evaluar NO puede ser 0`);
    if(Math.sign(num) === -1)return console.error(`El número no puede ser negativo`);

    let div = false;

    for(i=num-1; i>1; i--){
        if(num % i === 0){
            div = true;
            break
        }
    }
    return (div)
    ? console.log(`El numero ${num} no es primo`)
    :  console.log(`El numero ${num} es primo`);
}
prim()
*/
/*
(13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.

const parnon = (num = undefined) =>{

    if(num === undefined) return console.warn(`Por favor ingresa un valor`);
    if(isNaN(num)) return console.warn(`El valor ingresado NO es valido`);
    if(num === 0) return console.error(`El valor ingresado NO es valido`);
    
    return console.log(`El numero ${num} es ${(num % 2 == 0) ? "par" : "non"}`);
}

parnon(20)
*/
/*
(14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

const cf = (grados = undefined, tipo = undefined)=>{

    if(grados === undefined) return console.warn(`Por favor ingresa un valor`);
    if(isNaN(grados)) return console.warn(`Por favor ingresa un valor numerico`);
    if(tipo === undefined || tipo === "") return console.warn(`Por favor ingrese el tipo de grados`);
    if(!/(c|f)/.test(tipo.toLowerCase())) return console.warn(`Ingresa un valor C o F`);

    if(tipo.toLowerCase() === `c`){
        return console.log(`${grados}° Celsius son ${(grados * (9/5))+32}° Farenheit`)
    }else if(tipo.toLowerCase() === `f`){
        return console.log(`${grados}° Farenheit son ${(grados-32)*(5/9)}° Celsius`)
    }
}
cf(0,"c")
cf(32, "f")
*/
/*
(15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10.
*/

const conv = (numero, base) =>{

    if(numero === undefined) return console.warn(`Por favor ingresa un valor`);
    if(base === undefined) return console.warn(`Por favor ingresa un valor`);
    if(isNaN(numero)) return console.error(`El valor a convertir NO es numerico`);
    if(isNaN(base)) return console.error(`El valor base NO es numerico`);

    if(base===2){
        return console.log(`${numero} base ${base} = ${parseInt(numero, base)} base 10`);
    }else if (base===10){
        return console.log(`${numero} base ${base} = ${(numero.toString(2))} base 2`);
    }
}
// conv(100,2)
// conv(4,10)
/*
(16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800.
*/

    const desc = (precio, descuento)=>{

        if(precio === undefined || isNaN(precio) || !(precio > 0))
            throw new Error(`Por favor ingresa un precio válido`)
        if(!descuento || isNaN(descuento)||(!(descuento < 100) || !(descuento > 0)))
            throw new Error(`Por favor ingresa un descuento válido`)

        const finalPrice = precio - ((precio/100)*descuento),
            ahorro = (precio/100)*descuento;

        return console.log(`Si le descontamos el ${descuento}% a ${precio}, vamos a tener que pagar un total de ${finalPrice}, teniendo así un ahorro de ${ahorro}.`);
    
    }
    // try{
    //     desc(100, 1)
    // }catch(err){
    //     console.log(err);
    // }

    // try{
    //     let {finalPrice, ahorro} = desc(100,20)
    //     console.log(`total: ${finalPrice}, ahorro: ${ahorro}`);

    // }catch (err){
    //     console.error(err.message);
    // }



        //if(precio === undefined) 
        //    return console.warn(`Por favor agrega el precio a descontar`);
        //if(precio === 0) 
        //    return  console.error(`El precio NO puede ser 0`);
        //if(isNaN(precio)) 
        //    return console.error(`Por favor ingresa un valor numerixo`);
        //if(descuento === undefined) 
        //    return console.warn(`Por favor agrega el porcentaje a descontar`);
        //if(descuento === 0) 
        //    return console.error(`El descuento NO puede ser 0`);
        //if(isNaN(precio)) 
        //    return console.error(`Por favor ingresa un valor a numerico`);
    //
        //return `El descuento de ${precio} va a ser un ${descuento}%, lo que es igual a ${(precio/100)*descuento}. Dando un precio final de ${precio - ((precio/100)*descuento)}`
    
        //let finalDesc = (precio/100) * descuento;
    
        //return console.log(`El descuento de ${precio} va a ser un ${descuento}%, lo que es igual a ${finalDesc}. Dando un precio final de ${precio - finalDesc}.`);
    

//desc(20)
/*
(17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
*/
const year = (date = undefined)=>{

    if(date == undefined) return console.warn(`Por favor ingresa una fecha`);
    if(!(fecha instanceof Date)) console.error(`Por favor ingresa un formato de fecha valido`);

    console.log((new Date().getFullYear())-(date.getFullYear()))

}
//year(new Date (1980, 10, 15))
/*
(18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.
*/

const counter = (frase = "")=>{

    if(frase == "") return console.warn(`Por favor ingresa una palabra`);
    if(frase.length < 2) return console.error(`Por favor ingresa una palabra de al menos dos caracteres`);
    if(!isNaN(frase)) return console.error(`Por favor ingresa valores que no sean numericos`);
    if(/[0-9]/.test(frase)) return console.error(`Por favor evita hacer uso de numeros`);

    let voc = 0,
    cons= 0;

    for (i of frase.toLowerCase()){
    (i== "a"||i== "e"||i=="i"||i== "o"||i== "u") 
        ? voc ++
        :cons ++
    }

    return console.log(`La palbara ${frase}, tiene ${voc} vocales y ${cons} consonantes`);
}
//counter(`Random`)

/*
(19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero.
*/

const name = (nombre = "", apellido = "") =>{

    if(nombre == "") return console.warn(`Por favor ingresa un nombre`);
    if(apellido == "") return console.warn(`Por favor ingresa un apellido`);
    if(!isNaN(nombre)) return console.error(`Por favor ingresa valores que no sean numericos en el nombre`);
    if(!isNaN(apellido)) return console.error(`Por favor ingresa valores que no sean numericos en el apellido`);
    if(/[0-9]/.test(nombre, apellido)) return console.error(`Por favor evita hacer uso de numeros`);

    console.log(`El nombre ${nombre} ${apellido} es válido`);
}
//name("Ari5el","Hernandez")
/*
(20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.
*/
const valEmail = (email)=>{

    if(!email) return console.warn(`No ingresate un email`);
    if(typeof email !== "string")return console.error(`El valor "${email}" ingresado, NO es una cadena de texto`);

    let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email)

    return(expReg)
    ? console.info(`"${email}" es un email válido`)
    : console.info(`"${email}" NO es un email valido`)
}
//valEmail(`axis260300,gmail.com`)

/*
(21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25].
*/

const nums = (potencia, ...num) => {
    
    const eleve = []
    num.map((potenciar)=>eleve.push(Math.pow(potenciar, potencia)))
    console.log(eleve);
    
}
//nums(2, 3,4,5,6,7)
/*
(22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60].
*/

const minmax = (...arr)=>{

    let valores = []
    
    //arr.sort((a,b)=>a-b)
    // valores.push(arr[(arr.length)-1])
    // valores.push(arr[0])

    valores.push(Math.max(...arr))
    valores.push(Math.min(...arr))

    console.log(valores);
}
//minmax(-25,2,34,-7,11,54,6,-12)

/*
(23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}.
*/
const arrs = (...nums)=>{
    
    const numeros = {
        par : [],
        impar : []
    }

    for(i of nums.sort((a,b)=>a-b)){
        ( i % 2 === 0)
          ? numeros.par.push(i)
          : numeros.impar.push(i)
    }
    
    console.log(numeros);
    console.log(`Los numeros [${numeros.par}] son pares, los números [${numeros.impar}] son nones`);

}
//arrs(12,99,1,2,3,4,5)
/*
(24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
 */

const arr = (...first) =>{

    const obj = {

        first,
        asc: first.map(el => el).sort(),
        desc: first.map(el => el).sort().reverse()

        //asc: [],
        //desc : []
    }

    //obj.asc.push(...first.sort((a,b)=>a-b))
    //obj.desc.push(...first.sort((a,b)=>b-a))

    console.log(obj);
}

//arr(44,22,2,3,4,5,6,7,.2)

/*
(25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true].
 */

const arer = (...evaluar) =>{

    //const evaluados = evaluar.filter((value, index, self) => self.indexOf(value)===index)

    const evaluados = [...new Set(evaluar)]
    console.log(evaluados);
}
//arer(10,10,"b","A","a","b",1)
/*
(26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5.
 */

const media =(...valores)=>{
    valores = (valores.reduce((a,b)=>a+b))/valores.length
    console.log(valores);
}
//media(9,8,7,6,5,4,3,2,1,0)
/*
(27) Programa una clase llamada Pelicula.

La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
  - Todos los datos del objeto son obligatorios.
  (- Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
  - Valida que el título no rebase los 100 caracteres.
  - Valida que el director no rebase los 50 caracteres.
  - Valida que el año de estreno sea un número entero de 4 dígitos.
  - Valida que el país o paises sea introducidos en forma de arreglo.
  - Valida que los géneros sean introducidos en forma de arreglo.
  (- Valida que los géneros introducidos esten dentro de los géneros 
  (   aceptados*.
  (- Crea un método estático que devuelva los géneros aceptados*.
  (- Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
  (  decimal de una posición.
  (- Crea un método que devuelva toda la ficha técnica de la película.
  (- Apartir de un arreglo con la información de 3 películas genera 3 
    instancias de la clase de forma automatizada e imprime la ficha técnica 
    de cada película.

* Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
 */
/* Todo está mal, no se puede resolver con el ejemplo
class movie {
    constructor (idIMDB, title, director, year, country, gender, clasIMDB){
        this.idIMDB = idIMDB;
        title;
        director;
        year;
        country;
        gender;
        clasIMDB;

        this.validarIMDB = this.validarCadena;
    }

    validarCadena(propiedad, valor){
        if(!valor) throw new Error(`${propiedad} está vacío`)
        if(typeof valor !== "string") throw new Error(`${propiedad} "${valor}" no es una caddena de texito`)

        return true
    }

    validarIMDB(idIMDB){
        if(this.validarCadena("IMDB id", idIMDB))
        if(!/{^([a-z])[2]([0-9])[7]$/.test(idIMDB))
            console.log(`IMDB id "${id}" no es válido debe tener 9 caracteres. los dos primeros letras minusculas seguidas de 7 numeros`)

    }
    /*validar(){
        if(
                this.idIMDB  === undefined
            ||  this.title === undefined
            ||  this.director === undefined
            ||  this.year === undefined
            ||  this.country === undefined
            ||  this.gender === undefined
            ||  this.clasIMDB === undefined
            ) throw new Error(`Por favor ingresa los datos de manera completa y en orden: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD`);
        
        if(this.title.length > 100 || this.director.length > 50)
            throw new Error(`El limite máximo de caracteres ha sido superado`);
        if(isNaN(this.year) || this.year.length !== 4 || !(Number.isInteger(this.year))) 
            throw new Error(`Por favor ingresa un numero de 4 digitos`)
        if(this.country instanceof  Array) throw Error (`Por favor ingresa el país en forma de arreglo`)
        if(this.gender instanceof  Array) throw Error (`Por favor ingresa el genero en forma de arreglo`)
        
}
*/
