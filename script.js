// Array de posts recientes
const recentPosts = [
    "10 trucos de CSS que debes conocer",
    "Novedades en ECMAScript 2024",
    "Cómo optimizar el rendimiento de tu sitio web",
    "Introducción a React.js"
];

// Función para cargar posts recientes
function loadRecentPosts() {
    const recentPostsList = document.getElementById('recent-posts');
    recentPosts.forEach(post => {
        const li = document.createElement('li');
        li.textContent = post;
        recentPostsList.appendChild(li);
    });
}

// Cargar posts recientes cuando la página esté lista
document.addEventListener('DOMContentLoaded', loadRecentPosts);

// Añadir interactividad a los artículos
const articles = document.querySelectorAll('article');
articles.forEach(article => {
    article.addEventListener('click', () => {
        article.classList.toggle('expanded');
    });
});