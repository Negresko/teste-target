document.addEventListener('DOMContentLoaded', () => {
    let bemVindo = "Olá, seja bem vindo ao teste target, clique em algum dos botões acima para ver os resultados de cada questão aplicada!";

    document.getElementById('resultado').textContent = bemVindo;
});
// 1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
// Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
// Imprimir(SOMA);
// Ao final do processamento, qual será o valor da variável SOMA?

function questao1() {
    let indice = 13, soma = 0, k = 0;
    let resposta = "";

    while (k < indice) {
        k = k + 1;
        soma = soma + k;
    }

    console.log(`Questão 1 - o resultado de soma é: ${soma}`);
    resposta = `Questão 1 - o resultado de soma é: ${soma}`;

    document.getElementById('resultado').textContent = resposta;
}

// 2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a soma dos 2 valores anteriores 
// (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na linguagem que desejar onde, informado um número, ele 
// calcule a sequência de Fibonacci e retorne uma mensagem avisando se o número informado pertence ou não a sequência.

// IMPORTANTE: Esse número pode ser informado através de qualquer entrada de sua preferência ou pode ser previamente definido no código;

function questao2() {
    let numero1 = 0, numero2 = 1;
    let numeroEscolhido = parseInt(document.getElementById('inputFibonacci').value);
    let sequenciaFibonacci = [numero1, numero2];

    while (numero2 < numeroEscolhido) {
        let numeroTemporario = numero2;
        numero2 = numero1 + numero2;
        numero1 = numeroTemporario;
        sequenciaFibonacci.push(numero2);
    }

    const pertenceASequencia = sequenciaFibonacci.includes(numeroEscolhido);

    let resposta = Number.isNaN(numeroEscolhido)
        ? `Questão 2 - Nenhum número foi digitado!`
        : pertenceASequencia
            ? `Questão 2 - O número ${numeroEscolhido} pertence à sequência de Fibonacci.`
            : `Questão 2 - O número ${numeroEscolhido} não pertence à sequência de Fibonacci.`;
            
    console.log(resposta);
    document.getElementById('resultado').textContent = resposta;
}

// 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
// • O menor valor de faturamento ocorrido em um dia do mês;
// • O maior valor de faturamento ocorrido em um dia do mês;
// • Número de dias no mês em que o valor de faturamento diário foi superior à média mensal.

// IMPORTANTE:
// a) Usar o json ou xml disponível como fonte dos dados do faturamento mensal;
// b) Podem existir dias sem faturamento, como nos finais de semana e feriados. Estes dias devem ser ignorados no cálculo da média;

async function pegaDadosJson() {
    const res = await fetch("dados.json");
    const data = await res.json();
    return data;
}

function questao3() {
    pegaDadosJson().then(data => {
        const menorValor = data.reduce((menor, item) => Math.min(menor, item.valor), Infinity);
        const maiorValor = data.reduce((maior, item) => Math.max(maior, item.valor), -Infinity);
        const totalFaturamento = data.reduce((total, dia) => total + dia.valor, 0);
        const totalDias = data.length;
        const mediaMensal = totalFaturamento / totalDias;
        const diasAcimaDaMedia = data.filter(dia => dia.valor > mediaMensal);
        let resposta = "";

        console.log(`Questão 3 - o número de dias é: ${diasAcimaDaMedia.length} , o menor valor de faturamento é: ${menorValor} e o manor valor de faturamento é: ${maiorValor}`);
        resposta = `Questão 3 - o número de dias é: ${diasAcimaDaMedia.length}, o menor valor de faturamento é: ${menorValor} e o manor valor de faturamento é: ${maiorValor}`;

        document.getElementById('resultado').textContent = resposta;
    });
}

// 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
// • SP – R$67.836,43
// • RJ – R$36.678,66
// • MG – R$29.229,88
// • ES – R$27.165,48
// • Outros – R$19.849,53

// Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve dentro do valor total mensal da distribuidora.

const vendasPorEstado = [
    { estado: 'SP', valor: 67836.43 },
    { estado: 'RJ', valor: 36678.66 },
    { estado: 'MG', valor: 29229.88 },
    { estado: 'ES', valor: 27165.48 },
    { estado: 'Outros', valor: 19849.53 }
];

function questao4() {
    const valorTotal = vendasPorEstado.reduce((total, estado) => total + estado.valor, 0);
    let resposta = "";

    vendasPorEstado.forEach(estado => {
        const percentual = (estado.valor / valorTotal) * 100;

        console.log(`Questão 4 - o percentual é: ${estado.estado}: ${percentual.toFixed(2)}%`);
        resposta += `<p>Questão 4 - o percentual é: ${estado.estado}: ${percentual.toFixed(2)}%</p>`;
    });

    document.getElementById('resultado').innerHTML = resposta;

}

// 5) Escreva um programa que inverta os caracteres de um string.

// IMPORTANTE:
// a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
// b) Evite usar funções prontas, como, por exemplo, reverse;

function inverterString(str) {
    let novaString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        novaString += str[i];
    }
    return novaString;
}

function questao5() {
    const minhaString = document.getElementById('inputInverteString').value;
    let resposta = "";

    if (minhaString === "") {
        console.log("Questão 5 - nenhuma string foi digitada!");

        resposta = "Questão 5 - nenhuma string foi digitada!";
    } else {

        const stringInvertida = inverterString(minhaString);
        console.log(`Questão 5 - ${stringInvertida}`);

        resposta = `Questão 5 - ${stringInvertida}`;
    }

    document.getElementById('resultado').textContent = resposta;
}