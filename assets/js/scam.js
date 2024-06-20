let changeColorBtn = document.getElementById('changeColorBtn');
let title = document.getElementById('title');

changeColorBtn.addEventListener('mousemove touchmove', (e) => {
    let randomPositionTop = Math.floor(Math.random() * 100) + '%';
    let randomPositionLeft = Math.floor(Math.random() * 100) + '%';

    changeColorBtn.style.position = 'absolute';
    changeColorBtn.style.top = `${randomPositionTop}`;
    changeColorBtn.style.left = `${randomPositionLeft}`;
});

setTimeout(() => {
    changeColorBtn.remove();
    title.remove();
    let message = document.createElement('div');
    message.textContent = 'Tu as bien vu que ça ne fonctionne pas?';
    message.style.position = 'fixed';
    message.style.top = '50%';
    message.style.left = '50%';
    message.style.transform = 'translate(-50%, -50%)';
    message.style.fontSize = '5vw'; 
    message.style.color = 'red';
    document.body.appendChild(message);
}, 12000);
