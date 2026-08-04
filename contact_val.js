document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    function showError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const error = field.nextElementSibling;
        error.textContent = message;
    }

    function clearError(fieldId) {
        const field = document.getElementById(fieldId);
        const error = field.nextElementSibling;
        error.textContent = "";
    }

    function validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        let isValid = true;

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        // Clear previous errors
        clearError("name");
        clearError("email");
        clearError("message");

        // Validate name
        if (name === "") {
            showError("name", "Name is required.");
            isValid = false;
        }

        // Validate email
        if (email === "") {
            showError("email", "Email is required.");
            isValid = false;
        }
        else if (!validateEmail(email)) {
            showError("email", "Please enter a valid email address.");
            isValid = false;
        }

        // Validate message
        if (message.length < 20) {
            showError("message", "Message must be at least 20 characters long.");
            isValid = false;
        }

        // Success
        if (isValid) {
            form.style.display = "none";
            const success = document.createElement("p");
            success.textContent = "Thank you! Your message has been submitted successfully.";
            success.style.color = "green";
            success.style.fontWeight = "bold";

            form.parentNode.appendChild(success);
        }
    });
    // Clear errors as the user types
    ["name", "email", "message"].forEach(function (id) {
        document.getElementById(id).addEventListener("input", function () {
            clearError(id);
        });
    });
});