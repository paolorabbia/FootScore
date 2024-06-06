window.addEventListener("load", function() {
  var checked = localStorage.getItem("checked");
  var login = document.getElementsByName("login");
  var carrello = this.document.getElementsByName("carrello");
  if (checked == '1') {
    for (let i = 0; i < login.length; i++) {
      login[i].setAttribute("href", "/login/ritorna-home.html")
    }
    for (let i = 0; i < carrello.length; i++) {
      carrello[i].setAttribute("href", "/acquisti/carrello.html")
    }
  }
});
