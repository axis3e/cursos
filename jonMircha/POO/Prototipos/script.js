//| Prototipos
/*
Es necesario comentar que si bien el uso de javascript es normalmente con objetos y clases, javascript es antes que nada un lenguaje basado en prototipos, el uso de clases es solamente para una interacción más simple con su sintaxis.

    °POO tiene 4 eleentos básicos:
        * Clases - Es un modelo/esquema/plantilla a seguir
        * Objetos - Es una instancia/copia de la clase
            $ Atributos - Caracteristica o propiedad del objeto (son variables dentro de un objeto)
            $ Métodos -son las acciones que un objeto puede realizar (son funciones dentro de un objeto)

Un prototipo es un mecanismo mediante el cual un objeto puede heredar proṕiedades/atributos y metodos, es decir que podrá heredar de un objeto padre sus caracteristicas.

? Por decirlo de alguna manera, las funciones constructoras son la base de las clases, y tienen una sintaxis especifica, no funcionan con funciones de flecha ni con alguna variación dentro de la declaracion de los valores/atributos.

# Es importante tenr en cuenta que una buen práctica es no mezclar los átributos y los metodos, la función constructora va a tener unicamente atributos y los metodos los vamos a añadir "por fuera"

*/
const Animal = function (nombre, especie){
    
    //° atributos 
    this.nombre = nombre,
    this.especie = especie
}

//° metodos
Animal.prototype.pres = function(){
    console.log(`Soy un ${this.especie} y me llamo ${this.nombre}`)
};
Animal.prototype.sal = function(){
    console.log(`Holi, que haces.`)
}
const Snoopy = new Animal (`Snoopy`, `Perro`),
    Garfield = new Animal (`Garfield`, `Gato`)

console.log(Snoopy);
console.log(Garfield);
Snoopy.pres()
Garfield.sal()