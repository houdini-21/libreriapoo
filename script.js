let lista_de_caracteres =
  "0123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz";
let numeroAleatorio;
let contminusculas = 0;
let contmayusculas = 0;
let contnumeros = 0;

class Password {
  constructor(longitud){
    longitud < 8
      ? ((this.longitud = 8))
      : (this.longitud = longitud);
  }

  generarPassword() {
    let passgenerada = "";
    for (let i = 0; i < this.longitud; i++) {
      numeroAleatorio = parseInt(Math.random() * lista_de_caracteres.length);
      passgenerada += lista_de_caracteres[numeroAleatorio];

      const caracter = passgenerada.charAt(i);

      if (/[A-Z]/.test(caracter)) {
        contmayusculas++;
      } else if (/[a-z]/.test(caracter)) {
        contminusculas++;
      } else if (/[0-9]/.test(caracter)) {
        contnumeros++;
      }
    }
    this.esFuerte(passgenerada);
  }

  esFuerte(passgenerada) {
    if (contmayusculas >= 2 && contminusculas >= 1 && contnumeros >= 5) {
      console.log(passgenerada, true);
    } else {
      console.log(passgenerada, false);
    }
  }
}

//const longitud = parseInt(prompt("Ingresa un numero"));
//const contrasena1 = new Password(longitud).generarPassword();
const contrasena1 = new Password(900).generarPassword();
const contrasena2 = new Password(21).generarPassword();
