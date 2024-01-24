let listaDeNumerosSorteados = [];
let listaLimite = 2
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;

MensagemInicial()

function MensagemInicial() {
    alterarTexto('h1', 'Jogo do número secreto');
    alterarTexto('p', 'Escolha um número de 1 a 10');
}
function alterarTexto( tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    
}
function VerificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativa = `Parabéns, você descobriu número secreto com ${tentativa} ${palavraTentativa}.`;
        alterarTexto('h1', 'Acertou!');
        alterarTexto('p', mensagemTentativa);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            alterarTexto('p', 'Quase, o número secreto é menor!');
        } else {
            alterarTexto('p', 'Quase, o número secreto é maior!');
        }
        tentativa++;
        limparCampo()
    }
}
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * listaLimite + 1);
    let quantidadeDeElementoNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementoNaLista == listaLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}
function limparCampo() {
    chute = document.querySelector('input');
    chute.value = ''
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;
    MensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled', true)
}