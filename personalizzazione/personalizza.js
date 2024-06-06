let num = 1;

window.addEventListener("load", function() {
  const imgCambiaColoreMaglia = document.getElementsByClassName("img-cambia-colore-maglia");
  for (const img of imgCambiaColoreMaglia) {
    img.addEventListener("click", cambiaColoreMaglia);
  }

  const imgCambiaColorePantalone = document.getElementsByClassName("img-cambia-colore-pantalone");
  for (const img of imgCambiaColorePantalone) {
    img.addEventListener("click", cambiaColorePantalone);
  }

  const imgCambiaColoreCalze = document.getElementsByClassName("img-cambia-colore-calze");
  for (const img of imgCambiaColoreCalze) {
    img.addEventListener("click", cambiaColoreCalze);
  }

  const imgCambiaLogoMaglia = document.getElementsByClassName("img-cambia-logo-maglia");
  for (const img of imgCambiaLogoMaglia) {
    img.addEventListener("click", cambiaLogoMaglia);
  }

  let sinistraButtons = document.querySelectorAll("#sinistra");
  let destraButtons = document.querySelectorAll("#destra");

  sinistraButtons.forEach(sinistra => {
    sinistra.addEventListener("click", function() {
      let numero = sinistra.closest(".row").querySelector("#numero");
      let num = parseInt(numero.innerText);
      numero.style.cssText = "font-size: 24px; font-weight: bold;";
      if (num > 1) {
        num--;
        numero.innerText = num;
      } else {
        alert("Hai raggiunto la quantità minima di divise acquistabili.");
      }
    });
  });

  destraButtons.forEach(destra => {
    destra.addEventListener("click", function() {
      let numero = destra.closest(".row").querySelector("#numero");
      let num = parseInt(numero.innerText);
      numero.style.cssText = "font-size: 24px; font-weight: bold;";
      if (num < 100) {
        num++;
        numero.innerText = num;
      }
      else {
        alert("Hai raggiunto la quantità massima. Potrai acquistare altre divise in un nuovo ordine.");
      }
    });
  });
});

function cambiaColoreMaglia() {
  const mDefault = document.getElementById("m-default");

  const colore = this.dataset.color;

  mDefault.src = "img-articoli/" + colore + ".png";
}

function cambiaColorePantalone() {
  const mDefault = document.getElementById("p-default");

  const colore = this.dataset.color;

  mDefault.src = "img-articoli/" + colore + ".png";
}

function cambiaColoreCalze() {
  const mDefault = document.getElementById("c-default");

  const colore = this.dataset.color;

  mDefault.src = "img-articoli/" + colore + ".png";
}

function cambiaLogoMaglia() {
  const mDefault = document.getElementById("logo-default");

  const logo = this.dataset.color;

  mDefault.src = "img-articoli/" + logo + ".png";
}