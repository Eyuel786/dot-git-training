const buttonEl = document.querySelector('button');

buttonEl.addEventListener('click', () => {
    const pEl = document.createElement('p');
    pEl.innerText = "Hello, I am Ben Davison, a Web Developer. Welcome to my Portifolio Site!";
    buttonEl.insertAdjacentElement('afterend', pEl);
}, { once: true });