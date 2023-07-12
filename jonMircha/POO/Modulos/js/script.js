//| Módulos - Para importar los valores guardados hacemos uso de la palabra reservada "import" seguido de {nombre de variable/constante a importar} y de from "./ruta del archivo" (es importante mencionar que en la ruta es necesario usar "./" para definir el directorio que va a tomar ccomo referencia, ya que sin estos, se va al directorio padre, y con los el punto indicamos desde que carpeta haciaa arriba puede empezar a buscar)
/*
# import {variable} from "./ruta"
 */
import saludar, {PI} from "./constantes.js";
import { sumar, restar } from "./aritmetica.js";
import { aritmetica } from "./aritmetica.js";

//) A la hora de importar una variable/constante podemos hacer un cambio de nombre en función de nuestra comodidad o necesidad
import { saludandoaTodes as salud } from "./constantes.js";

console.log(PI);
console.log(sumar(4,5));
console.log(restar(7,6));
console.log(aritmetica.div(12,4));
saludar()
salud()