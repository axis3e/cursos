/*
!Sintaxis simple
let truman = false;
(truman)? 
console.log("Eso es verdad"):
console.log("Eso es mentira")

!Sintaxis multiple
let truman = false;
(truman)?
    (
        console.log("Mira, te digo una cosa"),
        console.log(`Eso es verda´`)
    ):
    (console.log("eso no e verda"))
*/
let num = 9;

(num % 2 == 0 )? console.log(`${num} es par`) : console.log(`${num} no es par`); 
