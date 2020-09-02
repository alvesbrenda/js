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
console.log("-------");

// 4 - Condições 
// 2.1 
let x = 1;
if (x = 1) {
    //Executa o código
}
console.log("-------");

let disponivel = true;
let quantidade = 5;
if (quantidade > 0 && disponivel) {
    console.log("Produto disponível para venda.")
}
console.log("-------");

//let nome = "João"
let nome = "Maria"
if (nome == "Maria") {
    console.log("Acesso permitido")
} else {
    console.log("Acesso Negado!")
}
console.log("-------");

//Código meio confuso e "ruim" visualmente
let cidade = "Cidade?"
if (cidade == "Porto Alegre") {
    console.log("Aqui é Porto Alegre");
} else {
    if (cidade == "São Paulo") {
        console.log("São Paulo");
    } else {
        if (cidade == "Rio de Janeiro") {
            console.log("Aqui é Rio de Janeiro");
        }
    }
}
console.log("-------");

//Melhoria no código e visualmente melhor
if (cidade == "Porto Alegre") {
    console.log("Aqui é Porto Alegre");
} else if (cidade == "São Paulo") {
    console.log("São Paulo");
} else if (cidade == "Rio de Janeiro") {
    console.log("Aqui é Rio de Janeiro");
} else {
    console.log("Não sei onde é aqui");
}
console.log("-------");

// Aula 22
let num = 1;
if (num == 1) {
    let text = "Olá"; // declarando variavel nã0-global
    //acessando variável número
    num = 2;
}
// erro de escopo
//console.log(text); 
// chamando variavel não-global * retorna erro.
console.log("-------");

//Modelo função Global
let value = 12; //Global _ todo mundo tem acesso.
function umaFuncao() {
    console.log(value);
}
if (value == 12) {
    umaFuncao();
    console.log(value);
}
console.log("-------");

//escopo de bloco
let varGlobal = 1;

function funcaoGlobal() {
    let varFuncao = varGlobal + 1;

    function funcaoLocal() {
        let varFuncLocal = varFuncao + varGlobal;
        console.log(varFuncLocal);

    }
}
console.log("-------");

//Var escopo global e bloco pra funções
let x1 = 1;
if (x1 == 1) {
    var y1 = 99;
}
//Funciona
console.log(y1);
console.log("-------");

let x2 = 1;
if (x2 == 1) {
    let y2 = 99;
}
//Retorna erro devido a foma que foi declarado (let)
//console.log(y2);
console.log("-------");

//Aula 23 
// se houver muitos if/else, use switch
let codigo;
switch (codigo) {
    case 1:
        console.log("Banana");
        break; //Encerra leitura
    case 2:
        console.log("Limão");
        break;
    default: // "Else" executa quando não entrar em nenhum "Case"
        console.log("Desconhecido");
        break;
}
console.log("-------");

let cod = "0";
switch (cod) {
    case 0:
        console.log("zero");
        break;
    case 1:
        console.log("um");
        break;
    default:
        console.log("n/a");
        break;
}
console.log("-------");
console.log("-------");

//24 - Revisão
let simb1 = "R$";
let simb2 = "$";
let simb3 = "£";
//Escreva a função que receberá um simbolo de moeda
// como parâmetro e retornará o nome dela
// caso conheça aquele simbolo
// senão, retornar "Moeda não encontrada"
//Switch Case
function moeda(simb) {
    switch (simb) {
        case "R$":
            console.log("Real");
            break;
        case "$":
            console.log("Dólar");
            break;
        case "£":
            console.log("Libra");
            break;
        default:
            console.log("Moeda não encontrada!");
            break;
    }
}
//If Else
function moeda1(simb) {
    if (simb == "R$") {
        console.log("Real");
    } else if (simb == "$") {
        console.log("Dólar");
    } else if (simb == "£") {
        console.log("Libra");
    } else {
        console.log("Moeda não encontrada!");
    }
}
console.log("-------");
console.log("-------");

let objServidor = {
    acesso: true,
    login: "mundojs"
};
let objServidor2 = {
    erro: "Erro ao conectar ao servidor"
};
//Caso o objeto não contenha erro,
//validar se o acesso é permitido
//se permitido exiba "login: mundojs"
//senão escreva "acesso negado"
//caso dê erro, exiba a msg de erro
function conexaoLogin(retornoServidor) {
    if (retornoServidor.erro == null) {
        if (retornoServidor.acesso) {
            console.log(`login: ${retornoServidor.login}`);
        } else {
            console.log("Acesso negado!");
        }
    } else {
        console.log(retornoServidor.erro);
    }
}
console.log("-------");
console.log("-------");

function testarTamanho(valor) {
    let num = 25; // Seu código aqui
    // Dica: Utilize o IF/ELSE
    if (num > 15) {
        return "maior";
        console.log("maior");
    } else if (num < 3) {
        return "menor";
        console.log("menor");
    } else if (num >= 3 && num == 15) {
        return "na faixa";
        console.log("na faixa");
    }
}
console.log("-------");
console.log("-------");

//Exercício 25 - Multiplas opções
// Este objeto não precisa ser mexido
let carro = {
    rodas: 4,
    portas: 2,
    cor: "cinza",
    ano: 2012,
    estado: "novo"
};

function mudarPropriedade(nomePropriedade, novoValor) {
    switch (nomePropriedade) {
        // O case rodas é um exemplo para as próximas partes
        case "rodas":
            if (novoValor > 1) {
                carro.rodas = novoValor;
            } else {
                return "Minimo de rodas precisa ser 2";
            }
            break;
        case "portas":
            // Para alterar as portas, é necessário que o
            // novo valor seja maior que 0
            // senão deve retornar a string "Minimo de portas precisa ser 1"
            if (novoValor > 0) {
                carro.portas = novoValor;
            } else {
                return "Mínimo de portas precisa ser 1";
            }
            break;
        case "cor":
            // para alterar a cor, novo valor pode ser igual a cinza ou preto ou vermelho
            // se for diferente, retornar "Cor invalida"        
            if (novoValor == "cinza" || novoValor == "preto" || novoValor == "vermelho") {
                carro.cor = novoValor;
            } else {
                return "Cor invalida";
            }
            break;
        case "ano":
            // criar um case para o "ano"
            // alterar o ano do carro para o ano informado
            // se o ano for igual a 2019, alterar o estado para "novo" 
            // senao alterar o estado para "usado"
            carro.ano = novoValor;
            if (novoValor == 2019) {
                carro.estado = "novo";
            } else {
                carro.estado = "usado";
            }
            break;
        default:
            // retornar a fraase "Propriedade invalida";
            return "Propriedade inválida";
    }
    // retornar a frase Alteracao concluida somente se foi possivel
    // alterar um dado do objeto.
    return "Alteracao concluída";
}
console.log("-------");
console.log("-------");

//Aula 27 - Loops
//Informa os valores de 0 a 9
for (let i = 0; i < 10; i++) {
    console.log(i);
}

//Informa os valores do vetor
let lista = ["gato", "cachorro", "galinha"];
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}

//Dobra os valores do vertor
let valores = [1, 2, 3, 4, 5];
for (let i = 0; i < valores.length; i++) {
    valores[i] = valores[i] * 2;
    console.log(valores[i]);
}
console.log("-------");
console.log("-------");

//Aula 29 - For of
let dias = ["segunda", "terça", "quarta", "quinta", "sexta"];

for (let dia of dias) {
    console.log(dia);
}

for (let num of[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
    console.log(num);
}
console.log("-------");
console.log("-------");

//Aula 27 - Loops
//Informa os valores de 0 a 9
for (let i = 0; i < 10; i++) {
    console.log(i);
}

//Informa os valores do vetor
let lista = ["gato", "cachorro", "galinha"];
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i]);
}

//Dobra os valores do vertor
let valores = [1, 2, 3, 4, 5];
for (let i = 0; i < valores.length; i++) {
    valores[i] = valores[i] * 2;
    console.log(valores[i]);
}
console.log("-------");
console.log("-------");


//Aula 29 - For of
let dias = ["segunda", "terça", "quarta", "quinta", "sexta"];

for (let dia of dias) {
    console.log(dia);
}

for (let num of[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]) {
    console.log(num);
}
console.log("-------");
console.log("-------");


//Aula 30 - While
let num = 1;
while (num < 10) {
    console.log("valor: " + num);
    num = num + 2;
}
/*
Loop sem fim comentado
let num1 = 1;
while (num1 < 10) {
    let valor = 0;
    console.log("valor: " + valor);
    valor = valor + 2;
}
*/
console.log("-------");
console.log("-------");