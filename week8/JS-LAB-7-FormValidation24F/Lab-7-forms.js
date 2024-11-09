/* LAB 7 - SHIPPING FORM */
//Order Shipping object (for extra EXTRA challenge, otherwise, ignore it)

var shipInfo = {
	cid: 0,
	name: "",
	pc: "",
	speed: "",
	cost: 0
};

window.onload = function() {
    // Handle form submission
    var formHandle = document.forms.form_ship;
    formHandle.onsubmit = processForm;

    // Main function to process the form
    function processForm() {
        // Form elements and feedback elements
        var hideForm = document.getElementById("shippingForm");
        var tksform = document.getElementById("thanks_msg");

        // Input fields
        var nameValue = formHandle.f_Name;
        var postcodeValue = formHandle.f_pc;
        var customerSpeed = formHandle.f__program;

        // Display elements for feedback
        var CustomerName = document.getElementById("thanksCustomer");
        var customerPost = document.getElementById("thanksPC");
        var customerSpeedDisplay = document.getElementById("thanksSpeed");
        var customerCost = document.getElementById("thanksCost");

        // Validate name field
        if (nameValue.value === "") {
            nameValue.style.background = "red";
            return false;
        }

        // Validate postcode field
        if (postcodeValue.value === "") {
            postcodeValue.style.background = "red";
            return false;
        }

        // Display values in the "Thank you" message
        CustomerName.innerHTML = nameValue.value;
        customerPost.innerHTML = postcodeValue.value;
        customerSpeedDisplay.innerHTML = customerSpeed.options[customerSpeed.selectedIndex].text;
        customerCost.innerHTML = customerSpeed.value;

        // Show thank you message and hide form
        hideForm.style.display = "none";
        tksform.style.display = "block";

        return false;
    }
}
	
