// Simple form submission message
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for your message! I'll get back to you as soon as possible.");
    document.getElementById("contactForm").reset();
});