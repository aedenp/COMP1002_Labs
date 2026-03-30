// Assignment Three - Buggy Starter Code (Fully Fixed)
// Fixes all four features.

// ------------------------------------------------------------------
// 1. Greeting Button – works as originally written; added safety check.
let helloBtn = document.querySelector("#helloBtn");
let greetingOutput = document.querySelector("#greetingOutput");
if (helloBtn && greetingOutput) {
    helloBtn.addEventListener("click", function() {
        greetingOutput.textContent = "Hello, student!";
    });
}

// ------------------------------------------------------------------
/*          2. Theme Toggle
    PROBLEM: The selector used "#themeButton" but the HTML button has id="themeBtn".
            This made themeBtn null, so the event listener was never attached.
            Additionally, the class name "darkmode" toggled does not match the CSS
            class ".dark-mode", so even if the listener worked, no visual change occurred.
   FIX: Use the correct selector "#themeBtn" and toggle the correct class "dark-mode". */
let themeBtn = document.querySelector("#themeBtn");
if (themeBtn) {
    themeBtn.addEventListener("click", function() {
        document.body.classList.toggle("dark-mode");
    });
}

// ------------------------------------------------------------------
/*          3. Live Input
    PROBLEM:    The event type was "change", which only fires after the input loses focus,
            so the output did not update while typing. Also, the variable name
            "messageinput" was misspelled (should be "messageInput").
    FIX: Change the event to "input" for real-time updates, and correct the variable name. */
let messageInput = document.querySelector("#messageInput");
let liveOutput = document.querySelector("#liveOutput");
if (messageInput && liveOutput) {
    messageInput.addEventListener("input", function() {
        liveOutput.textContent = messageInput.value;
    });
}

// ------------------------------------------------------------------
/* 4. Welcome Form
   PROBLEM: The event handler function did not include an "event" parameter,
            so the call to event.preventDefault() caused a ReferenceError.
            Without preventDefault(), the form submits and the page reloads,
            preventing the welcome message from being displayed.
    FIX: Add the event parameter to the handler so preventDefault() works correctly. */
let welcomeForm = document.querySelector("#welcomeForm");
let nameInput = document.querySelector("#nameInput");
let formOutput = document.querySelector("#formOutput");
if (welcomeForm && nameInput && formOutput) {
    welcomeForm.addEventListener("submit", function(event) {
        event.preventDefault();
        formOutput.textContent = "Welcome, " + nameInput.value;
    });
}