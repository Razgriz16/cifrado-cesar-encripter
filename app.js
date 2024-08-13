function caesarCipher(str, shift) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const isLetter = alphabet.includes(char);
        
        if (isLetter) {
            const index = alphabet.indexOf(char);
            let newIndex = (index + shift) % 26;
            if (newIndex < 0) newIndex = 26 + newIndex;
            result += alphabet[newIndex];
        } else {
            result += char;
        }
    }
    
    return result;
}

document.getElementById('encrypt-btn').addEventListener('click', () => {
    const input = document.getElementById('text-input').value;
    const encrypted = caesarCipher(input, 3);
    displayMessage(encrypted);
});

document.getElementById('decrypt-btn').addEventListener('click', () => {
    const input = document.getElementById('text-input').value;
    const decrypted = caesarCipher(input, -3);
    displayMessage(decrypted);
});

document.getElementById('copy-btn').addEventListener('click', () => {
    const outputMessage = document.getElementById('output-message');
    navigator.clipboard.writeText(outputMessage.textContent)
        .then(() => {
            alert('Texto copiado al portapapeles');
        })
        .catch(err => {
            console.error('Error al copiar el texto: ', err);
        });



});

function displayMessage(message) {
    const outputMessage = document.getElementById('output-message');
    const noMessageDiv = document.getElementById('no-message');
    const copyButton = document.getElementById('copy-btn')
    copyButton.style.display = message ? 'block' : 'none'; // Mostrar botón solo si hay mensaje

    if (message) {
        outputMessage.textContent = message;
        outputMessage.style.display = 'block';
        noMessageDiv.style.display = 'none';
        copyButton.style.display = 'block';
    } else {
        outputMessage.style.display = 'none';
        noMessageDiv.style.display = 'block';
        copyButton.style.display = 'none';
    }
}
