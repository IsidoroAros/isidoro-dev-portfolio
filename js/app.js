// General



// Navbar

const hamburger = document.querySelector('.hamburger-icon');
const navList = document.querySelector('.navbar-list')
const navBar = document.querySelector('.navbar-top');

hamburger.addEventListener('click', ()=>{
    navList.classList.toggle('active');    
    navBar.classList.toggle('active');    
})

// Card and projects

const projectContainer = document.querySelector('#projects');
const projectDetail = document.querySelector('.project-injection-view');



projectContainer.addEventListener('click', mostrarProyecto);

function mostrarProyecto(e) {
    console.log('llego hasta aca')
    if(e.target.classList.contains('project-card')){
        console.log('Si lo tiene');
        const proyecto = {
            miniatura: document.querySelector('.project-card img').src,
            project: document.querySelector('.project-card h2').textContent,
            descripcion: document.querySelector('.project-card p').textContent,
            id: document.querySelector('.project-card').getAttribute('data-id')
        }
        console.log(proyecto)
    }
}