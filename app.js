// Access the form element
const form = document.querySelector('form');

// Add an event listener for the form submission
form.addEventListener('submit', function (event) {
    // Check if the input is empty and update styles and custom validity
    const handleInput = function (inputElement) {
        if (inputElement.value.trim() === '') {
            // Prevent form submission
            event.preventDefault();
            // Set a custom error message
            inputElement.setCustomValidity('This field must be filled');
            // Change the border color to red
            inputElement.style.borderBottom = '2px solid red';
        } else {
            // Clear any existing custom validity
            inputElement.setCustomValidity('');
            // Reset the border color
            inputElement.style.borderBottom = '2px solid rgb(223, 223, 223)';
        }
    };

    // Access the input elements
    const fullNameInput = event.target.querySelector('#fullName');
    const phoneNumberInput = event.target.querySelector('#phoneNumber');
    const selectInput = event.target.querySelector('#select-center');

    // Handle each input
    handleInput(fullNameInput);
    handleInput(phoneNumberInput);
    handleInput(selectInput);
});


// Add an event listener for the input events to reset custom validity
form.addEventListener('input', function (event) {
    const inputElement = event.target;

    // Clear custom validity on input
    inputElement.setCustomValidity('');
    // Reset the border color
    inputElement.style.borderBottom = '2px solid rgb(223, 223, 223)';
});
