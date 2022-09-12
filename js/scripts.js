 $('.owl-carousel').owlCarousel({
    margin:10,
    nav:true,
    dots:false,
    loop:true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayhoverpause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

 
function gamochena(){
    document.getElementById("massagebox").style.display = "block";
}
function gaqri(){
    document.getElementById("massagebox").style.display = "none";
}


