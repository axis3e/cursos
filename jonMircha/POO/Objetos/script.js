//| Objetos
/*
    °Console https://developer.mozilla.org/es/docs/Web/API/console

console.log(console);
console.error("Esto es un error");
console.warn("Esto es un aviso");
console.info(`Esto es un mensaje informativo`)
//console.clear() Limpia la consola 
console.log("Un registro de los que ha pasado en nuestra aplicación");
//console.dir(document)
    //Muestra un listado interactivo de las propiedades de un objeto JavaScript específico. Este listado permite usar triángulos de lista desplegables para examinar el contenido de objetos hijo
console.clear()
console.group(`Grupo de console`)
console.log(`Uno`);
console.log(`dos`);
console.log(`tres`);
console.log(`cuatro`);
console.log(`cinco`);
console.log(`seis`);
console.groupEnd();
console.clear()
console.table(Object.entries(console));
console.clear()
const num = [1,2,3,4,5],
    word = ['a','e','i','o','u']
console.table(num);
console.table(word)
console.clear()
const dog ={
    nombre: `yegua`,
    edad: `un año`,
    color: `negra`,
    raza: `mestiza`,
    tamanio: `mediana`
}
console.table(dog)

console.clear();

console.time(`Func`)
const nums = Array(1000000)
for(i of nums){nums[i] = i}
console.timeEnd(`Func`)

console.clear()
*/
/*
    °Date https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Date

    let fecha = new Date();
    console.log(fecha); 

    console.log(fecha.getDate());// Día del mes
    console.log(fecha.getDay()); // Día de la semana
    console.log(fecha.getMonth());// mes
    console.log(fecha.getFullYear());
    console.log(fecha.getHours());
    console.log(fecha.getMinutes());
    console.log(fecha.getSeconds());
    console.log(fecha.getMilliseconds());
    console.log(fecha.toString());
    console.log(fecha.toDateString());
    console.log(fecha.toLocaleString());
    console.log(fecha.toLocaleDateString());
    console.log(fecha.toLocaleTimeString());
    console.log(fecha.getTimezoneOffset());
    console.log(fecha.getUTCDate());
    console.log(fecha.getUTCHours());
    console.log(Date.now());
*/
/*
    °Math https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Math
    Es un método estatico, por lo tanto no es necesario instanciarlo, podemos acceder directamente a él mediante su definicion (o como sea que se diga)
    console.log(Math);
    console.log(Math.PI);
   console.log(Math.abs(-7, 8));// Valor absoluto
   console.log(Math.ceil(7.2));// redondear hacia abajo 
   console.log(Math.floor(7.2));//redondear hacia arriba
   console.log(Math.round(7.49));//redondear al más cercano
   console.log(Math.sqrt(9));//raíz cuadrada
   console.log(Math.pow(2,5));//potenciar
   console.log(Math.sign(-15));//positivo/negativo/0
   console.log(Math.random());
   console.log(Math.round(Math.random()*1000))
*/
/*
    °Operador cortocircuito

    )Cortocircuito OR - cuando el valor de la izquierda en la expresión siempre se pueda validar a true, es el valor que se cargará por defecto

    )Cortocircuito AND - cuando el valor de la izquierda en la expresión siempre pueda validar a false es el valor que se cargará por defecto

    let saludo = (nombre) => {
        nombre = nombre || `Desconocido`
    console.log(`Hola ${nombre}`);
}
    saludo(`Axis`)

    console.log(18 || "valor de la derecha");
    console.log(true || "valor de la derecha");
    console.log([] || "valor de la derecha");
    console.log({} || "valor de la derecha");
    console.log(-2 || "valor de la derecha");
    console.log(3 || "valor de la derecha");

    console.log(false && "valor de la derecha");
    console.log(null && "valor de la derecha");
    console.log(undefined && "valor de la derecha");
    console.log("" && "valor de la derecha");
    console.log(0 && "valor de la derecha");
*/
/*
    °alert, confirm y prompt
    let alerta = alert(`Alerta`),
        confirma = confirm(`Confirmación`),
        aviso = prompt(`Aviso`)
    
    console.log(alerta);
    console.log(confirma);
    console.log(aviso);
*/
/*
    °Expresiones regulares
    Son una secuencia de caracteres que forman un patrón de búsqueda, principalmente utilizada para la busqueda de patrones de cadenas de caracteres
    
        let cadena = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste ex deserunt cumque laborum maiores magni molestiae lorem voluptatibus possimus mollitia? Repudiandae, recusandae non vero iste necessitatibus nesciunt expedita possimus sint minima? lorem`

        let expREg = new RegExp(`lorem`, "g")
        console.log(expREg.test(cadena));
        console.log(expREg.exec(cadena));
        
        let expReg2 = /lorem/ig;
        console.log(expReg2.test(cadena));
        console.log(expReg2.exec(cadena));
*/
/*
    °Funciones anonimas autoejecutables
    En escencia, son funciones que en el momento que las definimos, se ejecutan
    Sintaxis :
        ?(function(){})()

        (function(nombre){
            console.log(`Hola ${nombre}, esta es una funcion sin nombre que se ejecuta en cuanto la escribimos :D, es decir una funcion anonima eutoejecutable`);
        })(`Ariel`);
        
        (function (d,w,c){
            c.log(`Ejemplo funcional`);
            c.log(w);
            c.log(d);
        })(document, window, console);

    /Tipos de escritura 
        )Clásica
        = (funcion(){})();

        )Crockford
        ! ((function(){})());
        
        )Unaria
        | +function(){}();
        
        )Facebook
        $ !function(){}();
*/
