//| Métodos (static, getters, setters)

    class Animal {
        constructor(nombre, genero){
            this.nombre = nombre;
            this.genero = genero;
        }
        sonar(){
            console.log(`Hago sonidos por que estoy vive`)
        }
        saludar(){
            console.log(`Mi nombre es ${this.nombre}, un gusto`);
        }
    }

    class Perro extends Animal{
        constructor (nombre, genero, tamanio){
            super(nombre, genero);
            this.tamanio = tamanio;
            this.raza = null;
        }
        sonar(){
            console.log(`Soy un perro y me gusta ladrar`);
        }
        ladrar(){
            console.log(` GUUUUAUUU GUUUAUU `);
        }
        //( Metodo static: se puede ejecutar sin necesidad de instanciar la clase
        static queEres(){
            console.log(`Los perros somos animales mamiferos que pertenecemos a la familia de los canino. Somos considerados los mejores amigos del hombre `);
        }

        //( Los setters y getters son métodos especiales que nos permiten establecer y obtener los valores de atributos de nuestra clase
        get getRaza(){
            /// Regularmente el metodo obtenedor solo nos devuelve el valor de la propiedad
            return this.raza;
        }
        set setRaza (raza) {
            /// Al método set debemos pasarle el parametro que va a modificar, y este a su vez va a ser la asignación dentro de la funcion
            this.raza = raza
        }
    }

    Perro.queEres()
        /// Sin antes haber instanciado el objeto, podemos hacer uso del metodo y así obtener su info
    

    let scooby = new Perro(`Scooby`, `Macho`, `Gigante`)
    scooby.setRaza = `Gran Danes` 
        /// A los setters y getters se les trata como atributos, no como metodos, así que para definirlos es necesario usar la notación de punto y asignarles valor
    console.log(scooby);
    console.log(scooby.getRaza);