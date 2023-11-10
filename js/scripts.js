/*!
* Start Bootstrap - Full Width Pics v5.0.6 (https://startbootstrap.com/template/full-width-pics)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-full-width-pics/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.addEventListener("DOMContentLoaded", function () {
    const gifs = ["images/ganchoGif.gif", "images/parryGif.gif", "images/ejemploGif.gif"];
    const titles = ["1. Gancho", "2. Parry", "3. Combinación de ambos"];
    const descriptions = [
        "Descripción de la mecánica de gancho.",
        "Descripción de la mecánica de parry.",
        "Descripción de la mecánica de combinación de ambos."
    ];
    const gifContainer = document.getElementById("gif-container");
    const mechanicTitle = document.getElementById("mechanic-title");
    const mechanicDescription = document.getElementById("mechanic-description");
    const prevBtn = document.getElementById("prev-btn");
    const nextBtn = document.getElementById("next-btn");

    let currentMechanic = 0;

    function updateMechanic() {
        gifContainer.innerHTML = `<img src="${gifs[currentMechanic]}" alt="Mecánica">`;
        mechanicTitle.textContent = titles[currentMechanic];
        mechanicDescription.textContent = descriptions[currentMechanic];
    }

    prevBtn.addEventListener("click", function () {
        currentMechanic = (currentMechanic - 1 + gifs.length) % gifs.length;
        updateMechanic();
    });

    nextBtn.addEventListener("click", function () {
        currentMechanic = (currentMechanic + 1) % gifs.length;
        updateMechanic();
    });

    updateMechanic();
});

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
    });

    scenariosButton.addEventListener("click", () => {
        scenariosButton.classList.add("active");
        charactersButton.classList.remove("active");
        galleryContent.forEach((content) => {
            content.style.display = content.classList.contains("scenarios") ? "grid" : "none";
        });
    });

    // Mostrar "Personajes" por defecto al cargar la página
    charactersButton.click();

    // Agregar el evento click para mostrar los Pop-Ups
    const galleryItems = document.querySelectorAll(".gallery-item");
    const popupContainer = document.createElement("div");
    popupContainer.classList.add("popup-container");
    document.body.appendChild(popupContainer);

    galleryItems.forEach((item) => {
        item.addEventListener("click", () => {
            const image = item.querySelector("img");
            const description = item.getAttribute("data-description");
            showPopup(image.src, description);
        });

        // Función para mostrar el Pop-Up
        function showPopup(imageSrc, description) {
            popupContainer.innerHTML = `
                <div class="popup">
                    <img src="${imageSrc}" alt="Popup Image">
                    <p class="popup-description">${description}</p>
                    <button class="close-popup">Cerrar</button>
                </div>
            `;
            popupContainer.style.display = "flex";

            const closePopupButton = document.querySelector(".close-popup");
            closePopupButton.addEventListener("click", () => {
                popupContainer.style.display = "none";
                popupContainer.innerHTML = "";
            });
        }
    });
});
