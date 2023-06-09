//? Eventos
/*
° Un evento es cualquier cosa que  sucede en nuestro documento (ya sea que el contendio se lea, se cargue, se mueva el ratón, se pulse una tecla, la ventana se ciere, etc)

Su sintaxis es esta:
! Element.addEventListener(`event`, callback)
const button = document.getElementById(`button`);

button.addEventListener(`click`, () =>{
    const p = document.getElementById(`section`)
    p.textContent = `Quiero cambiar esto`
} )
*/
    const button = document.getElementById(`button`);
    const box = document.getElementById(`box`);
    const boxes = document.getElementById(`boxes`)
    const input = document.getElementById(`input`)


// !Eventos de ratón:
    //*click - cuando pulsamos el botón izquierdo del ratón
        button.addEventListener(`click`, () =>{
            button.textContent = `Mira prrote`
        } )

    //*dblclick - cuando pulsamos dos veces seguidas el botón izquierdo del ratón
        button.addEventListener(`dblclick`, () =>{
            button.textContent = `regresamos `
        } )
   
    //*mouseenter - cuando entramos en la zona que tiene el evento
        box.addEventListener(`mouseenter`, () =>{
            box.style.backgroundColor = "red"
        } )
    
        box.addEventListener(`mouseenter`, () =>{
            box.classList.replace(`box`, `aqua`)
        } )

    //*mouseleave - cuando salimos de la zona que tiene el evento
        box.addEventListener(`mouseleave`, () =>{
            box.style.backgroundColor = `aqua`
        })
    
        box.addEventListener(`mouseleave`, () =>{
            box.classList.replace(`aqua`, `box`)
        } )
        console.log(box.classList)

    //*mousedown - cuando pulsamos el boton izquierdo del ratón
        boxes.addEventListener(`mousedown`,()=>{
            console.log(`Picaste mi caja`)
        })

    //*mouseup - cuando soltamos el boton izquierdo del ratón
        boxes.addEventListener(`mouseup`,()=>{
            console.log(`Soltaste mi caja`)
        })

    //*mousemove - cuando movemos el rató
        boxes.addEventListener(`mousemove`, ()=>{
            console.log(`Le andas dando mover al ratoncillo prro`)
        })
        
//!Eventos de teclado:
    //*keydown - cuando pulsamos una tecla
        input.addEventListener(`keydown`, ()=>{
            console.log(`Picaste una tecla`)
        })
    //*keyup - cuando soltamos una tecla
        input.addEventListener(`keyup`, ()=>{
            console.log(`Soltaste la tecla`)
        })
    //*keypress - cuando pulsamos una tecla y no la soltamos
        input.addEventListener(`keypress`, ()=>{
            console.log(`Tas picando un tecla`)
        })