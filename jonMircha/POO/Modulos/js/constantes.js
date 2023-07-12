//| Para exportar variables o constantes hacemos uso de la palabra reservada "export"
export const PI = Math.PI;

//En los casos que queramos usar un export default, es necesario declara antes la función o el dato que vayamos a usar, ya que no podemos hacer uso de una variable o contante que no se ha iniciado, esto scede ya que el default hace que el dato se inicialice en el momento que se llama al export 
//( Aunque este problema es reservado unicamente para constantes y variables, con functions y classes no pasa nada
const saludar = () => {
    console.log(`Hola Mundo`);
}
export default saludar

export const saludandoaTodes = () =>{
    console.log(`Hola a todes :D`);
}