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
const projectRow = document.querySelector('.projects-row')
const projectArray = document.querySelectorAll('.project-card');
// const projectArray = projectRow.children;


projectContainer.addEventListener('click', mostrarProyecto);
projectContainer.addEventListener('click', (e) => {
    if(e.target.classList.contains('close-button') || e.target.parentNode.classList.contains('close-button')){
        projectInjectionView.innerHTML = '';
    }
})

function mostrarProyecto(e) {
    if(e.target.parentNode.classList.contains("project-card") || e.target.parentNode.parentNode.classList.contains("project-card")){
        var id = e.target.parentNode.getAttribute('data-id');
        
        if(!id > 0){
            id = e.target.parentNode.parentNode.getAttribute('data-id');
        }
        
        let proyecto;

        projectArray.forEach( element => {
            if(element.getAttribute('data-id') === id){
                proyecto = {
                    miniatura: element.children[0].src,
                    project: element.children[1].children[0].textContent,
                    descripcion: element.children[1].children[1].textContent,
                    id: id
                }
            }
        });

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
    
function clearInjection() {
    projectInjectionView.innerHTML = '';
}

// Animations

// window.addEventListener('scroll', createAnimations)
const aboutMain = document.querySelector('.about-main')

// function createAnimations() {
//     if(window.innerWidth >= 750){
//         if(window.scrollY >= aboutMain.getBoundingClientRect().top - 200){
//             aboutMain.classList.add('animate__animated', 'animate__fadeInUp')
//         }
//         if(window.scrollY >= projectContainer.getBoundingClientRect().top - 200){
//             projectContainer.classList.add('animate__animated', 'animate__fadeInUp')
//         }
//     }else{
//         if(window.scrollY >= aboutMain.getBoundingClientRect().top - 300){
//             aboutMain.classList.add('animate__animated', 'animate__fadeInUp')
//         }
//         if(window.scrollY >= projectContainer.getBoundingClientRect().top - 300){
//             projectContainer.classList.add('animate__animated', 'animate__fadeInUp')
//         }
//     }
// }
