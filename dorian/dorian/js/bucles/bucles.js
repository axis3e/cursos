/*
!Bucles
Se usan para que un fragmento de código se repita hasta cumplir ciertas condiciones.
Existen determinados (aquellos que especificamos el número de veces a repetir) e indeterminados (no sabemos número de repeticiones).
°Indeterminados
|While 
let pass = prompt(`Defina una contraseña`);
let login = prompt(`Ingrese su contraseña`);
while(login != pass){
    prompt(`Vuelva a intentarlo`)
}
|Do while
let pass = `ola`;
do{
   login = prompt(`Ingrese su contraseña`)
}while(login != pass)

°Determinados
!for
for(i=10; i>=1; i--){
    alert(`Faltan ${i} segundos`)
}
alert(`Feliz año nuevo mainfren`)
|for of
let names =[`paco`, `juan`, `maria`, `donatelo`];
for(let name of names){
    console.log(names.indexOf(name))
};
|for in
for(let name in names){
    console.log(names[name])
};
|break 
let abc = ["a","b","c","d","e","f","g"]

for(i=0; i<=abc.length; i++){
    if(abc[i]=="d"){
        break
    }
    console.log(abc[i])
}

for(num of abc){
    if(num == "d"){
        break
    }
    console.log(num)
}
|continue
for(i=0; i<=abc.length; i++){
    if(abc[i]=="d"){
        continue
    }
    console.log(abc[i])
}

for(num in abc){
    if(abc[num]=="d"){
        continue
    }
    console.log(num)
}
*/