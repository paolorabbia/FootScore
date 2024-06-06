let num = 1;

document.addEventListener("DOMContentLoaded", function() {
  var checked = localStorage.getItem("checked");
  let btnSvuota = document.getElementById("btn-svuota"); // Seleziona solo il pulsante "Svuota carrello"
  let container = document.getElementById("container"); // Seleziona il container
  let totaleContainer = document.getElementById("totale-container"); // Seleziona il container del totale


  if (checked === '0') {
    localStorage.removeItem("cart");
    container.classList.add("d-none"); // Nascondi il container
    hideAllCards(); // Nascondi tutti gli elementi del carrello
    showElement("carrello-vuoto"); // Mostra il messaggio di carrello vuoto
  } else {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let hasItems = false;

    // Mostra gli elementi del carrello se presenti
    for (let i = 0; i < cart.length; i++) {
      let elem = cart[i];
      if (elem) {
        showElement(elem.id); // Mostra l'elemento
        hasItems = true; // Imposta hasItems a true se almeno un elemento è presente
      }
    }

    // Se il carrello è vuoto, mostra il messaggio di carrello vuoto
    if (!hasItems) {
      showElement("carrello-vuoto");
    } else {
      // Se ci sono elementi nel carrello, mostra il container e gestisci il click solo per il pulsante "Svuota carrello"
      showElement("container");
      totaleContainer.classList.remove("d-none"); // Mostra il container del totale
      btnSvuota.addEventListener("click", function() {
        localStorage.removeItem("cart");
        container.classList.add("d-none");
        // Nascondi tutti gli elementi del carrello
        hideAllCards();
        // Mostra il messaggio di carrello vuoto
        showElement("carrello-vuoto");
        // Aggiorna il totale a 0 quando svuotiamo il carrello
        totaleContainer.textContent = "";
      });

      // Aggiungi event listener a tutti i pulsanti "trash"
      let trashButtons = document.getElementsByName("thresh");
      trashButtons.forEach(button => {
        button.addEventListener("click", function() {
          let parentCard = button.closest('.container');
          if (parentCard) {
            parentCard.remove(); // Rimuovi completamente l'elemento dal DOM
            let cardId = parentCard.id;
            removeElementFromCart(cardId); // Rimuovi l'elemento dal carrello (e localStorage)
            aggiornaPrezzoTotaleUI(); // Aggiorna il prezzo totale dopo la rimozione
            checkCartEmpty(); // Controlla se il carrello è vuoto dopo la rimozione
          }
        });
      });

      // Calcola e aggiorna il totale quando il documento è pronto
      aggiornaPrezzoTotaleUI();

    }
  }

  let sinistraButtons = document.querySelectorAll("#sinistra");
  let destraButtons = document.querySelectorAll("#destra");

  sinistraButtons.forEach(sinistra => {
    sinistra.addEventListener("click", function() {
      let numero = sinistra.closest(".row").querySelector("#numero");
      let num = parseInt(numero.innerText);
      numero.style.cssText = "font-family: 'Radio Canada Big', sans-serif; font-weight: bold;";
      if (num > 1) {
        num--;
        numero.innerText = num;
        aggiornaPrezzoTotaleUI(); // Aggiorna il prezzo totale dopo la modifica della quantità
      } else {
        alert("Hai raggiunto la quantità minima. Per rimuovere l'articolo, premi sul cestino.");
      }
    });
  });

  destraButtons.forEach(destra => {
    destra.addEventListener("click", function() {
      let numero = destra.closest(".row").querySelector("#numero");
      let num = parseInt(numero.innerText);
      numero.style.cssText = "font-family: 'Radio Canada Big', sans-serif; font-weight: bold;";
      if (num < 50) {
        num++;
        numero.innerText = num;
        aggiornaPrezzoTotaleUI(); // Aggiorna il prezzo totale dopo la modifica della quantità
      }
      else {
        alert("Hai raggiunto la quantità massima. Questo articolo sarà disponibile per l'acquisto in un nuovo ordine.");
      }
    });
  });
});

// Funzione per rimuovere un elemento dal carrello e dal localStorage
function removeElementFromCart(elementId) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let updatedCart = cart.filter(elem => elem.id !== elementId);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
}

// Funzione per nascondere tutti gli elementi del carrello
function hideAllCards() {
  let footer = document.getElementById("footer-carrello");
  let cards = document.querySelectorAll('.container');
  cards.forEach(card => {
    card.classList.add("d-none");
    footer.classList.remove("d-none");
  });
}

// Funzione per mostrare un elemento
function showElement(elementId) {
  let element = document.getElementById(elementId);
  if (element) {
    element.classList.remove("d-none");
  }
}

// Funzione per calcolare il prezzo totale
function calcolaPrezzoTotale(item) {
  let prezzoElement = item.querySelector("[name='prezzo']"); // Seleziona l'elemento con name='prezzo'
  let quantitaElement = item.querySelector("#numero"); // Seleziona l'elemento con id 'numero'
  if (prezzoElement && quantitaElement) {
    let prezzoText = prezzoElement.getAttribute('data-prezzo'); // Ottieni il prezzo dal data-prezzo
    let quantita = parseInt(quantitaElement.innerText); // Ottieni la quantità
    if (prezzoText && !isNaN(quantita)) {
      let prezzo = parseFloat(prezzoText); // Converti il prezzo in float
      return prezzo * quantita; // Moltiplica il prezzo per la quantità
    }
  }
  return 0; // Se non è stato trovato il prezzo o la quantità, restituisci 0
}

// Funzione per aggiornare il totale dei prezzi nell'interfaccia utente
function aggiornaPrezzoTotaleUI() {
  let totaleContainer = document.getElementById("totale-container"); // Seleziona il container del totale
  if (totaleContainer) {
    var totale = 0; // Inizializza il totale a 0
    let cartItems = document.querySelectorAll('.container:not(.d-none)'); // Seleziona tutti gli elementi del carrello visibili
    cartItems.forEach(item => {
      totale += calcolaPrezzoTotale(item); // Aggiungi il prezzo al totale
    });
    if (totale > 1000) {
      var totaleFormattato = totale.toFixed(2); // Formatta il numero mettendo solo 2 cifre dopo la virgola
      var totaleFormattatoLocale = parseFloat(totaleFormattato).toLocaleString('it-IT'); // Formatta il numero aggiungendo un punto come separatore delle migliaia 
      totaleContainer.textContent = "Totale carrello: " + totaleFormattatoLocale + " €";
      totaleContainer.style.cssText = "color: white; font-size: 30px; font-family: 'Radio Canada Big', sans-serif; font-weight: bold;";
    } else {
      totaleContainer.textContent = "Totale carrello: " + totale.toFixed(2) + " €";
      totaleContainer.style.cssText = "color: white; font-size: 30px; font-family: 'Radio Canada Big', sans-serif; font-weight: bold;";
    }
    // Applica gli stili al totaleContainer
  }
}

// Funzione per controllare se il carrello è vuoto dopo la rimozione di un elemento
function checkCartEmpty() {
  let totaleContainer = document.getElementById("totale-container");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length === 0) {
    let container = document.getElementById("container");
    let carrelloVuoto = document.getElementById("carrello-vuoto");
    if (container) container.classList.add("d-none"); // Nascondi il container
    if (carrelloVuoto) carrelloVuoto.classList.remove("d-none"); // Mostra il messaggio di carrello vuoto
    totaleContainer.classList.add("d-none");
  }
}
