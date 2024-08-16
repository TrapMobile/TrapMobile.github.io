// Funzione per mostrare un messaggio al click del bottone "Fai una donazione"
document.getElementById('donateBtn').addEventListener('click', function() {
    alert('Grazie per il tuo supporto! Siamo grati per la tua donazione.');
});

// Scorrimento morbido quando si clicca su un link del menu
document.querySelectorAll('.sidebar ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

<<<<<<< HEAD
menuIcon.addEventListener('click', () => {
  navList.classList.toggle('show');
});

const video = document.querySelector('.video');
const textContainer = document.querySelector('.text-container');

let scrollY = 0;

window.addEventListener('scroll', () => {
  scrollY = window.scrollY;
  video.style.transform = `translateY(${scrollY * 0.2}px)`; // Adatta il valore 0.2 per regolare la velocità dello scorrimento del video
  video.style.filter = `blur(${5 + scrollY * 0.01}px)`; // Aumenta la sfocatura man mano che si scorre
});
=======
>>>>>>> parent of ce9077d (new site)
