//| Repaso del repaso
/*
(1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá 10.
*/
const counter = (iterable)=>{
    let count = 0
    for(i of iterable) count++
    console.log(`La palabra ${iterable}, tiene ${count} letras`);
}

const string = (frase)=>{
    console.log(`Tu frase "${frase}" tiene ${frase.length} caracteres`);
}

//string(`ola k ase`)

//counter(`Hola`)
//counter(`diafragma`)
//counter("rapuido")

/*
(2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
*/
const cutHere = (cut, here)=>{
    chopped = cut.slice(0,here)
    console.log(`La palabra recortada queda como "${chopped}"`);
}
//cutHere(`Hola k ase`, 4)

/*
(3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].
*/
const separate = (words, separator)=>{
    cut = words.split(separator)
    console.log(cut);
}
//separate("Hola que tal", " ")
/*
(4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo.
*/
const loop = (words, repeater) =>{
    repeated = words.repeat(repeater)
    console.log(repeated);
}
//loop("ola ", 5)
/*
(5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH".
*/
const reverse = (frase) =>{
    alrevesvolteado = frase.split("").reverse().join("")
    console.log(alrevesvolteado);
}
//reverse("MUAJAJAJAJJAJAJJAJAJAMAKAKSHSJFGHJSD")
//reverse("Hola Mundo")
/*
(6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2.
*/
const search = (words,keyword)=>{
    let i=0,
        counter=0;
    while(i!== -1){
        i = words.indexOf(keyword, i)        
        if(i!==-1) {
            i++
            counter++
        }
    }
    console.log(`Se repite ${counter} veces ${keyword} en el texto`);
}
//search("hola mundo adios mundo", "mundo")
/*
(7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
*/
const palindromo = (word)=> {
    reversed = word.split("").reverse().join("")
    if(reversed==word){
        console.log(`La palabra ${word} es un palindromo, pues al revés se lee ${reversed}`);
    }else{
        console.log(`${word} no es palindromo, al revés se lee ${reversed}`);
    }
}
//palindromo(`oso`)
//palindromo(`hola`)
/*
(8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
*/

/*
(9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
*/
const rand = ()=>{
  let num = 0
  while(num < 501 || num > 600){
        num = Math.round(Math.random()*1000)
    }
    console.log(num);
}
//rand()
//rand()
//rand()
/*
(10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true.

*/