// Sélectionne toutes les catégories
const categoryTitles = document.querySelectorAll('.category-title');

// Ajoute un événement de clic à chaque catégorie
categoryTitles.forEach(title => {
    title.addEventListener('click', () => {
        const articles = title.nextElementSibling; // Récupère la div contenant les articles
        articles.classList.toggle('hidden'); // Alterne entre caché et visible
    });
});
