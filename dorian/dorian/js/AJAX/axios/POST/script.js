button = document.getElementById(`button`)
button.addEventListener(`click`,()=>{
    axios({
        method: `POST`,
        url: `https://jsonplaceholder.typicode.com/posts`,
        data:{
            title: `A  new post`,
            body: `Lorem ipsum dolor sit amet`,
            userId: 1
        }
    })
    .then(res => console.log(res.data))
    .catch(console.log())
})