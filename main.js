const hamburger = document.getElementById("hamburger");
const navlinks = document.getElementById("hamburger");

hamburger.addEventListener("click" , ()=>{
    navlinks.classList.toggle("navlinks-active")
})