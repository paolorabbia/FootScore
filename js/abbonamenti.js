window.addEventListener("DOMContentLoaded", function() {
  // const show_text = document.getElementById("show-text");
  // show_text.addEventListener("click", showPass);

  var premium = document.getElementById("premium");
  var gold = document.getElementById("gold");
  var diamond = document.getElementById("diamond");

  premium.addEventListener("click", premiumClick);
  gold.addEventListener("click", goldClick);
  diamond.addEventListener("click", diamondClick);

});

// function showPass() {
//   const text = document.getElementById("text");
//   if (text.classList.contains("hide")) {
//     text.classList.remove("hide");
//   } else {
//     text.classList.add("hide");
//   }
// }

function premiumClick(){
  localStorage.setItem("abbonamento", "premium");
}

function goldClick(){
  localStorage.setItem("abbonamento", "gold");
}

function diamondClick(){
  localStorage.setItem("abbonamento", "diamond");
}


