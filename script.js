const botaoMostraPalavras = document.querySelector("#botao-palavrachave");

botaoMostraPalavras.addEventListener("click", mostraPalavrasChave);

function mostraPalavrasChave() {
  const texto = document.querySelector("#texto-inicial").value;

  const campoResultado = document.querySelector("#resultado-palavrachave");

const palavraschaves = processarTexto(texto);

  campoResultado.textContent = palavraschaves.join(",");
}
function processarTexto(texto){
let palavras = texto.split(/\P{L}+/u);
    return palavras;
}
