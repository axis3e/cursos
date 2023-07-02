//| Arrays
    // Forma nueva de crear arrays
    /*const arr = Array.of(`J`,`u`,`a`,`s`);
    console.log(arr);
    // Método que permite la creación de multiples valores dentro de un array y asignarle valores
    //° Al usar el metodo "Array()" estamos asignando directamente el numero de items dentro del mismo, con el valor .fill podemos dar un valor por defecto
    const arr2 = Array(10).fill(true)
    console.log(arr2);*/
//| Objects
    /*const amikos = {
        total: 0,
        nombres: `no hay`,
        anitguos: [`Ilse`, `Gustavo`, `Fernando`],
        saludo: function () {
            console.log(`Un saludo a todes: ${this.anitguos}`)
        }
    }
    console.log(amikos.saludo());  
    //° object.keys() nos va a mostrar una lista de las llaves de nuestro objeto, por su parte object.value() nos devolverá la  lista con los valores.
    console.log(Object.keys(amikos));
    console.log(Object.values(amikos));
    //° .hasOwnProperty, nos devuelve un valor booleano en relación a si nuestro objeto contiene propiedad especificada
    console.log(amikos.hasOwnProperty(`anitguos`))*/
//| Condicionales
    /* El operador ternario nos sirve para lograr una simplificacion del if else, cuando solo hay una linea de codigo a ejecutar, su sintaxis es:
        condicion ? true : false
    
        let edad = 17;
        edad < 18 ? console.log( `Nelson, ilegal`) : console.log(`Tú date, ya alcanza el timbre`);
    */
//| Loops
    /*El ciclo forin recorre las propiedades de un objeto, mientras que for of recorre los valores de cualquier objeto iterable
    
        const num = [10, 20, 30, 40, 50]
    
        for(i = 0; i < num.length; i++){
            console.log(num[i]);
        }
    
        const objeto = {
            nombre: `Arieñ`,
            edad: 23,
            status: `soltero`
        }
        for(element in objeto){
            console.log(element, objeto[element])
        }

        const num = [10, 20, 30, 40, 50]
        for(i of num){
            console.log(i)
        } */
//| Try/Catch
        /* const arr = []
        try{
            ar == true
            console.log(`En el try está el código que queremos evaluar`)
        }catch{
            console.log(`En el catch encontramos los errores que se puedan llegar a presentar al evaluar el try`);
        }finally{
            console.log(`El bloque finally se usa para ejecutar al final de la prueba, independientemente de la respuesta del try`);
        }
        let num = `4`;
        try{
            if(isNaN(num)){
                throw new Error(`Nomamnches, no es numero mijo, corrijele`)
            }
            console.log(num * num)
        }catch (err){
            console.log(`Se produjo el error ${err}`)
        }
        */
//| Break / Continue
    /*
    Esto lo vimos en el curso de Dorian y tenenmos las notas en el script de bucles
    !Bueno, después de revisar, me di cuenta de que no hice notas, solo ejercicios que por falta de notas no entiendo
    
    De manera rápida, break lo que hace es terminar la ejecución del codigo, por ejemplo lo que aqui logramos es que al llegar i a la posición 5 el codigo se detenga (dentro de su ambito)
    
        const num = [0,1,2,3,4,5,6,7,8,9,0]
        
        for(i=0; i < num.length; i++){
        if (i===5) break

        console.log(num[i])
        }

   Por su parte, lo que hace continue es omitir el segmento de codigo que le señalamos
   
        for(i=0; i< num.length; i++){
            if(i===5) continue
            console.log(num[i])
        }
    */
/* 
    ) Ejercicios
    const num = [1,2,3,4,5,6,7,8,9,10]
    for(i of num){
        if(i%2 != 0){
            console.log(`Numero ${i} es non`)
        }else{
            console.log(`Numero ${i} es par`);
        }
    }
    
    for(i of num){
        if(num[i] % 2 != 0) continue
        console.log(`Pares: Valor - ${num[i]}, posicion - ${i}`)
    }

    for(e of num){
        if(num[e] % 2 == 0) continue
        console.log(`Nones: Valor - ${num[e]}, posicion - ${e}`)
    }
    */
//| Destructuración
    /*
    En resumen se refiere a la capacidad de dividir y/o "desestructurar" tanto arrays como objects, con una sintaxis muy simple:
    
    °Arrays
    const num = [1,2,3,4,5]
    let [one, two, three, four, five] = num
        ( En escencia, en este ejemplo tenemos un array que mediante la sintaxis destructuramos y asignamos cada valor en orden mediante las nuevas varibales y los nombres declarados
    console.log(one, two, three, four, five)

    °Objects
    
    const person = {
     name: `ariel`,
     age: `23 years`,
     city: `CDMX`
    }
    let{name, age, city} = person;
    ( Aquí sucede basicamente lo mismo, solo que a la hora de destructurar vamos a tener que usar obligadamente el nombre de la propiedad como nombre de nuestra variable 

    console.log(name, age, city);
    */

//| Objetos literales
    /*
    De manera resumida, implica la simplificacion de la forma de escribir y declarar las caracteristicas de un obejto:

        °Si una propiedad del objeto tiene el mismo nombre que una variable externa, no hace falta sino solo declarar el nombre de la propiedad y en el caso de los metodos, no es necesario usar : con simplemente inicializar la funcion es más que suficiente
    !Antes
        let nombre = `atsis`,
            edad = 23;
        const yomero = {
            nombre: nombre,
            edad: edad,
            saludo: () =>{
                console.log(`Jalou moto, me llamo ${nombre} y tengo ${edad}`)
            }
        }
        yomero.saludo()
    !Ahora
        let nombre = `atsis`,
            edad = 23;
            const yomero = {
                nombre,
                edad,
                status: `depresivo`,
                saludo () {
                    console.log(`Jalou moto, me llamo ${nombre} y tengo ${edad}`)
                }
            }
            / Se considera mala practica el usar una arrow function dentro de un objeto
        console.log(yomero);
        yomero.saludo()
   */
//| REST y Spreed Operator
    /*
    °REST nos permite agregar un numero indeterminado de elementos a una funcion
        const suma = (a,b,...c)=>{
            let res = a+b;
            c.forEach((n)=>{
                res += n
            })
            return res
        }
        console.log(suma(2,3,6,6,6,6,6,6));
    ° Spreed Operator nos sirve para separar arrays o cualquier elemento iterable 
        const arr = [1,2,3,4],
            arr2 = [5,6,7,8],
            word = `ola k ase`,
            arr3 = [...word, ...arr, ...arr2]
        console.log(arr3);
     */
//| 