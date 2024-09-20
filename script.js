function moveButton() {
    const noButton = document.getElementById('no');
    const container = document.querySelector('.container');
    
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    
    const randomX = Math.random() * (containerWidth - noButton.clientWidth);
    const randomY = Math.random() * (containerHeight - noButton.clientHeight);

    noButton.style.position = 'absolute';
    noButton.style.left = randomX + 'px';
    noButton.style.top = randomY + 'px';
}

function openCongratsPage() {
    const newWindow = window.open('', '_blank');
    newWindow.document.write(`
        <html>
            <head>
                <title>Parabéns!</title>
                <style>
                    body {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        height: 100vh;
                        background: linear-gradient(to right, #ff7e5f, #feb47b);
                        color: white;
                        font-family: Arial, sans-serif;
                        font-size: 24px;
                        text-align: center;
                    }
                </style>
            </head>
            <body>
                <h1>Parabéns! Você acabou de fazer sua mulher mais feliz!</h1>
                <p>O PIX dela é: <strong>140.917.679-74</strong></p>
            </body>
        </html>
    `);
}
