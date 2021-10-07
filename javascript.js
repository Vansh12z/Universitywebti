console.log("hvxashm");
let search=document.getElementById('search-box');
let se=document.getElementById('seacrh-icon');
let d=document.querySelector('.nav-bar');
se.onclick=()=>{
    search.style.top='0px';
    
  
}
let clo=document.getElementById('closed');
clo.onclick=()=>{
    search.style.top='-110%';
 
}
//menu button
let menu=document.getElementById('menu-bar');
let nav=document.querySelector('.list');

menu.addEventListener('click',()=>{
    nav.classList.toggle('activemenu');
    console.log(nav);
    menu.classList.toggle('fa-times');
})


