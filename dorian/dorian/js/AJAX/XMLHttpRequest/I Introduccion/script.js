const button = document.getElementById(`button`)
button.addEventListener(`click`,()=>{
    let xhr
    if(window.XMLHttpRequest) xhr = new XMLHttpRequest
    else xhr = new ActiveXObject(`Microsoft.XMLHTTP`)
    //xhr.open(`GET`,`https://api.github.com/users/axis3e`)
    xhr.open(`GET`, `https://jsonplaceholder.typicode.com/users`)
    xhr.addEventListener(`load`, (data)=>{
        const dataJSON = JSON.parse(data.target.response)
        const list = document.getElementById(`list`)
        for(info of dataJSON){
            const listItem = document.createElement(`li`)
            listItem.textContent = `${info.id} - ${info.name}, ${info.username}`
            list.appendChild(listItem)
        }
        
    })
    xhr.send()
}
)