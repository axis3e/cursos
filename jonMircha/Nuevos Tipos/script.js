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
? 
*/