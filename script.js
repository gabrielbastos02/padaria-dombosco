//hamburgerButton
//Aqui adicinando um elemento de escuatar o click dou mouse sobre o icone de hamburguer.
hamburgerButton.addEventListener("click", function () {
    mobileMenu.classList.add("flex");
    //criando uma funça que a ouvir o click dou mouse, ele adiciona uma class (flex), que esta fazando nossa caixa (div) visivel, ou seja, ficara totalmente visivel para todos.

});

closeButton.addEventListener("click", function () {
    mobileMenu.classList.remove("flex");
});