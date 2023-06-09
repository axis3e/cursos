//$ Seleccionar elementos del DOM

// Una recomendación dada y por convención, es que se use el id para interactuar con el html y las clases para el css
/*
( document.getElementById('id')
Acceder a un elemento a través de su id

const title = document.getElementById(`title`)
title.textContent = `Mira prro, le cambio el titulo`
*/

/*
(document | element) .querySelector('selectorCSS')
Accede al primer elemento que coincida con el selector CSS

const paragraph = document.querySelector(`.paragraph`)
console.log(paragraph)

const span = paragraph.querySelector(`span`)
console.log(span.textContent)   

const par = document.getElementById(`section`).querySelector(`span`)
console.log(par.textContent)

*/
/*
(document | element) .querySelectorAll('selectorCSS')
Accede a todos los elementos que coincidan con el selector CSS, devuelve un nodeList
*/
const paragraphs = document.querySelectorAll(`.paragraph`)
const paragraphsSpreed = [...paragraphs]
paragraphsSpreed.map(p=>p.style.color=`blue`)
console.log(paragraphsSpreed)