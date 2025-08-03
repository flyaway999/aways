// Scroll para portfolio
document.querySelector('.arrow').addEventListener('click', () => {
  document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
});

// Modal
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const slot1 = document.getElementById('slot1');
const closeBtn = document.querySelector('.close');

slot1.addEventListener('click', () => {
  const img = slot1.querySelector('img');
  modal.style.display = 'block';
  modalImg.src = img.src;
  modalImg.classList.remove('zoomed');
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  modalImg.classList.remove('zoomed');
});

modal.addEventListener('click', (e) => {
  if (e.target === modalImg) {
    // alterna zoom ao clicar na imagem
    modalImg.classList.toggle('zoomed');
  } else if (e.target === modal) {
    // fecha modal ao clicar fora da imagem
    modal.style.display = 'none';
    modalImg.classList.remove('zoomed');
  }
});
