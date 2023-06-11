//! Insertar y eliminar elementos II

    //( SOPORTE TOTAL
        const list = document.getElementById(`list`);
        const secondList = document.getElementById(`secondList`);
        const thirdList = document.getElementById(`thirdlist`);
        const fourlist = document.getElementById(`fourlist`)

        //° Insertar un elemento antes del elemento de referencia
        //$ parent.insertBefore(newElement, referenceElement)
        
            const newElement = document.createElement(`li`);
            newElement.textContent = `I'm the new element`
            list.insertBefore(newElement, list.children[1])


            //) positions: 
                //) beforebegin - Antes de que empiece (hermano anterior)

                //) afterbegin - después de que empiece (primer hijo)

                //) beforeend - antes de que acabe (último hijo)

                //) afterend - después de que acabe (hermano siguiente)


            //| parent.insertAdjacentElement(position, element)

                const secondElement = document.createElement(`li`);
                const thirdElement = document.createElement(`li`);
                const fourdElement = document.createElement(`li`);
                const fiveElement = document.createElement(`li`);

                secondElement.textContent = `I'm the second element`
                list.insertAdjacentElement("beforebegin", secondElement)

                thirdElement.textContent = `I'm the third element`
                list.insertAdjacentElement("afterbegin", thirdElement)
                /*
                thirdElement.textContent = `I'm the third element`
                list.children[0].insertAdjacentElement("beforebegin", thirdElement)
                */


                fourdElement.textContent = `I'm the four element`
                list.insertAdjacentElement("beforeend", fourdElement)
                /*
                thirdElement.textContent = `I'm the five element`
                list.children[3].insertAdjacentElement("afterend", thirdElement)
                */

                fiveElement.textContent = `I'm the five element`
                list.insertAdjacentElement("afterend", fiveElement)
                

            //| parent.insertAdjacentHTML(position, HTML)

                secondList.insertAdjacentHTML("beforebegin", `<p>Parrafo</p>`)
                secondList.insertAdjacentHTML("afterbegin", `<li>Item1</li>`)
                secondList.insertAdjacentHTML("beforeend", `<li>Item2</li>`)
                secondList.insertAdjacentHTML("afterend", `<p>Parrafo 2</p>`)

            //| parent.insertAdjacentText(position, text)

                thirdList.insertAdjacentText("beforebegin", `Parrafo`)
                thirdList.insertAdjacentText("afterbegin", `Item1 `)
                thirdList.insertAdjacentText("beforeend", `Item2`)
                thirdList.insertAdjacentText("afterend", `Parrafo 2`)

        //° Reemplaza un hijo por otro
            //$ parent.replaceChild(newChild, oldChild)
            //thirdList.replaceChild(newElement,thirdList.children[0])
            thirdList.replaceChild(newElement,thirdList.children[1])
            // thirdList.replaceChild(newElement,thirdList.children[2])
            // thirdList.replaceChild(newElement,thirdList.children[3])
            // console.log(thirdList)


    //(DOM manipulation convenience methods - JQuery Like
        const elementOne = document.createElement(`li`);
        elementOne.textContent=`Uno`
        const elementTwo = document.createElement(`li`);
        elementTwo.textContent = `Dos`
        const elementThree = document.createElement(`li`);
        elementThree.textContent = `Tres`
        const elementFour = document.createElement(`li`);
        elementFour.textContent = `Cuatro`
        const elementFive = document.createElement(`li`);
        elementFive.textContent = `Cinco`
        const elementSix = document.createElement(`li`);
        elementSix.textContent = `Cambio`

        //) positions:
            //) parent.before() - Antes de que empiece (hermano anterior)
                fourlist.before(elementOne)

            //) parent.prepend() - después de que empiece (primer hijo)
                fourlist.prepend(elementTwo)

            //) parent.append() - antes de que acabe (último hijo)
                fourlist.append(elementThree)

            //) parent.after() - después de que acabe (hermano siguiente) 
                fourlist.after(elementFour)


        //° Reemplazar
            /// child.replaceWith(newChild)
                fourlist.children[2].replaceWith(elementFive)
                document.getElementById(`childre`).replaceWith(elementSix)


        //° Clonar y eliminar elementos
            //| element.cloneNode(true|false)
                //Clona el nodo. Si le pasamos true clona todo el elemento con los hijos, si le pasamos false clona solo el elemento sin hijos

                list.after(list.cloneNode(true))

            //| element.remove()
                //Elimina el nodo del DOM
                
                thirdList.remove()

            //| element.removeChild(child)
                //Elimina el nodo hijo del DOM
                fourlist.removeChild(fourlist.children[3])