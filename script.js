const botaoMostraPalavras = document.querySelector("#botao-palavrachave");

botaoMostraPalavras.addEventListener("click", mostraPalavrasChave);

function mostraPalavrasChave() {
  const texto = document.querySelector("#texto-inicial").value;

  const campoResultado = document.querySelector("#resultado-palavrachave");

const palavraschaves = processarTexto(texto);

  campoResultado.textContent = palavraschaves.join(",");
}
  function processarTexto(texto) {
  let palavras = texto.split(/\P{L}+/u);
  
  const frequencias = contarFrequencias(palavras);
  let ordenadas = Object.keys(frequencias).sort(ordenaPalavra);
 console.log(ordenadas);

  return palavras;
    function ordenaPalavra(p1, p2) {
        return frequencias[p2] - frequencias[p1];

         console.log(ordenadas);
    return ordenadas.slice(0, 10);
}
  /*let frequencias = {};

  for (let i of palavras) {
    frequencias[i] = 0;

    for (let j of palavras) {
      if (i == j) {
        frequencias[i]++;
      }
    }
  }

  console.log(frequencias);

  return palavras;*/
}
function contarFrequencias (palavras) {
   let frequencias = {};

  for (let i of palavras) {
    frequencias[i] = 0;

    for (let j of palavras) {
      if (i == j) {
        frequencias[i]++;
      }
    }
  }

  console.log(frequencias);

  return palavras;}