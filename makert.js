function buy() {
    alert("Thank you for your purchase! Your order is being processed.");
}

function supplier() {
    alert("Supplier will be contacted shortly. Thank you!");
}

function validateSupplierForm() {
    const firstName = document.querySelector('input[type="text"]').value;
    if (!firstName) {
        alert("Please enter your first name.");
        return false;
    }
    alert("Registration successful!");
    return true;
}
