document.addEventListener('DOMContentLoaded', () => {
    const addressForm = document.querySelector('#addressForm');

    addressForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const addressData = {
            address1: document.querySelector('#address1').value,
            address2: document.querySelector('#address2').value,
            state: document.querySelector('#state').value,
            city: document.querySelector('#city').value,
            pincode: document.querySelector('#pincode').value,
        };

        // Save to localStorage (just for this project)
        localStorage.setItem('userAddress', JSON.stringify(addressData));

        alert('Address saved successfully, baby! 😘');
        
        // Redirect back to homepage
        window.location.href = "index.html"; // assuming your homepage is index.html
    });
});
