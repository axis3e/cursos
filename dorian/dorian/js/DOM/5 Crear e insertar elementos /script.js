//? Crear e insertar elementos



const title = document.getElementById(`title`);
const daylist = document.getElementById(`dayList`);
const daySelect = document.getElementById(`daysSelect`);
const main = document.getElementById(`main`)

//* Crear un elemento: 
//* document.createElement(element)
    //const itemList = document.createElement(`li`)
//* Escribir texto en un elemento: 
//* element.textContent = texto
    //itemList.textContent = `Odio lo lune`
//* Añadir un elemento al DOM:
//* parent.appendChild(element)
    //daylist.appendChild(itemList)

    //const itemListTwo =document.createElement (`li`);
    //itemListTwo.textContent = `Lo marte, no e' tan malo`
    //daylist.appendChild(itemListTwo)


const orderedList = document.createElement(`ol`);
main.appendChild(orderedList);
const list = document.createElement(`li`)
list.textContent=`Primer elemento ordenado`;
orderedList.appendChild(list)


//* Escribir HTML en un elemento: 
//* element.innerHTML = código HTML
    //title.innerHTML = `<span>000:</span>`

//* Fragmentos de código: 
//* document.createDocumentFragment()

const days = [`lunes`, `martes`, `miercoles`, `jueves`, `viernes`, `sabado`, `domingo`]

const fragment = document.createDocumentFragment()

for(const day of days){
    const listItem = document.createElement(`li`);
    listItem.textContent = day;
    fragment.appendChild(listItem)
}
daylist.appendChild(fragment)

const selectFragment = document.createDocumentFragment();
for(const dayf of days){
    const slection = document.createElement(`option`);
    slection.setAttribute(`value`, dayf.toLocaleLowerCase())
    slection.textContent= dayf;
    selectFragment.appendChild(slection)
}
daySelect.appendChild(selectFragment)