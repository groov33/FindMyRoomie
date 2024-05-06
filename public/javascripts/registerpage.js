let homebutton = document.querySelector("#homescroll");

let aboutus = document.querySelector("#aboutscroll");

let uppertexttwo = document.querySelector(".uppertexttwo");

homebutton.addEventListener("click", function(){
    uppertexttwo.classList.add("uppertexttwo-class");
});

aboutus.addEventListener("click", function(){
    uppertexttwo.classList.add("uppertexttwo-class");
});

