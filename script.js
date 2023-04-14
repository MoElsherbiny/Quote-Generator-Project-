const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitter = document.getElementById("twitter");
const newQuote = document.getElementById("new-quote");
const loader = document.getElementById("loader");

let apiQuote = [];

const showLoadingSpinner = () => {
  loader.hidden = false;
  quoteContainer.hidden = true;
};
const removeLoadingSpinner = () => {
  quoteContainer.hidden = false;
  loader.hidden = true;
};
const newQuotes = () => {
  showLoadingSpinner();
  const quote = apiQuote[Math.floor(Math.random() * apiQuote.length)];
  if (!quote.author) {
    authorText.textContent = "Unknown Author";
  } else {
    authorText.textContent = ` Author Name : ${quote.author}`;
  }
  if (quote.text.length > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }

  quoteText.textContent = quote.text;
  removeLoadingSpinner();
};

const getQuotes = async () => {
  showLoadingSpinner();
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuote = await response.json();
    newQuotes();
  } catch (error) {
    console.log("whoops ,no quote", error);
  }
};

const tweetQuote = () => {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
};

newQuote.addEventListener("click", newQuotes);
twitter.addEventListener("click", tweetQuote);
getQuotes();
