window.addEventListener("DOMContentLoaded", function() {
  var tipo = this.localStorage.getItem("abbonamento");
  if (tipo == null)
    window.location.href = "/";
  var img = document.getElementById("img-abb");
  img.src = "/img/" + tipo + ".png";
  img.classList.remove("d-none");
  var text = document.getElementById("abbonamento");
  
  let ico = '';
  if(tipo == 'premium')
    ico = ' 🌟';
  else if(tipo == 'gold')
    ico = ' 🏵️';
  else if (tipo == 'diamond')
    ico = ' 💎';
  
  text.textContent = "Ora il tuo abbonamento è " + tipo.toUpperCase() + ico;
  text.classList.remove("d-none");
});