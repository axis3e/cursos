class Libro {
    constructor (title, author, year, gender){
        this.title = title,
        this.author = author,
        this.year = year,
        this.gender = gender 
    }
    info(){
        console.log(`El libro ${this.title} es del autor ${this.author}, fue escrito en ${this.year} y pertenece al genero ${this.gender}`)
    }
    getAuthor(){
        return this.author
    }
    getGender(){
        return this.gender
    }

}

let books = []
while(books.length < 3){
    let title = prompt(`Introduce un libro mi pana`);
    let author = prompt(`Dime su autor`);
    let year = prompt(`¿En que año se escribió?`);
    let gender = prompt(`¿A qué género pertenece? (Aventuras, terror, fantasía)`).toLowerCase();
    if(title != `` && author != `` && !isNaN(year) && year.length == 4 && (gender == `aventuras` || gender == `terror` || gender == "fantasía")){
        books.push(new Libro(title, author, year, gender))
    }
}

const allBooks = () =>{
    console.log(books)
}

const showAuthors = ()=>{
    let authors = []
    for (let book of books){
        authors.push(book.getAuthor())
    }
    console.log(`Estos son los autores: ${authors.sort()}`)
}

const showGender = () =>{
    const genders = prompt(`¿Qué genero te interesa?`)
    for(book of books){
        if(book.getGender() == genders){
            console.log(book.info())
        }
    }
}

allBooks();
showAuthors();
showGender();