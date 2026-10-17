
function submitForm(event) {
    event.preventDefault();

    // Get the entered values
    let name = document.querySelector(
        'input[name="fullname"]'
    ).value;

    let email = document.querySelector(
        'input[name="email"]'
    ).value;

    let password = document.querySelector(
        'input[name="password"]'
    ).value;

    let gender = document.querySelector(
        'input[name="gender"]:checked'
    );

    let department = document.querySelector(
        'select[name="department"]'
    ).value;

    // Check gender selection
    if (!gender) {
        alert("Please select your gender.");
        return;
    }

    // Check department selection
    if (department === "") {
        alert("Please select your department.");
        return;
    }

    // Display success message
    alert(
        "Registration Successful!\n\n" +
        "Name: " + name + "\n" +
        "Email: " + email + "\n" +
        "Gender: " + gender.value + "\n" +
        "Department: " + department
    );
}

// Reset form message
function resetForm() {
    alert("Form has been reset.");
}
