// Part 1: Welcome Form - prevents refresh and displays welcome message
const welcomeForm = document.getElementById('welcomeForm');
const nameInput = document.getElementById('nameInput');
const welcomeMessage = document.getElementById('welcomeMessage');

welcomeForm.addEventListener('submit', function(event) {
    // Prevent page refresh
    event.preventDefault();
    
    // Get user's name and remove whitespace
    const userName = nameInput.value.trim();
    
    // Display welcome message or error
    if (userName === "") {
        welcomeMessage.textContent = "Please enter a name!";
    } else {
        welcomeMessage.textContent = `Welcome, ${userName}!`;
    }
});

// Part 2: Light/Dark Mode Toggle - changes background and text color
const themeButton = document.getElementById('themeButton');

themeButton.addEventListener('click', function() {
    // Toggle dark-mode class on body
    document.body.classList.toggle('dark-mode');
    
    // Update button text based on current mode
    if (document.body.classList.contains('dark-mode')) {
        themeButton.textContent = 'Toggle Light Mode';
    } else {
        themeButton.textContent = 'Toggle Dark Mode';
    }
});

// Set initial button text
if (document.body.classList.contains('dark-mode')) {
    themeButton.textContent = 'Toggle Light Mode';
} else {
 +   themeButton.textContent = 'Toggle Dark Mode';
}