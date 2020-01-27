$("#botao-frase").click(fraseAleatoria);

function fraseAleatoria() {
  $.get("http://localhost:3000/frases", trocaFraseAleatoria)
  .fail(function(){
    $("#erro").toggle();
    setTimeout(function(){
      $("#erro").toggle();
    }, 2000);
  });
}

function trocaFraseAleatoria(data) {
  var frase = $(".frase");
  var numRand = Math.floor(Math.random() * data.length);

  frase.text(data[numRand].texto);
  atualizaTamanhoFrase();
  atualizaTempoInicial(data[numRand].tempo);
}
