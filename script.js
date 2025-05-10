let indiceAtual = 0;

function mudarImagem(direcao) {
    const slides = document.querySelector('.slides');
    const imagens = slides.querySelectorAll('img');
    const totalImagens = imagens.length;

    indiceAtual = (indiceAtual + direcao + totalImagens) % totalImagens;
    slides.style.transform = `translateX(-${indiceAtual * 100}%)`;
}

function exibirMensagem() {
    const mensagem = document.querySelector('.mensagem p');
    mensagem.textContent = "Aproveite o momento e explore o desconhecido.";
}

document.addEventListener('DOMContentLoaded', exibirMensagem);
