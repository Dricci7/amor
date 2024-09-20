const naoButton = document.getElementById('nao');
const simButton = document.getElementById('sim');
const body = document.body;

// Função para movimentar o botão "Não" quando o mouse se aproxima
document.addEventListener('mousemove', (event) => {
    const xDist = Math.abs(event.clientX - naoButton.offsetLeft);
    const yDist = Math.abs(event.clientY - naoButton.offsetTop);
    const proximity = 100; // Definir proximidade para movimentar o botão

    if (xDist < proximity && yDist < proximity) {
        const newLeft = Math.random() * (window.innerWidth - naoButton.offsetWidth);
        const newTop = Math.random() * (window.innerHeight - naoButton.offsetHeight);
        naoButton.style.left = `${newLeft}px`;
        naoButton.style.top = `${newTop}px`;
    }
});

// Ao clicar no botão "Sim", redirecionar para a página de agradecimento
simButton.addEventListener('click', () => {
    document.querySelector('.container').style.display = 'none'; // Esconde a página inicial
    showThankYouPage(); // Mostra a página de agradecimento
});

// Função para exibir a página de agradecimento
function showThankYouPage() {
    const thankYouPage = document.createElement('div');
    thankYouPage.classList.add('thankyou-page');
    thankYouPage.innerHTML = `
        <div>
            <div class="message">
                Obrigadoo meu amor, meu pix é:<br>
                140.917.679-74
            </div>
            <div class="emojis">
                😄😄😄😍😍😍🥰🥰🥰😎😎😎😜😜😜
            </div>
        </div>
    `;
    body.appendChild(thankYouPage);
    thankYouPage.style.display = 'flex';
}
