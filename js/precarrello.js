let elementi = [
    {id: "elemento1"},
    {id: "elemento2"},
    {id: "elemento3"},
    {id: "elemento4"},
    {id: "elemento5"},
    {id: "elemento6"},
    {id: "elemento7"},
    {id: "elemento8"},
    {id: "elemento9"},
    {id: "elemento10"},
    {id: "elemento11"},
    {id: "elemento12"},
    {id: "elemento13"},
    {id: "elemento14"},
    {id: "elemento15"},
    {id: "elemento16"},
    {id: "elemento17"},
    {id: "elemento18"},
    {id: "elemento19"},
    {id: "elemento20"},
    {id: "elemento21"},
    {id: "elemento22"},
    {id: "elemento23"},
    {id: "elemento24"},
    {id: "elemento25"},
    {id: "elemento26"},
    {id: "elemento27"},
    {id: "elemento28"},
    {id: "elemento29"},
    {id: "elemento30"},
    {id: "elemento31"},
    {id: "elemento32"},
    {id: "elemento33"},
    {id: "elemento34"},
    {id: "elemento35"},
    {id: "elemento36"},
];

document.addEventListener("DOMContentLoaded", function(){
    document.getElementsByName("aggiungi").forEach(elem => {
        elem.addEventListener("click", (e) => {
            alert("Elemento aggiunto al carrello");
            const target = e.target;
            const id = target.getAttribute("id").slice(4);
            const current = elementi[id - 1]; 
            addElementToCart(current);
        });
    });
});

function addElementToCart(toAdd) {
    let cart = JSON.parse(localStorage.getItem("cart")) || []; 
    cart.push(toAdd);
    localStorage.setItem("cart", JSON.stringify(cart));
}

