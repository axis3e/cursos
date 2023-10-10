//! Asincronía
/*
$ Timers

? Js tiene funciones que nos permiten "pausar" o "retrasar" otras acciones por determinado lapso de tiempo o determinadas veces

= setTimeOut recibe un callback y un tiempo que se ejecuta en milisegundos

    console.log(`Hola 1`);
    setTimeout(()=>{
        console.log(`Hola xD`);
},3000)

= setInterval recibe un callback que se ejecutará indefinidamente y el tiempo que tardará entre cada ejecución expresado en milisegundos

setInterval(() => {
    console.log(new Date().toLocaleTimeString ());
}, 1000);

= clearTimeOut / clearInterval detienen la ejecucion del setTimeOut y el setInterval respectivamente
*/
/*
$ Event loop
    ? JavaScript es un lenguaje single thread lo que implica que sigue una sala "linea" al ejecutarse, o sea que solo realiza una cosa a la vez. Esto genera un problema al tener que, por ejemplo, hacer peticiones a la red, en caso de tener una conexion inestable, estariamos ante una pagina que no responde, es aqui donde entra en juego la asincronia.

    ? Antes de continuar explincando esto, es importante entender algunos conceptos: 
        °Procesamiento Single thread y Multi thread
            Los thread son la unidad básica de ejecucion de cada proceso que realiza el equipo, dependiendo del lenguaje, vamos a tener cada uno de estos. Javascipt por su parte hace uso de procesamiento single thread con la filosofia LIFO (last input first output).
        °Operaciones de CPU y Operaciones de I/O
            Las operaciones de CPU son aquellas que van a pasar mayor tiempo consumiendo procesos de CPU.
            Y las operaciones Input/Output (I/O) son aquellas que estarán la mayor parte del tiempo esperando la peticion del recurso que han solicitado
        °Operaciones concurrentes y paralelas
            La concurrencia puede entenderse o explicarse como el tener dos o más tareas progresando al mismo tiempo, mientras que el paralelismo es el tener dos o más tareas que se ejecutan al mismo tiempo. La principal difenrecia que podemos encontrar entre estas operaciones es que las concurrentes pueden empezar en diferentes momentos y podría decirse que se "encuentran" en la ejecución-
        °Operaciones Bloqueantes y No Bloqueantes
            Con esto nos referimos a la "fase" de espera que nos devuelve cada operacion al ejecutarse.
            Una operación bloqueante es aquella que no permite la interaccion con la página hasta que se haya completado la misma, por su parte las operaciones no bloqueantes son aquellas que permiten seguir la funcion del thread aun sin haberse completado.
        °Operaciones sincronas y asincronas
            Las operaciones sincronas son aquellas que se ejecutan en tiempo real y conforme avanza el código, meintras que las funciones asincronas son aquellas que se ejecutan independientemente del codigo y que regresan al mismo una vez que se hayan terminado de ejecutar.

            (La programación asíncrona es una técnica que permite a tu programa iniciar una tarea de larga duración y seguir respondiendo a otros eventos mientras esa tarea se ejecuta, en lugar de tener que esperar hasta que esa tarea haya terminado. Una vez que dicha tarea ha finalizado, tu programa presenta el resultado.)


 ? En Javascript tenemos dos tipos de condigo:
    ° Codigo Sincrono Bloqueante

        (()=>{
    console.log(`Codigo Sincrono`);
    console.log(`Inicio`);

          function dos (){
            console.log(`dos`);
          }

          function uno(){
            console.log(`Uno`);
            dos();
            console.log(`tres`);
            }
            uno()
            console.log(`Fin`);
          }
        )()
        console.log(`*****************`);
        

    °Código Asíncrono No bloqueante

(()=>{
    console.log(`Codigo asincrono`);
    console.log(`Inicio`);

    function dos(){
        setTimeout(() => {
            console.log(`dos`);
        }, 3000);
    }

    function uno(){

        setTimeout(function(){
            console.log(`Uno`);
        },0)

        dos();

        console.log(`Tres`);
    }

    uno();

    console.log(`Fin`);
})()

? Javascript es un modelo asincrono y no bloqueante, con un loop de eventos implementado en un solo hilo (single thread)para operaciones de entraday salida (I/O)
*/
/*
$ Callbacks
? Son funciones que se ejecutan una vez que otra lo hace, podriamos decir que son funciones anidadas dentro de otras funciones
callbackEjemplo = (value, callback)=>{
    setTimeout(() => {
        callback(value, value*value)
    }, Math.random()*1000);
}

callbackEjemplo(2,(value, result)=>{
    console.log(`Inicia callback`);
    console.log(`Callback: ${value}, ${result}`);
})
*/
/*
$ Promesas
    ? Una promesa es similar a un if-else en la cual vamos a evaluar el cumplimiento de una operacion con un resolve/reject, si es true pasa a ejecutar el resolve, si es al contrario, entra el reject.

    ? Así mismo, para hacer uso de estas evaluaciones, vamos a tener dos diferentes metodos:
        = .then() el cual nos va a mostrar el resultado si la evaluación es a resolve

        = .catch() que nos va a devolver el reject independientemente de la altura en la que se encuentre dentro de la funcion


const cuadradoPromise = (value)=>{
    return new Promise ((resolve, reject)=>{
        if(typeof value !== "number") reject (`El valor "${value}" no es válido, ingresa un valor númerico`)
        else{
        setTimeout(()=>{
            resolve({
                value,
                result: value*value
            });
        }, Math.random()*1000)}
    })
}

cuadradoPromise(`a`)
    .then(ress => console.log(ress))
    .catch(err=>console.error(err))
*/
/*
$ Async - Await
    ? La palabra clave async se utiliza para declarar una función asincrona. Una función declarada como async devuelve siempre una promesa.

    ? Para declarar la funcion como asincrona usamos las sintaxis:
        | async function /nombreDeFuncion/(){}
        | const /nombreDeFuncion/ = async ()=>  
    

const yaMano = async (ms)=>{
    const mesaye = await esperateMano(ms)
    return `Mira :D ${mesaye}`
}

const esperateMano = (ms) =>{
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve(`andamos wachando el async/await y esperamos ${ms} milisegundos para ello`)
        }, ms);
    })
}

yaMano(2000)
    .then(console.log)

    ? Dentro de una función async, se pueden utilizar la palabra clave await para esperar a que una promesa se resuelva antes de continuar la ejecución del código.

const cuadradoPromise = (value)=>{
    return new Promise ((resolve, reject)=>{
        if(typeof value !== "number") reject (`El valor "${value}" no es válido, ingresa un valor númerico`)
        else{
        setTimeout(()=>{
            resolve({
                value,
                result: value*value
            });
        }, Math.random()*1000)}
    })
}

const asincrona = async ()=>{
try {
    console.log(`Inicio de asincronia`);
    let obj = await cuadradoPromise(0)
    console.log(obj.value, obj.result);
    obj = await cuadradoPromise(1)
    console.log(obj.value, obj.result);
    obj = await cuadradoPromise(2)
    console.log(obj.value, obj.result);
    obj = await cuadradoPromise(3)
    console.log(obj.value, obj.result);
    obj = await cuadradoPromise(4)
    console.log(obj.value, obj.result);
    obj = await cuadradoPromise(`e`)
    console.log(obj.value, obj.result);

} catch (error) {
    console.error(error)
}
}
asincrona()
*/
