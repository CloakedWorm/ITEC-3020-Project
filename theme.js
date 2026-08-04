function setupThemeToggle() {
    const toggleBtn = document.getElementById("themeToggle");


    function applyTheme(theme) {
        document.body.setAttribute("data-theme", theme);
        toggleBtn.textContent =
            theme === "dark"
                ? "Switch to Light Mode"
                : "Switch to Dark Mode";
        // Save the selected theme
        localStorage.setItem("theme", theme);
    }

    function loadSavedTheme() {
        // Read the saved theme
        const savedTheme = localStorage.getItem("theme");
        // Apply saved theme if it exists
        if (savedTheme) {
            applyTheme(savedTheme);
        } else {
            // Default theme
            applyTheme("light");
        }
    }

    toggleBtn.addEventListener("click", function () {
        // Get the current theme
        const currentTheme = document.body.getAttribute("data-theme");
        // Toggle the theme
        if (currentTheme === "dark") {
            applyTheme("light");
        } else {
            applyTheme("dark");
        }
    });
    // Load the saved theme when the page opens
    loadSavedTheme();
};