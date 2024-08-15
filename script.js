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

