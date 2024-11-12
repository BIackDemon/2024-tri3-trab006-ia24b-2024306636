const galleryImageModal = document.querySelector('.gallery-image-modal');
const galleryBtClose = galleryImageModal.querySelector('.bt-close');
const galleryBtNext = galleryImageModal.querySelector('.bt-next');
const galleryBtPrev = galleryImageModal.querySelector('.bt-prev'); // Botão para imagem anterior
const galleryContent = galleryImageModal.querySelector('.content');
const imgs = document.querySelectorAll('.gallery img');

let nextImg = null;
let prevImg = null;

// Fecha a modal ao clicar no botão de fechar
galleryBtClose.addEventListener('click', () => {
  galleryImageModal.close();
});

// Avança para a próxima imagem, se houver uma próxima imagem
galleryBtNext.addEventListener('click', () => {
  galleryImageModal.close();
  if (nextImg) {
    nextImg.click();
  }
});

// Volta para a imagem anterior, se houver uma anterior
galleryBtPrev.addEventListener('click', () => {
  galleryImageModal.close();
  if (prevImg) {
    prevImg.click();
  }
});

// Abre a modal com a imagem selecionada e define a próxima e a anterior
imgs.forEach(img => {
  img.addEventListener('click', () => {
    // Define a próxima imagem, se houver
    nextImg = img.parentNode.nextElementSibling 
      ? img.parentNode.nextElementSibling.querySelector('img') 
      : null;

    // Define a imagem anterior, se houver
    prevImg = img.parentNode.previousElementSibling 
      ? img.parentNode.previousElementSibling.querySelector('img') 
      : null;

    // Atualiza o conteúdo da modal com a imagem clicada
    galleryContent.innerHTML = `<img src="${img.src}">`;
    galleryImageModal.showModal();
  });
});
