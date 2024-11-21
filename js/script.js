// Liste des sections
const sections = document.querySelectorAll('.section');
let currentIndex = 0; // Indice de la section actuelle

// Fonction pour afficher la section courante
function showSection(index) {
    sections.forEach((section, i) => {
        if (i === index) {
            section.classList.add('visible'); // Afficher la section
        } else {
            section.classList.remove('visible'); // Masquer les autres sections
        }
    });
}

// Initialiser la première section visible
showSection(currentIndex);

// Gestion du défilement avec la souris
window.addEventListener('wheel', (event) => {
    if (event.deltaY > 0) {
        // Scroll vers le bas
        if (currentIndex < sections.length - 1) {
            currentIndex++;
        }
    } else {
        // Scroll vers le haut
        if (currentIndex > 0) {
            currentIndex--;
        }
    }
    showSection(currentIndex);
});

// Gestion de la navigation via les liens du menu
const navLinks = document.querySelectorAll('.sidebar ul li a');
navLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        currentIndex = index;
        showSection(currentIndex);
    });
});
