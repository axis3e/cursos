//! Nuevos tipos de datos en JavaScript
//| Symbol
/*
    ? Es un nuevo valor primitivo que da un identificador unico a una valor o darles propiedades privadas
    
    ?Un Symbol es un valor primitivo utilizado como identificador único en JavaScript. Puede crearse utilizando el constructor Symbol() o la notación literal Symbol. Cada símbolo creado es único e inmutable, lo que significa que dos símbolos con el mismo nombre siguen siendo diferentes.
    
    ?Los símbolos se utilizan comúnmente para crear propiedades privadas en objetos y para evitar colisiones de nombres en objetos o en el ámbito global. Debido a su unicidad, los símbolos son útiles en situaciones en las que se necesita un identificador único que no pueda ser sobrescrito ni accedido accidentalmente por otros fragmentos de código.

    ?La sintaxis es sencilla solo debemos crear nuestra variable/constante y asignarle la funcion constructora "Symbol", posteriormente, podremos agregarle una descripición, ya sea string o number


const SINTAXIS = Symbol(`description`)

const object = {
    [SINTAXIS]: `Este es el uso de symbol en un objeto`
}
//console.log(object);

const Symbol1 = Symbol(`Mi simbolo`),
 Symbol2 = Symbol(`Mi simbolo`),
 Symbol3 = Symbol(),
 person = {
    //El corchete dentro del objeto nos va a evitar el cambio de propiedad, basicamente lo hace privado.
    [Symbol1]: `Hola`,
    [Symbol2]: `k ase`
 };

person.Symbol1 = `Otro saludo`
person[Symbol3] = `Un saludo mas`
//Aunque estamos agregando un valor con el mismo nombre del symbol, este no afecta al symbol, al contrario crea una nueva propiedad con el nombre y sin embaro no hay error

for(i in person){
    console.log(i);
    console.log(person);
}

console.log(person.Symbol1);
console.log(person[Symbol1]);
console.log(Symbol1 === Symbol2);
console.log(person);

//Para poder listar los elementos privados del symbol tenemos la propiedad getOwnPropertySymbols(), aunque esto no nos devolvera el nombre del symbol,unicamente un listado con sus caracteristicas
console.log(Object.getOwnPropertySymbols(person));
*/
//| Sets
/*
    ? Los sets son estructuras de datos unicos, es similar a un array. Por decirlo de otra manera, un Set es un tipo de arreglo mejorado de Js que unicamente acepta elementos unicos.
    
    const arr = [1,1,1,`e`, "e", 2,2,2,"x","x",3,4,5,6,"x"],
    newarresp = new Set(arr);

    console.log(newarresp);

    ? Para conocer la longitud de nuestro set, usamos el atributo size
    console.log(newarresp.size);

    ?Para agregar elementos a un set ya creado usamos el atributo add
    const setnew = new Set();
    setnew.add(1)
    setnew.add(1)
    setnew.add(2)
    setnew.add(3)
    setnew.add("asa")
    setnew.add("a")
    setnew.add("casa")
    setnew.add("dasa")
    setnew.add(true)
    console.log(setnew);

    ? PAra poder eliminar datos de un set, tenemos la propiedad delete
    setnew.delete("dasa")
    console.log(setnew);

    ? Para poder ubicar un elemento unico de un set, es necesario convertir el set en un array y apara ello tenemos el metodo from
    let from = Array.from(setnew)
    console.log(from[3]);

    ? Para poder comprobar la existencia de un valor en un set, tenemos la propiedad has
    console.log(setnew.has("asa"));

    ? Para "limpiar" un set, podemos hacer uso de clear para vaciarlo
    setnew.clear()
    console.log(setnew)
*/
//| Maps
/*
    ? Son obejtos que sirven para almacenar conjuntos de valores asociados a manera de objeto (es basicamente un objeto primitivo)

    ? Para agregar un dato una vez creado el mapa, podemos hacer uso de set y requiere una key y un value
        let map = new Map();
        map.set("name", "axis");
        map.set("lastname", "3e")
        map.set("age", 23);
        map.set("colorcast", "concept")

    ? Las propiedades son bastante similares a las de los stes, podemos usar size, has, delete y get para mostrar un unico valor
        console.log(map);
        console.log(map.size);
        console.log(map.has("names"));
        console.log(map.get("name"));

        map.set("name", "axis3e")

        console.log(map);

        map.delete("lastname")

        console.log(map);

    ? Al ser un obejto itereable podemos recorrerlo con for of
        for([key, value] of map){
            console.log(`key ${key}, value ${value}`);
        }

    ? Con maps podemos crear valores de todo tipo, booleans, numbers, objects, undefined...
        map.set(false, "false")
        map.set(18, `dieciocho`)
        map.set(undefined, "undefined")
        console.log(map);

    ? Para poder agregar valores desde su inicialización, necesitamos hacer uso de corchetes para agregar cada par de elementos
        const Map2 = new Map([
            ["tea", "black"],
            ["topping", "tapioca"],
            ["Ice",2],
            ["sugar", 3]
        ])
        console.log(Map2);

    ? Para poder hacer uso de los elementos particulares tenemos las propiedades keys y values
        const keys = [...Map2.keys()],
            values = [...Map2.values()];
        console.log(keys, values);
*/
//| Weaksets y Weakmaps
/*

    ? Los weaksetes y weakmaps son como los hermanos menores de los mpas y los sets yse caracterizan por el hecho de que no pueden almacenar sino refrencias debiles, es decir que las llaves deben ser de tipo objeto y al ser debiles, les permiten al recolector de basura del navegador limpiarlas y hacer mas fluida la ejecución. En otras palabras, solompueden recibir datos de tipo object
    
    ? Los weaksets y los weakmaps no son elementos iterables, tampoco podemos elminar elementos globales, y tampoco agregar más de un elemento a la vez

        const setdebil = new WeakSet()
        //setdebil.add("a")
        let object1 = {"hola":21};
        let object2 = {"k":14};
        let object3 = {"ase": 6}
        setdebil.add(object1);
        setdebil.add(object2);
        setdebil.add(object3);
        console.log(setdebil);
        
        
        const mapdebil = new WeakMap()
        let key1 = {},
            key2 = {},
            key3 = {};
        
        mapdebil.set(key1, 1)
        mapdebil.set(key2, 2)
        console.log(mapdebil);
*/
//| Iterators
/*
    ? Podriamos decir que una iteración es una vuelta en el recorrido de un ciclo. Cuando hablamos de un elemento iterable, hablamos de una estructura de datos cuyos elementos pueden recorrerse. A su vez el iterador podriía decirse que es precisamente el "apuntador" que está recorriendo el elemento iterable.

    ? JS tiene una función especial destinada precisamente al recorrido de iterables con un iterador especial y funciona básicamente así:
    
    const iterable = [1,2,3,"a","b","c"],
        iterable2 = [1,2,2,2,5,6,5,5,3,4,5,6,7,"a","b","c"],
        iterador = iterable[Symbol.iterator](),
        iterador2 = iterable2[Symbol.iterator](),
        iterador3 = (new Set(iterable2))[Symbol.iterator]();
    
    console.log(iterable);

    ? Aquí vamos a estar recibiendo la información sobre nuestro iterable
    console.log(iterador);
    console.log(iterador2);

    ? Con next vamos a recibir el valor que estamos teniendo en la posición y un boolean que nos refiera si con este elemento termina nuestro iterable 
    //console.log(iterador2.next())
    //console.log(iterador2.next())
    //console.log(iterador2.next())
    //console.log(iterador2.next())
    //console.log(iterador2.next())
    //console.log(iterador2.next())
    //console.log(iterador2.next())
    
    let next = iterador.next()
    while(!next.done){
        console.log(next.value);
        next = iterador.next()
    }
    
    let next2 = iterador3.next()
    while(!next2.done){
        console.log(next2.value);
        next2=iterador3.next()
    }
*/
//| Generators
/*
    ? Los generators son en esencia una funcion que nos permite trabajar de manera más amigable con iteradores, dicho de otra manera, son una interfaz que permiten una interaccion más sencilla con los iteradore.

    ? Aquí lo que estamos haciendo es volver iterable nuestra funcion con el * a un lado de la decalaracion function, una vez hecho esto, lo que seguimos haciendo es crear los elementos que se detectarán como iterables con la pálabra reservada yield, basicamente le estamos diciendo al navegador cual es el "tope" donde va a detenerse en cada vuelta
    
    function* func () {
        yield "hola";
        console.log("Hola consola");
        yield "Hola2";
        console.log("Seguimos con más instrucciones de nuestros codigos");
        yield [1,2,3,4,5,6,7,8];
        yield "Hola4"
    }
    
    let function2 = func(),
        count = 1
    
    function2.next()
    console.log(function2.next());
    console.log(function2.next());
    
    for(i of function2){console.log(`${i} y ${count++}` + i); function2 = func() }
    
    ? Para poder usar la información de una function iterable en un arreglo podemos hacer uso de spreed operator
    
        const arr = [...func()]
        console.log(arr);
    
    ? Como practica personal estamos dando log de un generator con informacion dinamica usando parametros que ingresamos directamente en el log
*/
function* iteration (user, lastname){
    yield `Usuario:${user}, apellido:${lastname}`
}

console.log(...iteration("axis", "3e"));