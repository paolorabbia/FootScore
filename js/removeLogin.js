let cliccato = false;

window.addEventListener("beforeunload", function() {
    if (!cliccato) {
        localStorage.setItem("checked", '0');
    }
    
});

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.querySelectorAll("#button");
    buttons.forEach(function(button) {
        button.addEventListener("click", function() {
            cliccato = true;
        });
    });
});
