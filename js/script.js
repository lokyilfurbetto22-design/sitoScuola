//sezioni
const iniziale = document.getElementById("intro");
const pag_prodotti = document.getElementById("pag-prodotti");




//bottoni 
const home = document.getElementById("home");
const prodotti = document.getElementById("prodottii");
const chi_siamo = document.getElementById("chi-siamo");
const contattaci = document.getElementById("contattaci");

function vai_product() {
     iniziale.style.display = "none";
    pag_prodotti.style.display = "flex";
}

function torna_home() {
    iniziale.style.display = "flex";
    pag_prodotti.style.display = "none";
}
home.addEventListener("click", torna_home);
prodotti.addEventListener("click", vai_product);