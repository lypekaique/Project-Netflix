// Objetivo 1

// passo 1 - dar um jeito de pegar o elemento que representa o botão na tela usando o js

const botaoTrailer = document.querySelector(".botao-trailer");
const video  = document.getElementById("video");
const modal = document.querySelector(".modal");
const botaoFecharModal = document.querySelector(".fechar-modal");
const linkDoVideo = video.src;

function alternarModal(){
    modal.classList.toggle("aberto");
}
// passo 2 - dar um jeito de identificar quando o usuario clicar no botao

botaoTrailer.addEventListener("click", () => {
    // passo 4 - abrir a modal na tela 
    alternarModal(); 
    video.setAttribute("src", linkDoVideo);
});

//passo 2 - dar um jeito de identificar quando o usuario clilcar no X
botaoFecharModal.addEventListener("click", () => {
    // passo - 3 fechar modal
    alternarModal();
    video.setAttribute("src", "");
});




