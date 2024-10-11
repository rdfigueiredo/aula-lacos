// Exercício 01
/* ● No nosso sistema, o usuário será solicitado para inserir
vários números, um após o outro
● Quando ele digitar o número '0', devemos parar de
solicitar novos inputs e imprimir no console a soma de
todos os números por ele indicados
● Ex.: Vamos supor que ele coloque: 10, 3, 50, 7, 0.
O resultado deve ser: 70 */


let numero = Number(prompt("Digite um número ou 0 pra sair"))
let soma = 0

while (numero !== 0) {
    numero = Number(prompt("Digite um número ou 0 pra sair"))
    soma = soma + numero
}

console.log(soma)

// 'while': Realiza uma ação até que a condição dentro dos seus parênteses se torne falsa


// Exercício 02 
/* ● Escreva uma função que receba um array com números e
devolva qual o maior dentro dele
● Ex: Para o array [11, 15, 18, 14, 12, 13], a saída deve ser: "O
maior número é 18" */


const numeros1 = [15, 30, 450, 60, 75, 90, 1000]
function devolveMaiorNumero(array) {
    let maiorNumero = 0
    for(let i = 0; i < array.length; i++) {
    let numeroAtual = array[i]
    if(numeroAtual >= maiorNumero) {
    maiorNumero = numeroAtual
    }
    }
    console.log(`O maior número do array é ${maiorNumero}`)
}
devolveMaiorNumero(numeros1)
// Resolução do slide



let numeros2 = [5, 14, 65, 87, 64, 90, 12]

function recebeMaior(array){
    let maior = 0
    for (let i = 0; i < array.length; i++) {
        if(array[i] > maior) {
            maior = array[i]
        }
    }
    return maior
}
console.log(recebeMaior(numeros2))
// Resolução do professor

// 'for': Usado para realizar loops cujas condições estejam diretamente relacionadas a números e a um incremento fixo


// Exercício 03
/* ● Considere que você tem um array com várias palavras.
Nossa tarefa é criar uma função para imprimi-las em uma
só mensagem colocando um espaço entre elas.
● Ex: Para este array ["Oi", "sumido", "tudo", "bem?",
"Saudades"], dar a mensagem "Oi sumido tudo bem?
Saudades" */


let palavras = ["Oi", "sumido", "tudo", "bem?", "Saudades"]
let mensagem = " "

for(let palavra of palavras){
    mensagem += palavra += " "
}

mensagem = mensagem.trim() // usar o trim remove o espaço a mais no início e no final

console.log(mensagem)

// 'for... of...': Permite percorrer os elementos de um array de uma forma bem mais simples de se ler


// Exercício de interpretação de código 01
/* O que o código abaixo está fazendo? Qual o resultado impresso no console? */
    // o código está somando o valor com sua repetição, por exemplo
    /* 0 + 0 = 0
     0 + 1 = 1
     1 + 2 = 3
     3 + 3 = 6
     6 + 4 = 10 */
    // então o resultado impresso será 10


let valor = 0
for(let i = 0; i < 5; i++) {
  valor += i
}
console.log(valor)



// Exercício de interpretação de código 02


const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
for (let numero of lista) {
  if (numero > 18) {
		console.log(numero)
	}
}



/* a) O que vai ser impresso no console? */
    // será impresso os números acima de 18

/* b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, 
o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso? */
    // o for...of... não é suficiente, pois apenas devolve os valores, não seu índice.


// Exercício de interpretação de código 03
/* Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ? */
    // seriam impressas a quantidade de linhas, ou seja, 4 linhas. A primeira com 1 asterisco e, a segunda com 2 e assim sucessivamente


const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
let quantidadeAtual = 0
while(quantidadeAtual < quantidadeTotal){
  let linha = ""
  for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
    linha += "*"
  }
  console.log(linha)
  quantidadeAtual++
}


// Exercício de escrita de código 01
// Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
/* a) Se a quantidade for 0, imprima no console "Que pena! Você pode adotar um pet!" */
/* b) Se a quantidade for maior que 0, solicite que o usuário digite os nomes deles, um por um, e guarde esses nomes em um array /*
    /* Dica
        Coloque o seu prompt dentro de um loop. Esse loop deve ser executado a mesma quantidade de vezes que o usuário inseriu. 
        Por exemplo: se o usuário tem 4 pets, ele deve conseguir inserir 4 nomes. */
/* c) Por fim, imprima o array com os nomes dos bichinhos no console */


let bichos = Number(prompt("Quantos bichinhos de estimação você tem?"))
let array = []

if (bichos === 0){
    console.log("Que pena! Você pode adotar um pet!")
} else {
    for (let i = 0; i < bichos; i++){
        let nome = prompt("Qual é o nome do seu bichinho de estimação?")
        array.push(nome)
    }
}
for (let i=0; i < array.length; i++){
    console.log(array[i])
}
    // nesse formato o código imrpime os 'valores' um em cada linha


/*
let bichos = Number(prompt("Quantos bichinhos de estimação você tem?"));

if (bichos === 0) {
    console.log("Que pena! Você pode adotar um pet!");
} else {
    const nomesBichos = [];
    for (let i = 0; i < bichos; i++) {
        const nome = prompt(`Digite o nome do bichinho ${i + 1}:`);
        nomesBichos.push(nome);
    }

    console.log(nomesBichos);
}
    // nesse formato o código imprime os 'valores' em uma array
    // formato usado apenas para exemplo
*/


// Exercício de escrita de código 02
/* Considere que você tenha acesso a um `array`  (chamado de 'array original') 
que é composto somente de números. 
Baseando-se nisso, crie uma função para cada um dos itens abaixo, realizando as operações pedidas: */

/* a) Escreva um programa que **imprime** cada um dos valores do array original.
    
b) Escreva um programa que **imprime** cada um dos valores do array original divididos por 10
    
c) Escreva um programa que **crie** um novo array contendo, somente, os números pares do array original e **imprima** esse novo array
    
d) Escreva um programa que **crie** um novo array contendo strings, da seguinte forma: "O elemento do índex `i` é: `numero`". Depois, **imprima** este novo array.
    
e) Escreva um programa que imprima no console o maior e o menor números contidos no array original */

/* Dica
    Você deve criar variáveis para guardar o `valorMaximo` e o `valorMinimo`. 
    Inicialize a variável `valorMaximo` com um valor que não seja maior que qualquer 
    valor do array original e a `valorMinimo` com um valor que não seja menor que qualquer valor do array original. */

/* Exemplo de saídas esperadas
    // Este array será usado para exemplificar as respostas de todos os itens
    const array = [80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]
    
    // Resposta item a.
    80
    30
    130
    40
    60
    21
    70
    120
    90
    103
    110
    55
    
    // Resposta item b.
    8
    3 
    13
    4
    6
    2.1
    7 
    12
    9
    10.3
    11 
    5.5
    
    // Resposta item c.
    [80, 30, 130, 40, 60, 70, 120, 90, 110] 
    
    // Resposta item d.
    [ 'O elemento do índex 0 é 80',
      'O elemento do índex 1 é 30',
      'O elemento do índex 2 é 130',
      'O elemento do índex 3 é 40',
      'O elemento do índex 4 é 60',
      'O elemento do índex 5 é 21',
      'O elemento do índex 6 é 70',
      'O elemento do índex 7 é 120',
      'O elemento do índex 8 é 90',
      'O elemento do índex 9 é 103',
      'O elemento do índex 10 é 110',
      'O elemento do índex 11 é 55' ]
    
    // Resposta e.
    "O maior número é 130 e o menor é 21" */

let arrayOriginal = [3, 9, 10, 15, 21, 27, 30, 33, 39, 45, 51, 57, 60]

function numeros(array) {
    array.forEach(valor => console.log(valor));
}

numeros(arrayOriginal);


function numerosDivididosPor10(array) {
    array.forEach(valor => console.log(valor / 10));
}

numerosDivididosPor10(arrayOriginal);


function numerosPares(array) {
    const pares = array.filter(valor => valor % 2 === 0);
    console.log(pares);
    return pares;
}

numerosPares(arrayOriginal);


function arrayStrings(array) {
    const arrayDeStrings = array.map((valor, index) => `O elemento do índice ${index} é: ${valor}`);
    console.log(arrayDeStrings);
    return arrayDeStrings;
}

arrayStrings(arrayOriginal);


function numeroMaiornumeroMenor(array) {
    const maior = Math.max(...array);
    const menor = Math.min(...array);
    console.log(`O maior número é: ${maior} \nO menor número é: ${menor}`);
}

numeroMaiornumeroMenor(arrayOriginal);

//Este exercício foi feito usando um outro exercício muito parecido encontrado na internet como base