



//================================== SHOW SCROLL UP =========================

const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll__up')

    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                    :scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)




//================================== SCROLL SECTION ACTIVE LINK =========================

const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    
    const scrollDown = window.scrollY

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav__list a[href*=' + sectionId +  ']')

    if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
        sectionsClass.classList.add('active-link')
    } else{
        sectionsClass.classList.remove('active-link')
    }

    })
}
window.addEventListener('scroll' , scrollActive)

//================================== SCROLL REVEAL ANIMATION=========================
const sr = ScrollReveal({
    origin :'top',
    distance : '60px',
    duration: 2500,
    delay:400,
    //rest:true,  //Animation repeat

})

sr.reveal('.perfil, .contact__form')
sr.reveal('.info', {origin: 'left', delay:800})
sr.reveal('.skills', {origin: 'left', delay:1000})
sr.reveal('.about', {origin: 'right', delay:1200})
sr.reveal('.projets__card,  .services__card, .experience__card , .abilitie__card', {interval:100})


/* ================= THEME SOMBRE / CLAIR ================= */
const themeButton = document.getElementById('theme-toggle')
const themeIcon = document.getElementById('theme-icon')
const lightTheme = 'light-theme'
const sunIcon = 'ri-sun-line'
const moonIcon = 'ri-moon-line'

// thème sauvegardé
const selectedTheme = localStorage.getItem('selected-theme')

// appliquer le thème sauvegardé
if (selectedTheme === 'light') {
  document.body.classList.add(lightTheme)
  themeIcon.classList.replace(moonIcon, sunIcon)
}

themeButton.addEventListener('click', () => {
  document.body.classList.toggle(lightTheme)
  
  if (document.body.classList.contains(lightTheme)) {
    themeIcon.classList.replace(moonIcon, sunIcon)
    localStorage.setItem('selected-theme', 'light')
  } else {
    themeIcon.classList.replace(sunIcon, moonIcon)
    localStorage.setItem('selected-theme', 'dark')
  }
})