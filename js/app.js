const hamburger = document.querySelector('.hamburger-icon');
const navList = document.querySelector('.navbar-list')
const navBar = document.querySelector('.navbar-top');

hamburger.addEventListener('click', ()=>{
    navList.classList.toggle('active');    
    navBar.classList.toggle('active');    
})