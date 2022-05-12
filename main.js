//Variaveis que armazenam dois elementos de paragrafos do HTML
const textResultado = document.getElementById('text-resultado');
const respostaResultado = document.getElementById('resposta');
//=============================================================================

//1° variaveis que armazem numeros aleatorios que no final vai gerar uma cor RGB
let cor_1 = Math.floor(Math.random() * 256)
let cor_2 = Math.floor(Math.random() * 256)
let cor_3 = Math.floor(Math.random() * 256)
//=============================================================================

//2° variaveis que armazem numeros aleatorios que no final vai gerar uma cor RGB
let cor_4 = Math.floor(Math.random() * 256)
let cor_5 = Math.floor(Math.random() * 256)
let cor_6 = Math.floor(Math.random() * 256)
// =============================================================================

//3° variaveis que armazem numeros aleatorios que no final vai gerar uma cor RGB
let cor_7 = Math.floor(Math.random() * 256)
let cor_8 = Math.floor(Math.random() * 256)
let cor_9 = Math.floor(Math.random() * 256)
//===============================================================================

//Variaveis que armazem as cores completas;
const cor_1_completa = `rgb(${cor_1}, ${cor_2}, ${cor_3})`;
const cor_2_completa = `rgb(${cor_2}, ${cor_3}, ${cor_4})`;
const cor_3_completa = `rgb(${cor_5}, ${cor_6}, ${cor_7})`;
//===============================================================================

//Variavel para criar um valor auxiliar Aleatirio
let corAleatoria = Math.floor(Math.random() * 3);
function gerarNumeroAleatorio() {
    if (corAleatoria === 0) {
        console.log('adicionar cor_1 cor dentro do parentese html')
        textResultado.innerHTML = cor_1_completa;

    }
    if (corAleatoria === 1) {
        console.log('adicionar cor_2 cor dentro do parentese html');
        textResultado.innerHTML = cor_2_completa;
    }
    if (corAleatoria === 2) {
        console.log('adicionar cor_3 cor dentro do parentese html');
        textResultado.innerHTML = cor_3_completa;
    }
}


function addCoresBtns() {
    const addColorBtn_1 = document.getElementById('btn-1').style.backgroundColor = `rgb(${cor_1}, ${cor_2}, ${cor_3})`;
    const addColorBtn_2 = document.getElementById('btn-2').style.backgroundColor = `rgb(${cor_4}, ${cor_5}, ${cor_6})`;
    const addColorBtn_3 = document.getElementById('btn-3').style.backgroundColor = `rgb(${cor_7}, ${cor_8}, ${cor_9})`;
}

function primeiroBtn() {
    if (corAleatoria === 0) {
        respostaResultado.innerHTML = 'Você acertou';
        respostaResultado.style.marginTop = '200px';
        respostaResultado.style.color = 'Green';
        return false;
    } else {
        respostaResultado.innerHTML = 'Você errou';
        respostaResultado.style.marginTop = '200px';
        respostaResultado.style.color = 'red';
        return false;
    }

}

function segundoBtn() {
    if (corAleatoria === 1) {
        respostaResultado.innerHTML = 'Você acertou';
        respostaResultado.style.marginTop = '200px';
        respostaResultado.style.color = 'Green';
        return false;
    } else {
        respostaResultado.innerHTML = 'Você errou';
        respostaResultado.style.marginTop = '200px';
        respostaResultado.style.color = 'red';
        return false;
    }

}

function terceiroBtn() {
    if (corAleatoria === 2) {
        respostaResultado.innerHTML = 'Você acertou';
        respostaResultado.style.marginTop = '200px';
        respostaResultado.style.color = 'Green';
        return false;
    } else {
        respostaResultado.innerHTML = 'Você errou';
        respostaResultado.style.marginTop = '200px';
        respostaResultado.style.color = 'red';
        return false;
    }

}

function replay() {
    respostaResultado.innerHTML = '';
    window.document.location = 'index.html';
}
