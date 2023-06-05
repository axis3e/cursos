/*
Crea una clase Libro
La clase libro tendrá título, autor, año y género.
Crea un método que devuelva toda la información del libro
Pide 3 libros y guárdalos en un array
Los libros se introducirán al arrancar el programa pidiendo los datos con prompt.
Validar que los campos no se introduzcan vacíos
Validar que el año sea un número y que tenga 4 dígitos
Validar que el género sea: aventuras, terror o fantasía
Crea una función que muestre todos los libros
Crea una función que muestre los autores ordenados alfabéticamente
Crea una función que pida un género y muestre la información de los libros que pertenezcan a ese género usando un el método que devuelve la información
*/
class Book {
    constructor(title, author, year, genre){
        this.title = title,
        this.author = author,
        this.year = year,
        this.genre = genre
    }
    getGenre(){
        return this.genre
    }
    getAuthor(){
        return this.author
    }
    info(){
        return `The title book is ${this.title}, the autor is ${this.author}, the year ${this.year} and the genre ${this.genre}`
    }
}

let books = [] 
while(books.length < 3){
    let title = prompt( `Introduce el titulo del libro`);
    let author = prompt( `Introduce el autor del libro`);
    let year = prompt( `Introduce el año del libro`);
    let genre = prompt( `Introduce el genero del libro (aventuras, terror , fantasía)`).toLowerCase();
    if(title != `` && author != `` && !isNaN(year) && year.length == 4 && (genre == "aventuras" || genre == "terror" || genre == "fantasía")){
        books.push(new Book(title, author, year, genre))
    }
}

const todosLibros = () =>{
    console.log(books); 
}
const showAuthors = () =>{
    let authors = []
    for (let book of books){
        authors.push(book.getAuthor())
    }
    console.log(`Estos son nuestros autores recibidos ${authors.sort()}`)
}
const showGenders = () =>{
    const genders = prompt(`¿Qué genero quieres buscar?`)
    for(const book of books){
        if(book.getGenre() == genders){
            console.log(book.info())
        }
    }
}
todosLibros();
showAuthors();
showGenders();