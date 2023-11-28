//HTML Selectors:
const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

//Shows a new Quote:
const newQuote = () => {
    let randomQuote = Math.floor(Math.random() * apiQuotes.length);
    let quote = apiQuotes[randomQuote];
    if(quote.text.length > 50){
        quoteText.classList.add('long-quote');
    } else {
        quoteText.classList.remove('long-quote');
    }
    quoteText.textContent = quote.text;
    if(!quote.author){
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }
}

//Gets the quotes on load
const getQuotes = async() => {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
       const res = await fetch(apiUrl)
       apiQuotes = await res.json();
       newQuote();
    } catch(err){
       quoteText.textContent = 'Error Occured'
    }
}
getQuotes()

//Able to tweet a quote
const tweetQuote = () => {
    const twitterURL = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterURL, '_blank');

}

//Event Listeners:
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);


