console.log("Hello World!");

document.addEventListener("DOMContentLoaded", function() {
    // Sélectionner toutes les cartes avec la classe "card"
    var cards = document.querySelectorAll(".card");

    // Définir la couleur de fond par défaut pour chaque carte
    cards.forEach(function(card) {
        card.style.backgroundColor = "#1e2029";
    });

    // Ajouter un écouteur d'événement pour l'entrée de la souris (mouseenter) sur chaque carte
    cards.forEach(function(card) {
        card.addEventListener("mouseenter", function() {
            // Ajouter la classe "selected" à la carte courante
            this.classList.add("selected");

            // Retirer la classe "selected" des cartes voisines (siblings)
            cards.forEach(function(sibling) {
                if (sibling !== card) {
                    sibling.classList.remove("selected");
                }
            });
        });
    });
});
