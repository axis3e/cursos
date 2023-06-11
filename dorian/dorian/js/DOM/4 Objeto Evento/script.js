const input = document.getElementById(`input`)
const form = document.getElementById(`form`)
const gallery = document.getElementById(`gallery`)

input.addEventListener(`keyup`,(e)=>{
    console.log(e.key)
})

gallery.addEventListener(`click`, (e) =>{
    //console.log(e.target.textContent);
    e.target.classList.replace(`lime`, `gallery__item`)
})
gallery.addEventListener(`dblclick`, (e) =>{
    e.target.classList.replace(`gallery__item`, `lime`)
})