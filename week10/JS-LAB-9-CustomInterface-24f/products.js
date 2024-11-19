//LAB 9-DATA STORAGE: PRODUCTS PAGE
// window.onload
window.onload = function () {
    // Check for stored values
    var nameInput = document.getElementById("newMsgBox");
    var storedName = localStorage.getItem("Name");
    var storedColor = localStorage.getItem("Colour");

    // Apply stored values if they exist
    if (storedName && storedColor) {
        document.body.style.background = storedColor;
        nameInput.innerHTML = "Welcome " + storedName + "!";
    }

    // If form and inputs don't exist, create a prompt to enter name and color
    function processForm() {
        // Prompt user for name and color if form inputs are not available
        var userName = prompt("Enter your name:");
        var userColor = prompt("Enter a background color (name or hex code):", "#c0c0c0");

        if (userName && userColor) {
            // Store values in localStorage
            localStorage.setItem("Name", userName);
            localStorage.setItem("Colour", userColor);

            // Apply the stored values to the page
            document.body.style.background = userColor;
            nameInput.innerHTML = "Welcome " + userName + "!";
        }
        return false;
    }
};
