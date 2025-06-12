const botaoMostraPalavras = document.querySelector("#botao-palavrachave");

botaoMostraPalavras.addEventListener("click", mostraPalavrasChave);

function mostraPalavrasChave() {
  const texto = document.querySelector('#texto-inicial').value;

  const campoResultado = document.querySelector('#resultado-palavrachave');

  const palavras = texto.split('');

  campoResultado.textContent = palavras.join(',');
}
