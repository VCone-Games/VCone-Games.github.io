/*!
* Start Bootstrap - Full Width Pics v5.0.6 (https://startbootstrap.com/template/full-width-pics)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-full-width-pics/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project
document.addEventListener("DOMContentLoaded", function () {
    const charactersButton = document.getElementById("characters-button");
    const scenariosButton = document.getElementById("scenarios-button");
    const galleryContent = document.querySelectorAll(".gallery-content");

    charactersButton.addEventListener("click", () => {
        charactersButton.classList.add("active");
        scenariosButton.classList.remove("active");
        galleryContent.forEach((content) => {
            content.style.display = content.classList.contains("characters") ? "grid" : "none";
        });
        showNavigation();
    });

    scenariosButton.addEventListener("click", () => {
        scenariosButton.classList.add("active");
        charactersButton.classList.remove("active");
        galleryContent.forEach((content) => {
            content.style.display = content.classList.contains("scenarios") ? "grid" : "none";
        });
        showNavigation();
    });

    // Mostrar "Personajes" por defecto al cargar la página
    charactersButton.click();

    
});

document.addEventListener("DOMContentLoaded", function () {
    const videosButton = document.getElementById("videos-button");
    const imagesButton = document.getElementById("images-button");
    const artworkButton = document.getElementById("artwork-button");
    const presskitContent = document.querySelectorAll(".presskit-content");

    videosButton.addEventListener("click", () => {
        videosButton.classList.add("active");
        imagesButton.classList.remove("active");
        artworkButton.classList.remove("active");
        presskitContent.forEach((content) => {
            content.style.display = content.classList.contains("videos") ? "grid" : "none";
        });
    });

    imagesButton.addEventListener("click", () => {
        imagesButton.classList.add("active");
        videosButton.classList.remove("active");
        artworkButton.classList.remove("active");
        presskitContent.forEach((content) => {
            content.style.display = content.classList.contains("images") ? "grid" : "none";
        });
    });

    artworkButton.addEventListener("click", () => {
        artworkButton.classList.add("active");
        videosButton.classList.remove("active");
        imagesButton.classList.remove("active");
        presskitContent.forEach((content) => {
            content.style.display = content.classList.contains("artwork") ? "grid" : "none";
        });
    });

    // Mostrar "Vídeos" por defecto al cargar la página
    videosButton.click();
});

$(document).ready(function () {
    $(".fancybox").fancybox({
        type: "iframe", // Indica que el contenido es un iframe (video)
        iframe: {
            preload: false // Evita la carga previa del iframe para mejorar el rendimiento
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        // Envía el formulario usando FormData
        const formData = new FormData(form);
        fetch(form.action, {
            method: 'POST',
            headers: {
                'Accept': 'application/json'
            },
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            alert('¡Mensaje enviado con éxito!');
        })
        .catch(error => {
            console.error('Error:', error);
            alert('Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.');
        });

        form.reset();
    });
});
