//--Show Menu
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');

//--проверить существует ли константа
if(navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('active');
  });
}

if(navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
}

//--чтобы убиралась шторка при нажатии на пункт меню
const navLink = document.querySelectorAll('.nav-link');

function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    // When we click on each nav__link, we remove the active class
    navMenu.classList.remove('active');
}
navLink.forEach(n => n.addEventListener('click', linkAction));

//--Change Background Header
//--изменение цвета header при прокрутке
function scrollHeader() {
  const header = document.getElementById('header');

  if(this.scrollY >= 100) header.classList.add('scroll-header'); else header.classList.remove('scroll-header');
}
window.addEventListener('scroll', scrollHeader);

//--Initialize Swiper 
  var swiper = new Swiper(".mySwiper", {
    loop: true,
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    spaceBetween: 30,
    coverflowEffect: {
      rotate: 0,
    },
  });

//--Video
const videoFile = document.getElementById('video-file'),
      videoButton = document.getElementById('video-button'),
      videoIcon = document.getElementById('video-icon');

function playPause() {
  if(videoFile.paused) {
    //Play video
    videoFile.play()

    //we change the icon
    videoIcon.classList.add('ri-pause-line');
    videoIcon.classList.remove('ri-play-line');
  } else {
      //Pause video
      videoFile.pause()

      //we change the icon
      videoIcon.classList.remove('ri-pause-line');
      videoIcon.classList.add('ri-play-line');
  }
}
videoButton.addEventListener('click', playPause)

function finalVideo() {
  //video ends,icon change
  videoIcon.classList.remove('ri-pause-line');
  videoIcon.classList.add('ri-play-line');
}
// ended, when the video ends
videoFile.addEventListener('ended', finalVideo)

//--Scroll Up
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  
  if(scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp)

//--Scroll Active Link
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav-menu a[href*=' + sectionId  + ']').classList.add('active-link')
    }else{
      document.querySelector('.nav-menu a[href*=' + sectionId  + ']').classList.remove('active-link')
    }
  });
}
window.addEventListener('scroll', scrollActive)

//--Dark Light Theme
let darkModeIcon = document.querySelector('#theme-button');

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle('ri-sun-line');
  document.body.classList.toggle('dark-mode');
};

//--Scroll Reveal
const sr = ScrollReveal ({
  distance: '60px',
  duration: 2200,
  reset: true,
})

sr.reveal(`.home-data, .home-social-link, .home-info, .discover-container, .experience-data, .experience-overlay, .place-card, .sponsor-content, .footer-data, .footer-rights`, {
  origin: 'top',
  interval: 100,
})

sr.reveal(`.about-data, .video-container p, .subscribe-container p `, {
  origin: 'left',
})

sr.reveal(`.about-img-overlay, .video-content, .subscribe-container form`, {
  origin: 'right',
  interval: 100,
})

