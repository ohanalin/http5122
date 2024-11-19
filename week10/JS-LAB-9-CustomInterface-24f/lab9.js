// LAB 9-DATA STORAGE: INDEX PAGE

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

    // Get the form and set submit listener
    var formHandle = document.forms.infoForm;
    formHandle.onsubmit = processForm;

    // onsubmit Function
    function processForm() {
        var userName = formHandle.f_name.value;
        var userColor = formHandle.f_color.value;

        // Change welcome text to stored name and log the values
        console.log(userName);
        console.log(userColor);

        // Store values in localStorage
        localStorage.setItem("Name", userName);
        localStorage.setItem("Colour", userColor);

        // Retrieve stored values
        var localUserName = localStorage.getItem("Name");
        var localUserColor = localStorage.getItem("Colour");

        // Change BG colour to stored colour
        document.body.style.background = localUserColor;
        nameInput.innerHTML = "Welcome " + localUserName + "!";

        return false;
    }

    // clearStorage Function
    function clearStorage() {
        // Remove stored values and reset UI
        localStorage.removeItem("Name");
        localStorage.removeItem("Colour");
        document.body.style.background = "#c0c0c0"; // or set a default color if preferred
        nameInput.innerHTML = "Welcome!";

        // Log the cleared values
        console.log(storedName);
        console.log(storedColor);
    }

    // Set delete button listener
    var deleteButton = document.getElementById("btnDel");
    deleteButton.onclick = clearStorage;
};
