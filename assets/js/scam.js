function randomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let changeColorBtn = document.getElementById('changeColorBtn');

changeColorBtn.addEventListener('mousemove', (e) => {
  let buttonWidth = changeColorBtn.offsetWidth;
  let buttonHeight = changeColorBtn.offsetHeight;

  let windowWidth = window.innerWidth;
  let windowHeight = window.innerHeight;

  let maxPositionTop = windowHeight - buttonHeight;
  let maxPositionLeft = windowWidth - buttonWidth;

  let randomPositionTop = randomInRange(0, maxPositionTop);
  let randomPositionLeft = randomInRange(0, maxPositionLeft);

  changeColorBtn.style.position = 'absolute';
  changeColorBtn.style.top = `${randomPositionTop}px`;
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

  setTimeout(() => {
    location.reload();
  }, 3000);

}, 20000);
