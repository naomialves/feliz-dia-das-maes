// Índice atual do carrossel
let indiceAtual = 0;

// Função para mudar a imagem do carrossel
function mudarImagem(direcao) {
    const slides = document.querySelector('.slides');
    const imagens = slides.querySelectorAll('img');
    const totalImagens = imagens.length;

    // Pausa o áudio ao mudar de imagem
    const audio = document.querySelector('audio');
    if (audio) {
        audio.pause();
    }

    // Atualiza o índice da imagem atual
    indiceAtual = (indiceAtual + direcao + totalImagens) % totalImagens;

    // Move o carrossel para a imagem correspondente
    slides.style.transform = `translateX(-${indiceAtual * 100}%)`;
}

// Função para exibir uma mensagem dinâmica
function exibirMensagem() {
    const mensagem = document.querySelector('.mensagem p');
    mensagem.textContent = "Feliz dia das mães, te amo muito mãe! É incrível poder compartilhar minhas conquistas com essa mulher maravilhosa que você é.";
}

// Executa a função de exibir mensagem ao carregar a página
document.addEventListener('DOMContentLoaded', exibirMensagem);
