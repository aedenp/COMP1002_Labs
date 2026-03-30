// Assignment Three - Buggy Starter Code
// Fix the bugs so all four features work correctly.

let helloBtn = document.querySelector("#helloBtn");
let greetingOutput = document.querySelector("#greetingOutput");

let themeBtn = document.querySelector("#themeButton");

let messageInput = document.querySelector("#messageInput");
let liveOutput = document.querySelector("#liveOutput");

let welcomeForm = document.querySelector("#welcomeForm");
let nameInput = document.querySelector("#nameInput");
let formOutput = document.querySelector("#formOutput");

// 1. Greeting Button
helloBtn.addEventListener("click", function() {
    greetingOutput.textContent = "Hello, student!";
});

// 2. Theme Toggle
themeBtn.addEventListener("click", function() {
    document.body.classList.toggle("darkmode");
});

// 3. Live Input
messageInput.addEventListener("change", function() {
    liveOutput.textContent = messageinput.value;
});

// 4. Welcome Form
welcomeForm.addEventListener("submit", function() {
    event.preventDefault();
    formOutput.textContent = "Welcome, " + nameInput.value;
});
