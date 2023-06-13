const button = document.getElementById(`button`)
//! Objeto window - Es el objeto global, de él descienden todos los objetos
    //° alert()
        //window.alert(`Alerta, alerta, llego su mujer, vieja piruja`)
        //alert(`Sirve pa la misma jalada`)
    //° prompt()
        //const user = prompt(`Cual es ti nombre perrote`)
        //console.log(user)
    //° confirm()
        /*if(confirm(`acecta?`)){
            console.log(`Dijo que simon que sí acecta`)
        }else{
            console.log(`Dijo que no acecta D:`)
        }*/

//! Objeto console - Es el objeto que contiene la consola del navegador
    
    const consola = {
        name: `Ariel`,
        age : 23,
        adrees : `Valle de chalco`
    }
    //° console.log()
        console.log(consola)
    //° console.dir()
        console.dir(consola)
    //° console.error()
      console.error(`Fijate que sé poner errores`)
    //° console.table()
        console.table(consola)

//! Objeto location - Es el objeto que contiene la barra de direcciones
    // https://developer.mozilla.org/es/docs/Web/API/Location
        
    //° location.href
        //Nos muestra el link completo
        console.log(location.href)
        //Tambien nos permite cambiar la direccion de la página
        //location.href = `https://google.com`
    //° location.protocol
        // Ns muestra el protocolo de la pagina
        console.log(location.protocol)
    //° location.host
        //Nos muestra el dominio principal 
        console.log(location.host)
    //° location.pathname
        //Nos da el resto de la localización
        console.log(location.pathname)
    //° location.hash
        //
        console.log(location.hash)
    //° location.reload()
        // Hace que la página se recargue continuamente

//! Objeto history - Funciona para acceder al hitorial de navegación de la página, con los elementos de la pestaña por sesión
    // https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador
    
    //° back()
        // Nos lleva a la página anterior

        // history.back()

    //° forward()
        //Nos lleva a la página siguiente
        // history.forward()

    //° go(n|-n)
        //Permite navgar por el historial x páginas atras o adelante

        //history.go(2)
    
    //° length
        //Nos da el numoer de paginas en el historial
        //history.length

//! Objeto date
    //https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Date
    //https://www.w3schools.com/jsref/jsref_obj_date.asp

    //° Nos brinda la información de los días, empeiza a contar desde 0 y cuenta con el uso de calendario anglosajon, siendo el primer valor 0 = domingo, en este supuesto, los días van de 0 a 6 y los meses de 0 a 11; igualmente es necesario reordar que para hacer uso de este metodo, necesitamos instanciar desde antes el date 
    const date = new Date()
    console.log(date)

//! Timers (Nos permite establecer una diferencia de tiempo entre que se lee una función y que se ejecuta. )

    //° Timeout: setTimeout(()=>{code}, delay-in-miliseconds)
        //https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
     
        //Hace que se ejecute la función despues de delay. Si lo referenciamos mediante una variable/constante podemos pararlo con clearTimeout(referencia)
        
             const saludo = ()=>{
                 console.log(`Jalou`)
             }

             button.addEventListener(`click`,() =>{
                 setTimeout(saludo, 3000)
                 //Cuando llamamos a una función externa no es necesario volver a abrir la función desde el setTimeout, esa sintaxis nos sirve cuando definimos el codigo a ejecutar dentro de la misma funcion
             })
            
             button.addEventListener(`dblclick`, ()=>{
                 setTimeout(()=>{
                     console.log(`añios`)
                 }, 2000)
             })
    //° Interval: setInterval(()=>{code}, delay-in-miliseconds)
        //https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval

        //Hace que se ejecute la función cada delay milisegundos. Si lo referenciamos mediante una variable/constante podemos pararlo con clearInterval(referencia)
        let cont = 0;
        const interval = setInterval(()=>{
            console.log(cont)
            cont++
        }, 1000)
        button.addEventListener(`click`, ()=>{
        clearInterval(interval)
        })