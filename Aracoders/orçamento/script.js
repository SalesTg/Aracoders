document.getElementById('budgetForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const serviceType = document.getElementById('serviceType').value;
    const budget = document.getElementById('budget').value;
    const description = document.getElementById('description').value;
    const preferredDate = document.getElementById('preferredDate').value;

    // Validações adicionais podem ser feitas aqui

    const formData = {
        name,
        email,
        phone,
        serviceType,
        budget,
        description,
        preferredDate
    };

    console.log('Form Submitted', formData);

    document.getElementById('budgetForm').reset();
    document.getElementById('successMessage').classList.remove('hidden');
});
