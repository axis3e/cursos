/*
La palabra clave async se utiliza para declarar una función asincrona.
Una función declarada como async devuelve siempre una promesa.
Dentro de una función async, se pueden utilizar las palabras clave await para esperar a que una promesa se resuelva antes de continuar la ejecución del código.
*/
/*
const esperate_mano = () =>{
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve(`andamos wachando el async/await`)
        }, 2000);
    })
}
const ya_mano = async ()=>{
    const mesaye = await esperate_mano()
    return `Mira :D ${mesaye}`
}

ya_mano()
    .then(console.log)
*/

const wait = (ms) =>{
    return new Promise(resolve=>{
        setTimeout(() => {
            resolve(`You waited ${ms} ms`)
        }, ms);
    })
}
const waiting = async (ms)=>{
    console.log(`Function start`);
    const espera = await wait(ms);
    console.log(espera);
    console.log(`Function end`)

} 
const execute = async (ms)=>{
    console.log(`Before of the waiting`);
    await waiting(ms);

}
execute(2000) 


/*
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

const getUser = async (id)=>{
    const user = users.find(user => user.id == id);
    if (!user) throw new Error(`Doesn't exist an user with id ${id}`)
    else return user
}
const getEmail = async (user)=>{
    const email = emails.find(email => email.id ==  user.id);
    if (!email) throw new Error (`${user.name} hasn't email`)
    else return ({
        id: user.id,
        name: user.name,
        email: email.email
    })
}

const getInfo = async (id)=>{
    try{
        const user = await getUser(id);
        const res = await getEmail(user);
        return `${user.name} email is ${res.email}`
    }catch(error){
        console.log(error)
    }
}
getInfo(2)
    .then(console.log)*/