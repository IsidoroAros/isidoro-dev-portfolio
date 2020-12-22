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
projectContainer.addEventListener('click', (e) => {
    if(e.target.classList.contains('close-button') || e.target.parentNode.classList.contains('close-button')){
        projectInjectionView.innerHTML = '';
    }
})

function mostrarProyecto(e) {
    if(e.target.parentNode.classList.contains("project-card") || e.target.parentNode.parentNode.classList.contains("project-card")){
        const proyecto = {
            miniatura: document.querySelector('.project-card img').src,
            project: document.querySelector('.project-card h2').textContent,
            descripcion: document.querySelector('.project-card p').textContent,
            id: document.querySelector('.project-card').getAttribute('data-id')
        }
        projectInjectionView.innerHTML = `
        <div class="close-button-container">
            <div class="close-button"><i class="fas fa-times" id="x-icon"></i></div>
            </div>
            
            <div class="project-injection-cover">
            <img src="${proyecto.miniatura}" alt="">
            </div>
            
            <div class="project-injection-info">
            <h1 class="project-injection-title">${proyecto.project}</h1>
            <p class="project-injection-paragraph">${proyecto.descripcion}</p>
            </div>
            
            <div class="project-buttons">
            <button class="project-btn" id="github-button"><img src="img/github.svg" alt=""><a class="button-reference" href="#">Browse code</a></button>
            <button class="project-btn"><img src="img/livestream.png" alt=""><a class="button-reference" href="#" id="preview-button">Watch live</a></button>
            </div>
            `
        }
        window.scrollBy(0,400);
}
    
function clearInjection(e) {
    projectInjectionView.innerHTML = '';
}

// Animations

window.addEventListener('scroll', createAnimations)
const aboutMain = document.querySelector('.about-main')

function createAnimations() {
    if(window.scrollY >= aboutMain.getBoundingClientRect().top - 150){
        aboutMain.classList.add('animate__animated', 'animate__fadeInUp')
        aboutMain.style.display = 'block';
    }
    if(window.scrollY >= projectContainer.getBoundingClientRect().top - 150){
        projectContainer.classList.add('animate__animated', 'animate__fadeInUp')
        projectContainer.style.display = 'block';
    }
}
