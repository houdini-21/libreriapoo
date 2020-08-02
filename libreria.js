class ConjuntoLibros {
  constructor() {
    this._libros = [];
  }

  addLibros(Books) {
    if (this._libros.length > 4) {
      console.log(`No se pudo agregar el libro ${Books.titulo}. Espacio insuficiente, elimina un libro para liberar espacio`);
    } else {
      console.log(`El libro ${Books.titulo} fue agregado con exito`)
      this._libros.push(Books);
    }
  }
  searchLibros(name) {
    let books = this._libros;
    let arrayLibros = [];
    for (let book of books) {
      if (book.titulo.includes(name)) {
        arrayLibros.push(book);
      }
    }
    return arrayLibros;
  }

  deleteLibros(name) {
    let books = this._libros;
    let arrayLibros = [];
    console.log(`El libro ${name} fue eliminado con exito`)
    for (let n in books) {
      if (!(books[n].titulo.includes(name) || books[n].autor.includes(name))) {
        arrayLibros.push(books[n]);
      }
    }
    return (this._libros = arrayLibros);
  }

  showLibros() {
    return this._libros;
  }
}
let conjuntolibros = new ConjuntoLibros();

class Libro {
  constructor(titulo, autor, nPaginas, calificacion) {
    if (
      titulo === undefined ||
      autor === undefined ||
      nPaginas === undefined ||
      calificacion === undefined
    ) {
      console.log("ningun campo puede quedar vacio");
    } else {
      if (calificacion > 10 || calificacion < 1) {
        console.log("la calificacion no puede ser menor a 1 ni mayor a 10");
      } else {
        this._titulo = titulo;
        this._autor = autor;
        this._nPaginas = nPaginas;
        this._calificacion = calificacion;
        conjuntolibros.addLibros(this.dataLibro);
      }
    }
  }

  get titulo() {
    return this._titulo;
  }
  set titulo(data) {
    this._titulo = data;
  }
  get autor() {
    return this._autor;
  }
  set autor(data) {
    this._autor = data;
  }
  get nPaginas() {
    return this._nPaginas;
  }
  set nPaginas(data) {
    this._nPaginas = data;
  }
  get calificacion() {
    return this._calificacion;
  }

  set calificacion(data) {
    this._calificacion = data;
  }

  get dataLibro() {
    let dataLibro = {
      titulo: this.titulo,
      autor: this.autor,
      npaginas: this.nPaginas,
      calificacion: this.calificacion,
    };
    return dataLibro;
  }
}

let libro = new Libro("El cuervo", "Edgard alan poe", 40, 10);
let libro2 = new Libro("Rayuela", "Julio Cortázar", 200, 10);
let libro3 = new Libro("EL gato negro", "Edgard alan poe", 60, 10);
let libro4 = new Libro("Clean code", "Robert Martin", 454, 7);
let libro5 = new Libro("Crear o morir", "Andres Oppenheimer", 234, 10);
let libro6 = new Libro("Elogio de la locura", "Erasmo de Roterdam", 600, 10);

let option = conjuntolibros.showLibros()
console.log(option);
console.log("----------------------")
option = conjuntolibros.deleteLibros('Clean code');
console.log(option);

/** REALIZAR EL EJERCICIO:
Queremos mantener una colección de los libros que hemos ido leyendo, poniéndoles una calificación 
según nos haya gustado más o menos al leerlo. 
Para ello, crear la clase Libro, cuyos atributos son el título, el autor,
 el número de páginas y la calificación que le damos entre 0 y 10.
Crear los métodos típicos para poder modificar y obtener los atributos si tienen sentido. 
Posteriormente, crear una clase ConjuntoLibros, que almacena un conjunto de libros (con un array de un tamaño fijo).
 Se pueden añadir libros que no existan
 (siempre que haya espacio), eliminar libros por título o autor,
  mostrar por pantalla los libros con la mayor y menor calificación dada y, por último, 
mostrar un contenido de todo el conjunto.
Crear una clase PruebaLibros, que realice varias pruebas con las clases creadas. 
En concreto, pruebe a: crear dos libros, añadirlos al conjunto, eliminarlos por los dos criterios 
hasta que el conjunto esté vacío, volver a añadir un libro y mostrar el contenido final. */
