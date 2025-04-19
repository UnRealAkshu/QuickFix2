document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.querySelector('button');
    const searchInput = document.querySelector('#searchInput');
    const contactUsLink = document.querySelector('#contactUsLink');
    const contactUsSection = document.querySelector('#contactUsSection');
    const contactForm = document.querySelector('#contactForm');

    // Handle search functionality
    searchButton.addEventListener('click', () => {
        const query = searchInput.value.trim();
        if (query) {
            alert(`Searching for services related to: ${query}`);
            // You can add actual search functionality here
        } else {
            alert('Please enter a search term');
        }
    });

    // Show contact us section when clicking the link
    contactUsLink.addEventListener('click', (e) => {
        e.preventDefault();
        contactUsSection.classList.remove('hidden'); // Remove 'hidden' class to show the section
        contactUsSection.scrollIntoView({ behavior: 'smooth' });
    });

    // Handle form submission
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const phone = document.querySelector('#phone').value;
        const interactionType = document.querySelector('#interactionType').value;

        alert(`Thank you, ${name}! We have received your ${interactionType} request. Our team will contact you shortly at ${email}.`);
        
        // Clear the form
        contactForm.reset();
    });
});
