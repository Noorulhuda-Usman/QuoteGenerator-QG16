const quotes = [
    // Inspirational Quotes
    { category: "inspirational", text: "The best way to predict the future is to invent it.", author: "Alan Kay" },
    { category: "inspirational", text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { category: "inspirational", text: "Get busy living or get busy dying.", author: "Stephen King" },
    { category: "inspirational", text: "You have to be odd to be number one.", author: "Dr. Seuss" },
    { category: "inspirational", text: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    
    // Motivational Quotes
    { category: "motivational", text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston S. Churchill" },
    { category: "motivational", text: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { category: "motivational", text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { category: "motivational", text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { category: "motivational", text: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },

    // Funny Quotes
    { category: "funny", text: "I’m on a whiskey diet. I’ve lost three days already.", author: "Tommy Cooper" },
    { category: "funny", text: "I told my wife she was drawing her eyebrows too high. She looked surprised.", author: "Unknown" },
    { category: "funny", text: "I can’t believe I got fired from the calendar factory. All I did was take a day off.", author: "Unknown" },
    { category: "funny", text: "I'm reading a book on anti-gravity. It's impossible to put down!", author: "Unknown" },
    { category: "funny", text: "Why don't scientists trust atoms? Because they make up everything!", author: "Unknown" }
];
    
function newQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    document.getElementById('quote').innerHTML = `${quote.text}<br>- ${quote.author}`;
}

// Event listener for the button to get a new quote with fade effect
document.getElementById("new-quote").addEventListener("click", function() {
    const quoteElement = document.getElementById("quote");
    quoteElement.classList.remove("visible");

    setTimeout(() => {
        newQuote();
        quoteElement.classList.add("visible");
    }, 500);
});

// Toggle dark mode functionality
document.getElementById("dark-mode-toggle").addEventListener("change", function() {
    document.body.classList.toggle("dark-mode", this.checked);
});

// Event listeners for thumbs up and thumbs down
document.getElementById("thumbs-up").addEventListener("click", function() {
    showFeedbackMessage("You liked this quote!");
});

document.getElementById("thumbs-down").addEventListener("click", function() {
    showFeedbackMessage("You didn't like this quote.");
});

// Function to show feedback message
function showFeedbackMessage(message) {
    const feedbackStatus = document.getElementById("feedback-status");
    feedbackStatus.innerHTML = message;
    feedbackStatus.style.display = "block"; // Make sure the message is visible

    // Hide the message after 3 seconds
    setTimeout(() => {
        feedbackStatus.style.display = "none";
    }, 3000);
}

// Generate an initial quote when the page loads
newQuote();



