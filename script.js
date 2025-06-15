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
  let frequencias = [];
    for(let i in palavras) {
        frequencias [i] = 0;
    }
    for (let j of palavras) {
            if (i == j) {
                frequencias [i]++;
            }
    console.log(frequencias)

    return palavras;}
  }
