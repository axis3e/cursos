/*
°Objetos
/Son estructuras de datos que pueden representar valores, propiedades y acciones que puede realixar el objeto.
/ Todos los objetos tienen propiedades o atributos y comportamientos o acciones representados por pares de clave (key) : valor (value)

const person = {
    age : 36,
    name : `axis`,
    sons : [`Ariel`, `Manuel`, `Rodo`, `Xime`]
}
for(const dat in person.sons){
    console.log(person.sons[dat])
}

for(son of person.sons){
    console.log(son)
}
*/
const Person = {
    age : prompt(`Ingresa tu edad`),
    name : prompt(`Ingresa tu nombre`),
    sons : [`Ariel`, `Manuel`, `Rodo`, `Xime`]
}
console.log(`Hola  ${Person.name}, tienes ${Person.age} años y tus hijos son ${Person.sons.join(`, `)}`)

for(son of Person.sons){
    console.log(son)
}