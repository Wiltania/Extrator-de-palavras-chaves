import {Palavrasruins} from "./Palavrasruins.js";
const botaoMostraPalavras = document.querySelector("#botao-palavrachave");

botaoMostraPalavras.addEventListener("click", mostraPalavrasChave);

function mostraPalavrasChave() {
  const texto = document.querySelector("#texto-inicial").value;

  const campoResultado = document.querySelector("#resultado-palavrachave");

  const palavrasChave = processarTexto(texto);

  campoResultado.textContent = palavrasChave.join(", ");
}
function processarTexto(texto) {
  let palavras = texto.split(/\P{L}+/u);
for (let i in palavras) {
        palavras[i] = palavras[i].toLowerCase();/*padroniza todas as palavras para minúsculas*/
}
   palavras = tirarPalavrasRuins(palavras);

  const frequencias = contaFrequencias(palavras);


  let ordenadas = Object.keys(frequencias).sort(ordenaPalavra);

  function ordenaPalavra(p1, p2) {
    return frequencias[p2] - frequencias[p1];
  }
   
  return ordenadas.slice(0, 10);
}
function contaFrequencias(palavras) {
  let frequencias = {};

  for (let i of palavras) {
  frequencias[i] = 0;

  for (let j of palavras) {
  if (i == j) {
    frequencias[i]++;
  }
 }
 } return frequencias;

  }
 function tirarPalavrasRuins(palavras) {

    const palavrasBoas = [];
    for (let palavra of palavras) {
        if (!Palavrasruins.has(palavra) && palavra.length >2) /* verifica se a palavra tem mais de 3 caracteres , senao tiver nao conta*/ {
            palavrasBoas.push(palavra);
        }
    }
    return palavrasBoas;
}
