window.revelar = ScrollReveal({reset:true});
revelar.reveal('.efeito-img-topo', {
    //estamos chanando a class a qual eu quero o efeito do scrollRevel.
    duration: 2000,
    distance: '90px'
});

revelar.reveal('.clientes-efeito', {
    duration: 2000,
    distance: '120px',
    origin: 'left'
});


revelar.reveal('.principais-produtos', {
    duration: 2000,
    distance: '120px'
});

revelar.reveal('.sobre-nos', {
    duration: 2000,
    distance: '120px',
    origin: 'right'
});

//hamburgerButton
//Aqui adicinando um elemento de escuatar o click dou mouse sobre o icone de hamburguer.
hamburgerButton.addEventListener("click", function () {
    mobileMenu.classList.add("flex");
    //criando uma funça que a ouvir o click dou mouse, ele adiciona uma class (flex), que esta fazando nossa caixa (div) visivel, ou seja, ficara totalmente visivel para todos.

});

closeButton.addEventListener("click", function () {
    mobileMenu.classList.remove("flex");
});

