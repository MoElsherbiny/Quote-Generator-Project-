const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const twitter = document.getElementById("twitter");
const newQuote = document.getElementById("new-quote");
const linkedin = document.getElementById("linkedin");
let apiQuote = [];

const newQuotes = () => {
  const quote = apiQuote[Math.floor(Math.random() * apiQuote.length)];
  if (!quote.author) {
    authorText.textContent = "Unknown Author";
  } else {
    authorText.textContent = quote.author;
  }
  if (quote.text.length > 120) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }

  quoteText.textContent = quote.text;
};

const getQuotes = async () => {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuote = await response.json();
    newQuotes();
  } catch (error) {}
};

const tweetQuote = () => {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(twitterUrl, "_blank");
};
const linkedinQuote = () => {
  const linkedinPost = `https://www.linkedin.com/shareArticle?url={https://moelsherbiny.github.io/Quote-Generator-Project-/}&title=t=${quoteText.textContent} - ${authorText.textContent}`;
  window.open(linkedinPost, "_blank");
};
newQuote.addEventListener("click", newQuotes);
twitter.addEventListener("click", tweetQuote);
linkedin.addEventListener("click", linkedinQuote);

getQuotes();
