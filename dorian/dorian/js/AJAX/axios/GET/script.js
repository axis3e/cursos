button = document.getElementById(`button`);
button.addEventListener(`click`,()=>{
    axios({
        method: `GET`,
        url: `https://jsonplaceholder.typicode.com/users`
    }).then(res => {
        const list = document.getElementById(`list`)
        const fragment = document.createDocumentFragment()
        for (userInfo of res.data){
            const listItem = document.createElement(`li`)
            listItem.textContent = `${userInfo.id} - ${userInfo.name}`
            fragment.append(listItem)
        }
        list.append(fragment)
    }).catch(console.log)
})