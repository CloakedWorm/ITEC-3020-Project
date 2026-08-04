function loadComponent(selector, filePath) {
    fetch(filePath)
        .then(response => {
            if (!response.ok)
                throw new Error("Could not load " + filePath);
            return response.text();
        })

        .then(html => {
            document.querySelector(selector).innerHTML = html;
            // After loading the header, initialize theme toggle
            if (selector === "#header_placeholder") {
                setupThemeToggle();
            }
        })
        .catch(error => console.error(error));
}

document.addEventListener("DOMContentLoaded", function () {
    loadComponent(
        "#header_placeholder",
        "components/header.html"
    );

    loadComponent(
        "#footer_placeholder",
        "components/footer.html"
    );
});