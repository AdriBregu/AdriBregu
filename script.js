const nav=document.querySelector("nav"),menu=document.querySelector(".menu"),theme=document.querySelector(".theme");
menu.addEventListener("click",()=>{nav.style.display=nav.style.display==="flex"?"none":"flex"});
document.querySelectorAll("nav a").forEach(a=>a.addEventListener("click",()=>{if(innerWidth<=850)nav.style.display="none"}));
if(localStorage.getItem("theme")==="dark")document.body.classList.add("dark");
theme.addEventListener("click",()=>{document.body.classList.toggle("dark");localStorage.setItem("theme",document.body.classList.contains("dark")?"dark":"light")});
