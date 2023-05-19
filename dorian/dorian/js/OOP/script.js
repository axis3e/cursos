class Person {
    constructor(edad, nombre, hijos){
        this.age = edad,
        this.name = nombre,
        this.son = hijos
        //this.dates = edad+nombre+hijos
        this.salud = `Hola, mi nombre es ${this.name}, tengo ${this.age} años, y tengo ${this.son} hijos, por la bondad de Dios`
    }
    saludo(){
        console.log(
            `Hola, mi nombre es ${this.name}, tengo ${this.age} años, y tengo ${this.son} hijos, por la bondad de Dios`
        )
    }
}
const people = new Person(23, "Ariel", 0);
const rosa = new Person (35, `Rosa`, 2);
console.log(rosa)