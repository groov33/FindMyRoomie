let body=document.querySelector("body");
let navigation=document.querySelector(".nav");
let homeButton=document.querySelector(".homebutton");
let aboutUs=document.querySelector(".aboutusbutton");



window.addEventListener("scroll", () => {
    navigation.classList.add("scrollnav");
    homeButton.classList.add("scrollhomebutton");
    aboutUs.classList.add("scrollhomebutton");
    if(window.scrollY===0){
        navigation.classList.remove("scrollnav");
    homeButton.classList.remove("scrollhomebutton");
    aboutUs.classList.remove("scrollhomebutton");
    }
});


let numbers=document.querySelector(".changingnumber");

numbers.innerHTML=1;

window.addEventListener("load", function () {
    for(let i = 1;i<10;i++)
    {
        setTimeout(() => {
            numbers.innerHTML=parseInt(numbers.innerHTML)+1+"+";
        },i*100);
    }
});


let bodyy=document.querySelector("body");
let darkButton = document.querySelector("#dbtn");

bodyy.addEventListener("click", () => {
    if(darkButton.innerHTML==="Dark Mode")
    {
    bodyy.classList.add("dark-background");
    darkButton.innerHTML="Light Mode";
}
else if (darkButton.innerHTML=="Light Mode")
{
    bodyy.classList.remove("dark-background");
    darkButton.innerHTML="Dark Mode";
}

})

// window.addEventListener("scroll", () => {

//     let num=window.scrollY;
//     numbers.innerHTML=Math.floor(((num/100)+3)) +"+";
// });