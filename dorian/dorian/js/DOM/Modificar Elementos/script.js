//? Atributos y clases
/*
!Atributos
    |element.getAttribute('attribute')
        Nos permite acceder al atributo del elemento
    |element.setAttribute('attribute', value)
        Nos permite acceder al elemento y modificarlo
    
    const title = document.getElementById(`title`);

    const name = document.getElementById(`name`);
    console.log(title.getAttribute(`id`));
    name.setAttribute(`type`, `date`)
    console.log(name)
*/

/*
!Clases
    |element.classList.add('class','class',...)
        Nos permite añadir clases
    |element.classList.remove('class','class',...)
        Nos permite remover clases
    |element.classList.contains('class')
        Nos permite identificar si una clase está o no 
    |element.classList.replace('oldClass', newClass)
        Nos permite reemplazar clases
    
    element.classList.toggle('class'[,force])
    const title = document.getElementById(`title`);
    const name = document.getElementById(`name`);
    
    title.classList.add("titulo-prro",`NoSeTeOlvidenLasMayusCainal`);

    title.classList.remove(`title`);

    if(title.classList.contains(`titulo-prro`)) console.log(`Aquita la clase mainfren`)
    else console.log(`Nota mai`);

    title.classList.replace(`NoSeTeOlvidenLasMayusCainal`, `yaseteolvido`)

    console.log(title)
*/

/*
!atributos directos
    |id
    |value
*/
const name = document.getElementById(`name`)
console.log(name.value.length)