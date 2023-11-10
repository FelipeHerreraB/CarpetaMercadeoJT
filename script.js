const carpet = document.getElementById("carpet");
const barraLateral = document.querySelector(".nav-lateral");
const spans = document.querySelectorAll("span");
const menu = document.querySelector(".menu");
const main = document.querySelector("main")

menu.addEventListener("click",()=>{
    barraLateral.classList.toggle("max-barra-lateral");
    if(barraLateral.classList.contains("max-barra-lateral")){
        menu.children[0].style.display = "none";
        menu.children[1].style.display = "block";
    }
    else{
        menu.children[0].style.display = "block";
        menu.children[1].style.display = "none";
    }
    if(window.innerWidth<=320){
        barraLateral.classList.add("mini-nav-lateral");
        main.classList.add("min-main");
        spans.forEach((span)=>{
            span.classList.add("oculto");
        })
    }
});

carpet.addEventListener("click",()=>{
    barraLateral.classList.toggle("mini-nav-lateral");
    main.classList.toggle("min-main");
    spans.forEach((span)=>{
        span.classList.toggle("oculto");
    });
});