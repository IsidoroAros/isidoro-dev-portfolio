// Navbar

const hamburger = document.querySelector('#nav-icon4');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open')
    navList.classList.toggle('active');    
    navBar.classList.toggle('active');  
})

const navList = document.querySelector('.navbar-list')
const navBar = document.querySelector('.navbar-top');

hamburger.addEventListener('click', ()=>{
  
})

// Card and projects

const projectContainer = document.querySelector('#projects');
const projectInjectionView = document.querySelector('.project-injection-view');
const closeButton = document.querySelector('.close-button');

projectContainer.addEventListener('click', mostrarProyecto);
closeButton.addEventListener('click', clearInjection)

function mostrarProyecto(e) {
    clearInjection();
    if(e.target.parentNode.classList.contains("project-card") || e.target.parentNode.parentNode.classList.contains("project-card")){
        
        const proyecto = {
            miniatura: document.querySelector('.project-card img').src,
            project: document.querySelector('.project-card h2').textContent,
            descripcion: document.querySelector('.project-card p').textContent,
            id: document.querySelector('.project-card').getAttribute('data-id')
        }
        document.createElement('div').classList.add('close-button-container');
        
           

    }
}

function clearInjection() {
    projectInjectionView.innerHTML = '';
}

