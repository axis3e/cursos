let cadena = "Parangaricutirimicuaro"
let cadena2 = "otorrinolaringologo"
/*Propiedad*/
console.log(cadena.length);
/*Metodos*/
/*Mayusculas*/console.log(cadena.toUpperCase());
/*Minusculas*/console.log(cadena.toLowerCase());
/*IndexOff*/console.log(cadena.indexOf("o"))
/*Replace*/console.log(cadena.replace('cua','rin'));
/*substring*/console.log(cadena.substring(3));
            console.log(cadena.substring(3, 7));
/*slice*/ console.log(cadena.slice(-5));
         console.log(cadena.slice(4, -12));
/*trim*/console.log(cadena2);
        console.log(cadena2.trim());
/*startsWith*/console.log(cadena.startsWith("P"));
            console.log(cadena.startsWith("p"));
            console.log(cadena.startsWith("a",6));
/*endWith*/console.log(cadena.endsWith("o"));
            console.log(cadena.endsWith("O"));
            console.log(cadena.endsWith("a",7));
/*includes*/console.log(cadena.includes("i"));
/*Template Strings*/ 
        console.log(`Esta palabra ${cadena} es larga y esta tambien ${cadena2}`)