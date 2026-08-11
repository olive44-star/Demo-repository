// Waits for the page to load, then adds click interactivity to the button
document.addEventListener("DOMContentLoaded", function() {
    const joinButton = document.getElementById("joinBtn");
    
    joinButton.addEventListener("click", function() {
        // Triggers a simple alert pop-up when clicked
        alert("Welcome to the EvaeXtra.com Mentorship Scheme! We are thrilled to have you start your journey.");
    });
});
