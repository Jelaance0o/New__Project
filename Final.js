/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')
/* Menu show */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}
/* Menu hidden */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/

const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== Add blur head ===============*/

const blurHeader = ()=>{
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the blur-header class to the header tag
    this.scrollY >= 50? header.classList.add('blur-header')
                    :header.classList.remove('blur-header')
}
window.addEventListener('scroll',blurHeader) 


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () => {
    const scrollButton = document.getElementById('scroll-up');
    if (window.scrollY >= 350) {
        scrollButton.classList.add('show-scroll');
    } else {
        scrollButton.classList.remove('show-scroll');
    }
};

// Listen for scroll event to toggle the button
window.addEventListener('scroll', scrollUp);

// Smooth scroll when clicking the button
document.getElementById('scroll-up').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
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

/*===============================Scroll Reveal ANIMATION================================*/ 

const sr = ScrollReveal({
    origin:'top',
    distance:'60px',
    duration:3000,
    delay:400,
   // reset:true  //animation repet
})
sr.reveal(`.home__data,.explore__data,.explore__user,.footer__container`)
sr.reveal(`.home__card`, {delay:400,distance:'100px', interval:50})
sr.reveal(`.about__data ,.join__image,join__form `, {origin:'right'})
sr.reveal(`.about__image,join__data `, {origin:'left'})
sr.reveal(`.popular__card`, {interval:200})