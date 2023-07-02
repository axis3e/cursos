//| Clases
/*
Las clases son una manera más sencilla de trabajar con prototipos, se definen con la palabra reseervada class, y los parametros los definimos dentro de ellas con constructor
*/
    class Animal {
        constructor(nombre, genero){
            this.nombre = nombre;
            this.genero = genero;
        }
        //Los métodos se definen con la sintaxis simplificada para funciones y automaticamente se separan de la función primaria
        sonar(){
            console.log(`Hago sonidos por que estoy vive`)
        }
        saludar(){
            console.log(`Mi nombre es ${this.nombre}, un gusto`);
        }
    }

    //En clases la herencia funciona con la palabra reservada extends y con esto ya estamos declarando que nuestra nueva clase es hija de la función padre
    class Perro extends Animal{
        constructor (nombre, genero, tamanio){
            //El metodo super solicita lainformación del constructord de la clase padre
            super(nombre, genero);
            this.tamanio = tamanio;
        }
        sonar(){
            console.log(`Soy un perro y me gusta ladrar`);
        }
        ladrar(){
            console.log(` GUUUUAUUU GUUUAUU `);
        }
    }
    
    let scooby = new Perro(`Scooby`, `Macho`, `Wrande`);
    console.log(scooby);
    scooby.sonar() 
    scooby.ladrar();