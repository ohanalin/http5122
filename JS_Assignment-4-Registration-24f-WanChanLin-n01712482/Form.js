window.onload = function() {
    var formHandle = document.forms.ixdForm;
    formHandle.onsubmit = processForm;

    function processForm() {
        var isFormValid = true;

        // Get input elements
        var StudentFName = formHandle.f__fName;
        var StudentLName = formHandle.f__lName;
        var StudentId = formHandle.f__id;
        var idPattern = /^[Nn]\d{8}$/;
        var StudentProgram = formHandle.f__program;
        var projectRadios = formHandle.f__project;

        // Get selected project from radio buttons
        var selectedProject = "";
        for (var i = 0; i < projectRadios.length; i++) {
            if (projectRadios[i].checked) {
                selectedProject = projectRadios[i].value;
                break;
            }
        }

        // Validate first name
        if (StudentFName.value === "") {
            StudentFName.style.background = "red";
            StudentFName.focus();
            isFormValid = false;
        } else {
            StudentFName.style.background = "";
        }

        // Validate last name
        if (StudentLName.value === "") {
            StudentLName.style.background = "red";
            if (isFormValid) StudentLName.focus();
            isFormValid = false;
        } else {
            StudentLName.style.background = "";
        }

        // Validate student ID
        if (StudentId.value === "" || !idPattern.test(StudentId.value)) {
            StudentId.style.background = "red";
            if (isFormValid) StudentId.focus();
            isFormValid = false;
        } else {
            StudentId.style.background = "";
        }

        // Validate program selection
        if (StudentProgram.selectedIndex === 0) {
            StudentProgram.style.background = "red";
            if (isFormValid) StudentProgram.focus();
            isFormValid = false;
        } else {
            StudentProgram.style.background = "";
        }

        // Validate project selection (radio buttons)
        var projectCaption = document.getElementById("caption_project");
        if (selectedProject === "") {
            projectCaption.style.background = "red";
            isFormValid = false;
        } else {
            projectCaption.style.background = "";
        }

        // Stop form submission if any field is invalid
        if (!isFormValid) return false;

        // Hide the form section
        var hideFormSection = document.getElementById("form");
        if (hideFormSection) {
            hideFormSection.style.display = "none";
        }

     
           
        
        
       
        

        // Display elements for feedback
        var FNameValue = document.getElementById("result__Fname");
        var LNameValue = document.getElementById("result__Lname");
        var IdValue = document.getElementById("result__id");
        var ProgramValue = document.getElementById("result__program");
        var ProjectValue = document.getElementById("result__project");

        // Set the text of the result elements to the input values in uppercase
        if (FNameValue && LNameValue && IdValue && ProgramValue && ProjectValue) {
            FNameValue.innerHTML = StudentFName.value.toUpperCase();
            LNameValue.innerHTML = StudentLName.value.toUpperCase();
            IdValue.innerHTML = StudentId.value.toUpperCase();
            ProgramValue.innerHTML = StudentProgram.options[StudentProgram.selectedIndex].text.toUpperCase();
            ProjectValue.innerHTML = selectedProject.toUpperCase();
        }

        // Optionally, show the result section
        var resultSection = document.getElementById("result");
        if (resultSection) {
            resultSection.style.display = "block";
        }

        return false; // Prevent actual form submission
    }
}
