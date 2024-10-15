// Array of quotes
const quotes = [
    "The best way to predict the future is to invent it.<br>- Alan Kay",
    "Life is 10% what happens to us and 90% how we react to it.<br>- Charles R. Swindoll",
    "Your time is limited, don't waste it living someone else's life.<br> Steve Jobs",
    "The only limit to our realization of tomorrow is our doubts of today.<br>- Franklin D. Roosevelt",
    "Success is not the key to happiness. Happiness is the key to success.<br>- Albert Schweitzer"
];

// Function to generate a new random quote
function newQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    document.getElementById('quote').innerHTML = quotes[randomIndex];   
}

// Event listener for the button
document.getElementById('new-quote').addEventListener('click', newQuote);
