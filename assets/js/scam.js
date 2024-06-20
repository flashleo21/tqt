let changeColorBtn = document.getElementById('changeColorBtn');

changeColorBtn.addEventListener('mousemove', (e) => {
  let randomPositionTop = Math.floor(Math.random() * 300);
  let randomPositionRight = Math.floor(Math.random() * 500);
  let randomPositionBottom = Math.floor(Math.random() * 300);
  let randomPositionLeft = Math.floor(Math.random() * 500);
  changeColorBtn.style.top = `${randomPositionTop}px`;
  changeColorBtn.style.right = `${randomPositionRight}px`;
  changeColorBtn.style.bottom = `${randomPositionBottom}px`;
  changeColorBtn.style.left = `${randomPositionLeft}px`;
});

setTimeout(() => {
  changeColorBtn.remove();

  let message = document.createElement('div');
  message.textContent = 'Tu as bien vu que ça ne fonctionne pas ?';
  message.style.position = 'absolute';
  message.style.top = '50%';
  message.style.left = '50%';
  message.style.transform = 'translate(-50%, -50%)';
  message.style.fontSize = '24px';
  message.style.color = 'red';
  document.body.appendChild(message);
}, 20000);
