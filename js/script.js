// Cargar noticias desde JSON
fetch('/json/noticias.json')
    .then(response => response.json())
    .then(data => {
        const newsContainer = document.getElementById('news-container');
        data.noticias.forEach(noticia => {
            const noticiaHTML = `
                <h2>${noticia.titulo}</h2>
                <p>${noticia.contenido}</p>
            `;
            newsContainer.innerHTML += noticiaHTML;
        });
    })
    .catch(error => console.error('Error al cargar noticias:', error));