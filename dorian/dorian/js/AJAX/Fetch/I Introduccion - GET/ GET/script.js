/*Fetch API
    Proporciona una interfaz JavaScript para acceder y manipular partes del canal HTTP, como peticiones y respuestas.
    También provee un método global fetch() que proporciona una forma fácil y lógica de obtener recursos de forma asíncrona por la red.
    Está basado en promesas, por lo cual tiene un response y un reject internos
        Response tiene varios métodos
        array​Buffer(): Archivos binarios en bruto (mp3, pdf, jpg, etc). Se utiliza cuando se necesita manipular el contenido del archivo.
        blob(): Archivos binarios en bruto (mp3, pdf, jpg, etc). Se utiliza cuando no se necesita manipular el contenido y se va a trabajar con el archivo directamente
        clone(): crea un clon de un objeto de respuesta, idéntico en todos los sentidos, pero almacenado en una variable diferente.
        form​Data(): Se utiliza para leer los objetos formData
        json(): Convierte los archivos json en un objeto de JavaScript
        text(): Se utiliza cuando queremos leer un archivo de texto. Siempre se codifica en UTF-8 

Comprobacion de navegador    
if(window.fetch != undefined) console.log(`Fetch jala`)
else console.log(`Chaaaale mijo como que aún usas internet explorar cainal`)*/

const button = document.getElementById(`button`);

button.addEventListener(`click`, ()=>{    
    fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(res => res.ok ? Promise.resolve(res) : Promise.reject(res))
    .then(res => res.json())
    .then(res => {
        const list = document.getElementById(`list`);
        const fragment = document.createDocumentFragment();
        for(userInfo of res){
            const listItem = document.createElement(`li`)
            listItem.textContent = `${userInfo.id} - ${userInfo.name} is ${userInfo.username}`
            fragment.append(listItem)
        }
        console.log(res)
        list.append(fragment)
    })
})