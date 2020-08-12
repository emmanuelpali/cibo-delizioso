const body = document.body;
const btnMenu = document.querySelector(".nav-button");

btnMenu.addEventListener("click", function(e){
    e.preventDefault();
    body.classList.toggle("show");
});