//*-------------------------------------------------Navbar

const hamburger = document.querySelector('#nav-icon4');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open')
    navList.classList.toggle('active');    
    navBar.classList.toggle('active');  
})

const navList = document.querySelector('.navbar-list')
const navBar = document.querySelector('.navbar-top');

 //*-------------------------------------------------Card and projects
 
 const projectContainer = document.querySelector('#projects');
 const projectInjectionView = document.querySelector('.project-injection-view');
 const closeButton = document.querySelector('.close-button');
 const projectRow = document.querySelector('.projects-row')
 const projectArray = document.querySelectorAll('.project-card');
 
 //*------------------------------------------------- Event listeners
 
//  projectContainer.addEventListener('click', mostrarProyecto);
//  projectContainer.addEventListener('click', showProject);

 projectContainer.addEventListener('click', (e) => {
     if(e.target.classList.contains('close-button') || e.target.parentNode.classList.contains('close-button'))
    {
       clearInjection();
    }
    })

document.addEventListener('DOMContentLoaded', () => {
    injectProjects();
})

//*------------------------------------------------- Functions
    
function clearInjection() {
    projectInjectionView.innerHTML = '';
    window.scrollBy(0,-300);
    //* Probar con while(firstchild){removechild(firstchild)}
}


let projectsLength = []

function injectProjects()
{
    projectsDB.forEach( project => {
        const {image, title, briefDescription, description, github, deploy } = project;
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.setAttribute('data-id', projectsLength.length);
        projectCard.addEventListener('click', showProject);
        projectCard.innerHTML = `
            <img src="${image}" alt="project" class="project-miniature">
            <div class="project-card-info">
                <h2>${title}</h2>
                <p>${briefDescription}</p>
            </div>
        `;
        projectsLength.push(projectCard);
        projectRow.appendChild(projectCard);
        // console.log(projectsLength)
    })
}

function showProject(e)
{
    let id;

    e.preventDefault();
    if(e.target.parentNode.classList.contains("project-card") || e.target.parentNode.parentNode.classList.contains("project-card"))
    {
        if(e.target.classList.contains('project-miniature'))
        {
            id = e.target.parentNode.getAttribute('data-id')
        }else{
            id = e.target.parentNode.parentNode.getAttribute('data-id')
        }

        projectInjectionView.innerHTML = `
            <div class="close-button-container">
            <div class="close-button"><i class="fas fa-times" id="x-icon"></i></div>
            </div>
            
            <div class="project-injection-cover">
            <img src="${projectsDB[id].image}" alt="">
            </div>
            
            <div class="project-injection-info">
            <h1 class="project-injection-title">${projectsDB[id].title}</h1>
            <p class="project-injection-paragraph">${projectsDB[id].description}</p>
            </div>
            
            <div class="project-buttons">
            <button class="project-btn" id="github-button"><img src="img/github.svg" alt=""><a class="button-reference" href="${projectsDB[id].github}" target="_blank">Browse code</a></button>
            <button class="project-btn"><img src="img/livestream.png" alt=""><a class="button-reference" href="${projectsDB[id].deploy}" id="preview-button" target="_blank">Watch live</a></button>
            </div>
            `
        window.scrollBy(0,400);
    }
}


//*------------------------------------------------- Animations

// window.addEventListener('scroll', createAnimations)
const aboutMain = document.querySelector('.about-main')

