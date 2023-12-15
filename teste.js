/*

let n1 = "2"
let n2 = "3"
console.log(n1+n2)

let nome = "lucas"
let idade = 20
let nota = 10

console.log("O aluno " + nome + " com " + idade + " anos de idade" + ", tirou nota " + nota + " em programação");

// o ${} pode ser usado com a string entre crases (` `)
console.log(`O aluno ${nome} com ${idade} anos de idade, tirou nota ${nota} em programação`);


let frase = "Preciso praticar mais programação, se possível estudar nove horas e meia por dia"
//frase.length
//frase.toUpperCase()
//frase.toLowerCase()
console.log(frase.length); //conta os caracteres da string

console.log(frase.toUpperCase()); // passsa tudo para maiúsculo.

console.log(frase.toLowerCase()); // passa tudo para minúsculo



let n1 = 1554.5
console.log(n1.toFixed(2)) // adiciona casa decimal
console.log(n1.toFixed(2).replace('.',',')) // .replace('.',',') troca ponto por vírgula
console.log(n1.toLocaleString('pt-BR',{style: 'currency',currency: 'BRL'})) // valores monetários
console.log(n1.toLocaleString('pt-BR',{style: 'currency',currency: 'USD'}))
console.log(n1.toLocaleString('pt-BR',{style: 'currency',currency: 'EUR'}))
n1.toLocaleString('pt-BR',{style: 'currency',currency: 'EUR'})
let n2 = 2
let n3 = n1/n2
let n4 = n3.toLocaleString('pt-BR',{style: 'currency',currency: 'EUR'});
console.log(n4)


em qualquer expressão é analisado primeiro os () depois a **       dps * e / e %     e dps + e -
operadores relacionais e aritimeticos numa mesma linha ( resolve-se primeiro os aritimeticos )
operadores aritimeticos, relacionais e lógicos numa mesma expressão são resolvidos nessa mesma ordem


operadores:

1 aritimeticos: + - * / % **



2 relacionais:  >     <     >=    <=    ==     !=      |  operadores de identidade: === 



3 lógicos: priemiro ! dps o && dps o || 

rever aula 7 e 8

operador ternário(sempre o ultimo a ser feito):  ?:   ->    teste  ? true   :  false     ->
var media = 5.5
media > 7? 'APROVADO' : 'REPROVADO'
'REPROVADO'  
 
*/