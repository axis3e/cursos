//Las promesas son obejetos con dos callbacks internos 

const users = [
    {
        id: 1,
        name: `axis`
    },{
        id: 2,
        name: `Ariel`
    },{
        id: 3,
        name: `Uriel`
    },{
        id: 4,
        name: `Josa`
    }
]
const emails = [
    {
        id: 1,
        email: `axis260300@gmail.com`
    },{
        id :2,
        email: `axz1503@gmail.com`
    },{
        id: 3,
        email: `pulgouri3008@gmail.com`
    }
]
const getUser = (id)=>{
    const user = users.find(user => user.id == id)
    return promise = new Promise((resolve, reject)=>{
        if(!user) reject (`Doesn't exist an user whith id ${id}`)
        else resolve (user)
    })
}

const getEmail = (user)=>{
    const email = emails.find(email => email.id == user.id)
    return promise = new Promise((resolve, reject)=>{
        if(!email) reject (`${user.name} hasn't email`)
        else resolve ({
            id: user.id,
            name: user.name,
            email: email.email
        })
    })
}
getUser(3)
    //)Con .then estamos accediendo a la promise y "sacamos" su contenido con el nombre user
    .then(user => getEmail(user))
    //Este user lo pasasmos como parametro a getEmail y accedemos nuevamente con then.
    .then(res => console.log(res))
    //Por su parte con catch accedemos a todas las promesas en cualquier nivel que se presente el error
    .catch(err => console.log(err))

/*
getUser(6)
    /Una vez que le dimos el valor a getUser con then solo le decimos que use la información obtenida como parametro de la funcion que ya tenemos fabricada
    .then(getEmail)
    /Como ya accedio al "primer nivel con el primer then con el segundo vamos al "segundo nivel" y ya solo nos lo presenta con el console.log
    .then(console.log)
    /El catch sencillamente busca un error y una vez que lo encuentra, hace lo que se le indica, en este caso imprimirlo
    .catch(console.log)
*/