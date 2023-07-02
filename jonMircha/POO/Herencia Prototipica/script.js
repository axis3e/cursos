//| Herencia Prototipica
/*
Para poder crear una "extensión" que herede los atributos de nuestra función constructora, necesitamos asociar la nueva función al padre que en este caso sería la funcion constructora Animal
*/
const Animal = function (nombre, especie){
    
    //° atributos 
    this.nombre = nombre,
    this.especie = especie
}

Animal.prototype.pres = function(){
    console.log(`Soy un ${this.especie} y me llamo ${this.nombre}`)
};
Animal.prototype.sal = function(){
    console.log(`Holi, que haces.`)
}

//Empezamos definiendo la función y declarando los atributos a heredar
const Perro = function(nombre, especie, tamanio){
    //Continuamos creando un nuevo atributo, que lit linkea nuestra nueva función a la función padre para poder heredar los atributos
    this.super = Animal,
    this.super(nombre, especie);
    this.tamanio = tamanio
}

Perro.prototype = new Animal;
    //Para no generar un gasto innecesario de recursos, es necesario declarar que la función Perro es una instancia del prototipo Animal

Perro.prototype.constructor = Perro
    // Se crea un constructor para la función, pero al chile no entiendo por qué, aunque se supone que al igualarlo, podrá heredar todas las caracteristicas de su padre sin problemas.
    

Perro.prototype.sal = function(){
    console.log(`Hola, me llamo ${this.nombre}, soy un ${this.especie} y mi saludo es ladrarte`)
} //Otro aspecto interesante es la posibilidad de sobreescriir metodos del prototipo padre en el hijo

Perro.prototype.ladrar = function(){
    console.log(`Guaaaauuu, guuuaaauuu`);
} //así como tambien es posible crear nuevos metodos exclusivos del hijo

const Snoopy = new Perro (`Snoopy`, `Perro`, `chico`),
    Garfield = new Animal (`Garfield`, `Gato`)
console.log(Snoopy);
Snoopy.sal();
Snoopy.ladrar()
Garfield.sal()