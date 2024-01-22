/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function downloadCV() {
    const content = 'cv'; // Ваш вміст CV
    const blob = new Blob([content], { type: 'application/pdf' }); // Змінено type на 'application/pdf'

    const downloadLink = document.createElement('a');
    downloadLink.href = window.URL.createObjectURL(blob);
    downloadLink.download = 'file:///C:/Users/maxbr/Downloads/portfolio-responsive-complete-main/portfolio-responsive-complete-main/assets/js/work6.jpg';

    // Додано атрибут для забезпечення коректного завантаження на деяких браузерах
    downloadLink.setAttribute('style', 'display:none');

    document.body.appendChild(downloadLink);
    downloadLink.click();

    // Видалено посилання з DOM після завантаження
    document.body.removeChild(downloadLink);
}


function downloadFile(data, name = "cv.pdf") {
    const blob = new Blob([data], { type: "octet-stream" });

    const href = URL.createObjectURL(blob);

    const a = Object.assign(document.createElement("a"), {
        href,
        style: "display:none",
        download: name,
    });
    document.body.appendChild(a);

    a.click();
    URL.revokeObjectURL(href);
    a.remove();
}

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 
