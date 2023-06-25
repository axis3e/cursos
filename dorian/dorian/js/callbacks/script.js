/*
Un callback es una función que se ejecuta dentro de otra función.
No son asincronos, es decir que se ejecutan en orden
*/
/*
const getUser = ( id, cb)=>{
    const user = {
        name: `axis`,
        id        
    }
    if(id == 2) cb(`User not exist`)
    else {cb(null, user)
    console.log(`User name is ${user.name}`)}
}
getUser(2, (err, user)=>{
    if (err) return console.log(err)
    //console.log(`User name is ${user.name}`)
})
 */
/*
 */
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
const getUser = (id, cb)=>{
    const user = users.find(user => user.id == id)
    if(!user) cb(`Not exist a user whith id ${id}`)
    else cb(null, user)
}

const getEmail = (user, cb)=>{
    const email = emails.find(email => email.id == user.id)
        if(!email) cb(`${user.name} hasn't email`)
        else cb(null, {
            id: user.id,
            name: user.name,
            email: email.email
        })
}

// La función getEmail funciona con parametros herdados, por eso algunos de ellos no están propiamente defindios y pareciera que salen de la nada

getUser(3, (err, user)=>{
    if (err) return console.log(err)
    getEmail(user, (err, res)=>{
        if (err) return console.log(err)
        console.log(res)
    })
})