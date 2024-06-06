window.addEventListener("load", function(){
  const video = document.getElementsByTagName("video");
  if(screen.width < 770){
    for (let i = 0; i < video.length; i++) {
      video[i].style.display = "none";
    }
  }

  var checked = localStorage.getItem("checked");
  let container = document.getElementById("container");

  if (checked === '0') {
    localStorage.removeItem("cart");
    container.classList.add("d-none"); // Nascondi il container
    hideAllCards(); // Nascondi tutti gli elementi del carrello
    showElement("carrello-vuoto"); // Mostra il messaggio di carrello vuoto
  }
});