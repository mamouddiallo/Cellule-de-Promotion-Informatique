console.log("Hello World!");
const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const message = document.getElementById("Message");
function sendEmail() {
    // Vérification des champs obligatoires
    if (!fullName.value || !email.value || !phone.value || !message.value) {
        alert("Tous les champs doivent être remplis !");
        return;
    }

    // Construction du message
    const bodyMessage = `
        Full Name: ${fullName.value} <br>
        Email: ${email.value} <br>
        Phone Number: ${phone.value} <br>
        Message: ${message.value}
    `;

    // Envoi de l'e-mail
    Email.send({
        SecureToken: "0f0d1b10-ee73-42c1-ab6b-bd7ef48c1407",
        Host: "smtp.elasticemail.com",
        Username: "diallomamoud298@gmail.com",
        Password: "62402F7B43351B5B0CD32DA72F9806FB3A15",
        To: "diallomamoud298@gmail.com",
        From: "diallomamoud298@gmail.com",
        Subject: "Nouveau Prospect depuis le Formulaire",
        Body: bodyMessage
    })
    .then((response) => {
        if (response === "OK") {
            Swal.fire({
                title: "Félicitations !",
                text: "Nous avons bien reçu votre formulaire. Notre équipe vous contactera dans les plus brefs délais pour vous fournir les informations nécessaires et répondre à vos questions.",
                icon: "success"
            });
        } else {
            Swal.fire({
                title: "Erreur",
                text: "Une erreur s'est produite lors de l'envoi du message. Veuillez réessayer.",
                icon: "error"
            });
        }
    })
    .catch((error) => {
        Swal.fire({
            title: "Erreur",
            text: "Erreur lors de l'envoi : " + error,
            icon: "error"
        });
    });
}

function checkInputs() {
    const items = document.querySelectorAll(".item");
    for (const item of items) {
        if (item.value === "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        } else {
            item.classList.remove("error");
            item.parentElement.classList.remove("error");
        }
    }
}
