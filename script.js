const naoButton = document.getElementById('nao');

naoButton.addEventListener('mouseover', function() {
    const container = document.querySelector('.container');
    const containerWidth = container.offsetWidth;
    const containerHeight = container.offsetHeight;
    
    // Gera uma nova posição aleatória dentro dos limites da div
    const newLeft = Math.random() * (containerWidth - naoButton.offsetWidth);
    const newTop = Math.random() * (containerHeight - naoButton.offsetHeight);
    
    // Define a nova posição do botão
    naoButton.style.left = `${newLeft}px`;
    naoButton.style.top = `${newTop}px`;
});
