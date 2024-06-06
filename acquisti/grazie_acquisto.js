window.addEventListener("load", function() {
  var codiceGenerato = generaCodice(5);

  var codice = document.getElementById("codice-generato");

  codice.textContent = codiceGenerato;
});

function generaCodice(lunghezza) {
  var caratteri = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  var codice = '';
  for (var i = 0; i < lunghezza; i++) {
    var indiceCasuale = Math.floor(Math.random() * caratteri.length);
    codice += caratteri.charAt(indiceCasuale);
  }
  return codice;
}