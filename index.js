// Example JavaScript functionality
document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to Long Qin's Website!");
    
    // Add a click event to navigation links (example)
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            console.log(`Navigated to ${link.getAttribute('href')}`);
        });
    });
});
