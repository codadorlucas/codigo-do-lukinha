/*
// Fundamentos
let variavel = 15

console.log(variavel);

console.log(variavel + 35);

console.log("10" + " " + 50 + " " + variavel);


let objeto = { }     ; opcional
let array = [ ]     ;
let null01 = null;
let undefined = undefined;

console.log(typeof objeto)
console.log(typeof array)
console.log(typeof null01)
console.log(typeof undefined)
 
// let e const
// novas formas de declarar variáveis

// let x = 10

// conversão de tipos
const numero = "123"

const numeroConvertido

// switch
const frute = "banana"

switch (frute) {
    case "Banana":
        console.log("Banana é a fruta!")
        break;
    case "Maçã":
        console.log("Maçã é a fruta!");
        break;
    default:
        console.log("Fruta não encontrada!")
}

//Estruturas de repetiçao
//1, 2, 3, 4, 5, 6... => dependendo de uma condição

// contador, condição de limite, incremento

for(let i = 0; < 5; i++) {
    // concatenação
    console.log("O valor de i é:" + i);
}

//while
let k = 0;

while (k < 5) {
    console.log("")
}


// do while
let j = 0;

do {
    console.log ("O valor de j é:" + j);
    j++;
    while (j < 5);
}

// funções (guarda um trecho de código para executar várias vezes)
// function nome(arg1, arg2
// invocacao = nome)

*/

// exercicio 1: Olá, Mundo!
// crie um script que imprima "Olá, Mundo!" no console

// console.log("Olá, Mundo!")


/* function nomeFuncao (texto){
    console.log(texto)
}

nomeFuncao ("brincadeira")

*/

// exercicio 2
// dado o valor de uma string "1234", converta-o em número e

/*

function mostraTipo (tipo){
    console.log(typeof tipo)
}

let stringNumero = "123"
mostraTipo(stringNumero)
let converStringEmNumero = parseInt(stringNumero)
mostraTipo(converStringEmNumero);

*/

/*
let nome = "javascript é incrível"
//let contarCaracteres = nome.length
let contarCaracteres = nome.split(' ').length
console.log(contarCaracteres)
*/

/*
let palavras = ['guelo', 'queima', 'com', 'toda', 'certeza']

for (let i = 0; i <= 4; i++){
    console.log(palavras[i])
}
*/

//crie uma função que aceite uma string de horas no formato 24hrs. Transforme no formato 12h.

function convertHoras(horarioVinteQuatroHoras){
    let a = parseInt(horarioVinteQuatroHoras.split(":")[0])
    let b = horarioVinteQuatroHoras.split(":")[1]
    if(a >= 1 && a <= 11){
        console.log(+ a + ":" + b + " AM")
    }
    else if (a === 0){
        console.log(a + 12 + ":" + b + " AM")
    }
    else if (a === 12){
        console.log(a + ":" + b + " PM")
    }
    else{
        console.log(a -12 + ":" + b + " PM")
    }
}

convertHoras("15:00")


