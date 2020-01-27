$("#botao-frase").click(fraseAleatoria);
$("#botao-frase-id").click(buscaFrase);

function fraseAleatoria() {
  spinner();
  $.get("http://localhost:3000/frases", trocaFraseAleatoria)
  .fail(falhaCarregamento)
  .always(spinner);
}

function trocaFraseAleatoria(data) {
  var frase = $(".frase");
  var numRand = Math.floor(Math.random() * data.length);

  frase.text(data[numRand].texto);
  atualizaTamanhoFrase();
  atualizaTempoInicial(data[numRand].tempo);
}

function buscaFrase() {
  var fraseId = $("#frase-id").val();
  var requisicao = {id: fraseId};

  spinner();
  $.get("http://localhost:3000/frases", requisicao, trocaFrase)
  .fail(falhaCarregamento)
  .always(spinner);
}

function trocaFrase(resposta) {
  var frase = $(".frase");

  frase.text(resposta.texto);
  atualizaTamanhoFrase();
  atualizaTempoInicial(resposta.tempo);
}

function spinner() {
  $("#spinner").toggle();
}

function falhaCarregamento() {
  $("#erro").toggle();
  setTimeout(function(){
    $("#erro").toggle();
  }, 2000);
}