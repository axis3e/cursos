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
//|