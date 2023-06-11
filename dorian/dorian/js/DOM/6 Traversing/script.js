//? Recorrer el DOM

//| DOM Traversing hace referencia al poder atravesar el DOM situandonos en un nodo y logrando subir o bajar en descendencia partiendo del nodo de referencia

//° Padre / parent (Nodo del que desciende)

        const parent = document.getElementById(`parent`)
    
    //! parentNode - Devuelve el nodo padre (que puede no ser un elemento)

        console.log(parent.parentNode)

    //! parentElement - Devuelve el nodo elemento padre

        console.log(parent.parentElement)

    // NOTA: Los nodos del tipo Document y DocumentFragment nunca van a tener un elemento padre, parentNode y parentElement devolverá siempre null.


//° Hijos / child (Nodo que desciende de un padre)

    //| childNodes - Devuelve todos los nodos hijos

        console.log(parent.childNodes)

    //| children - Devuelve todos los nodos elementos hijos

        console.log(parent.children)
        console.log(parent.children[0].textContent)

    //| firstChild - Devueleve el primer nodo hijo

        console.log(parent.firstChild)

    //| firstElementChild - Devueleve el primer nodo elemento hijo

        console.log(parent.firstElementChild)

    //| lastChild - Devueleve el último nodo hijo

        console.log(parent.lastChild)

    //| lastElementChild - Devueleve el último nodo elemento hijo

        console.log(parent.lastElementChild)

    //| hasChildNodes() - Devueleve true si el nodo tiene hijos y false si no tiene

        console.log(parent.hasChildNodes())
        console.log(parent.firstChild.hasChildNodes())
    

//° Hermanos / siblings (Nodo al mismo nivel)

    //) nextSibling - Devuelve el siguiente nodo hermano

        console.log(parent.nextSibling)

    //) nextElementSibling - Devuelve el siguiente nodo elemento hermano

        console.log(parent.nextElementSibling)
        console.log(parent.parentElement.nextElementSibling)

    //) previousSibling - Devuelve el anterior nodo hermano

        console.log(parent.previousSibling)

    //) previousElementSibling - Devuelve el anterior nodo elemento hermano

        console.log(parent.previousElementSibling)
        console.log(parent.parentElement.parentElement.previousElementSibling)

//° Cercano / closest(selector) 
    //Selecciona el nodo más cercano que cumpla con el selector, aún es experimental.

    
//° Prueba random
    console.log(parent.parentElement.parentElement.previousElementSibling.firstElementChild.textContent)