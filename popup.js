// Define uma expressão regular para procurar a palavra "cookie" em uma página
const regex = /cookie/gi;

// Cria um elemento de imagem e define sua propriedade "src"
const img = document.createElement('img');
img.src = 'https://drive.google.com/uc?export=view&id=1Vs1n7syPldk3sPsIH58LSk5Duci9E4yV';

// Define um tempo de exibição da imagem em milissegundos
const displayTime = 5000;

// Adiciona um ouvinte de eventos ao botão para testar o plugin
document.getElementById('test-button').addEventListener('click', () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { regex, img, displayTime });
  });
});
