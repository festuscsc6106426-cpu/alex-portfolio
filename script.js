
// DISPLAY WELCOME MESSAGE
console.log("Welcome to my Portfolio Website!");

// CONTACT FORM
const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const formMessage = document.getElementById("formMessage");

        if (name.trim() === "" ||
            email.trim() === "" ||
            message.trim() === "") {

            formMessage.textContent = "Please fill in all fields.";
            formMessage.style.color = "red";

        } else {

            formMessage.textContent =
                "Thank you, " + name +
                "! Your form has been checked successfully.";

            formMessage.style.color = "green";

            contactForm.reset();
        }

    });
}
