//Iniciando com JS
//alert("Hello World!");
console.log("Hello World");
var mensagem = "Hello World!";
//alert(mensagem);
console.log(mensagem);
console.log("----");

var a = 2
var b = 3
var soma = a + b;
var sub = a - b;
var mult = a * b;
var div = a / b;

//alert("A soma é: " + soma);
console.log("A soma é: " + soma);
//alert("A subtração é: " + sub);
console.log("A subtração é: " + sub);
//alert("A multiplicação é: " + mult);
console.log("A multiplicação é: " + mult);
//alert("A divisão é: " + div);
console.log("A divisão é: " + div);
console.log("----");

var a = 2
var b = 3
var c = "Hello World!"

if (b % 2 == 1) {
    //alert(a + " é um número Ímpar");
    console.log(a + ", é um número ímpar");
} else if (b % 2 == 0) {
    //alert(a + " é um número par");
    console.log(a + ", é um número par");
} else {
    //alert(a + " Não é um número");
    console.log(a + ", Não é um número");
}
console.log("----");

var i = 0;
while (i < 3) {
    //alert("i - " + i);
    console.log("i - " + i);
    i = i + 1;
}
for (var j = 0; j < 3; j++) {
    //alert("j - " + j);
    console.log("i - " + i);
}
console.log("----");

var numero = 6;
var decimal = 4.5;
var texto = "Hello World!";
var lista = ["laranja", "maça", "banana", 1234, ];
//alert(lista[0]);
for (i in lista) {
    //alert(lista[i]);
    console.log(lista[i]);
}

console.log("----");
console.log("Hello World!")

let vetor = ["Posição 0", "Posição 1", "Posição 2", "Posição 3"];
//exibir
console.log(vetor[2]);

console.log(null == undefined)

console.log(null != undefined)
console.log("----");
let carro = {};
let meuCarro = {
    rodas: 4,
    nome: "Carro",
    modelo: "Gol"
};
//Alterando Dados do Carro
carro.portas = 2;
console.log(carro.portas)

carro["portas"] = 4;
console.log(carro.portas)

carro.rodas = 5;
console.log(carro.rodas)

carro.nome = "Meu Carro";
console.log(carro.nome)

carro.modelo = "Golf";
console.log(carro.modelo)
console.log("----");

//Funções
// Opção 1
let helloWorld = function() {
    console.log("Hello World");
    console.log("Hello World Again");
    console.log("Hello World Again and Again");
}
helloWorld();

// Opção 2 e mais usada
function helloWorld2() {
    console.log("Hello World 2.0");
    console.log("Hello World Again 2.0");
    console.log("Hello World Again and Again 2.0");
}
helloWorld2();
console.log("----");


// Inserir valor na função
function somar(valor1, valor2) {
    let result = valor1 + valor2;
    console.log(result);
}
somar(1, 2);
somar(4, 4);
somar(99, 1);
somar(4, 2);
console.log("-------");

//Função com return
somarReturn(3, 5);
somarReturn(55, 22);
somarReturn(454, 643);

function somarReturn(valor1, valor2) {
    let result = valor1 + valor2;
    console.log(result);
    return result;
}
console.log("-------");

function vouSomar(valorSoma1, valorSoma2) {
    return valorSoma1 + valorSoma2;
}
let tudoSomado = vouSomar(12, 123);
console.log(tudoSomado);
console.log("-------");

//Revisão 1 
let valor1 = 10;
console.log("valor1 = 10");
let valor2 = 20;
console.log("valor2 = 20");
let valor3 = "3";
console.log("valor3 = '3'");

function somarValores(primeiro, segundo) {
    console.log(primeiro + segundo);
}
// O que ocorre nos sitações
somarValores(9, valor1); //somar valores
somarValores(valor1, valor2); //somar valores
somarValores(valor2, valor3); // concatena * junção de string 
somarValores("100", valor3); // concatena * junção de string
console.log("-------");

//Revisão 2
let vetorR = [1, 3, 5, 7, 9, 1, 13];
let numeroR = vetorR[1] + vetorR[3];
console.log("NumeroR = " + numeroR)

console.log(numeroR > 9);
console.log("-------");
console.log((vetorR[6]) - numeroR);
console.log((vetorR[6]) - numeroR == 5);
console.log((vetorR[6]) - numeroR == 5 || true);
console.log("-------");
console.log(true == "true");
console.log("-------");
console.log(true === "true");
console.log("-------");

//Revisão 3
let objeto = {
    objeto2: {
        vetor: [1, 2, { valor: 55 }]
    }
};
//Qual opção exibe 55?
console.log(objeto["objeto2"].vetor.valor);

console.log(objeto.objeto2.vetor.valor); //Necessário informar posição do vetor [?]

console.log(objeto["objeto2"]["vetor"][2].valor); // deu bom

//console.log(objeto.objeto2.vetor[3].valor); //Não existe posição 3 no vetor
console.log("-------");
console.log("-------");


function revisao(valor1, valor2, valor3) {
    let outroValor = valor1 + 2;
    let maisUm = valor2 + valor3;
    let vetor = [valor3, valor1, maisUm, valor2, outroValor];
    console.log(`A soma de ${vetor[2]} está certa? Ou ${vetor[1] + 2} = ${vetor[4]} parece melhor?`);
}
revisao(2, "5", "zero");
console.log("-------");
console.log("-------");

let funcaoDeSomar = function(valor1, valor2) {
    // Atribua a soma das variaveis valor1 e valor2 ao resultado
    let resultado = valor1 + valor2;
    console.log(resultado);
    return resultado;
};
funcaoDeSomar(1, 3);
console.log("-------");

let funcaoDeSomar2 = function(valor1, valor2) {
    // Atribua a soma das variaveis valor1 e valor2 ao resultado
    let resultado = valor1 + valor2;
    console.log(resultado);
    return resultado;
};
funcaoDeSomar2(2, -5);
console.log("-------");

//Crir um vetor chamado listaMista

let listaMista = [50, "mundo", true, { teste: "Testando" }];
console.log(listaMista[0], listaMista[1], listaMista[2], listaMista[3])