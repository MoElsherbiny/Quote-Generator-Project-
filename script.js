const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const author = document.getElementById("author");
const twitter = document.getElementById("twitter");

let apiQuote = [];

const newQuote = () => {
  const quote = apiQuote[Math.floor(Math.random() * apiQuote.length)];
  console.log(quote);
};

const getQuotes = async () => {
  const apiUrl = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiUrl);
    apiQuote = await response.json();
    newQuote();
  } catch (error) {}
};
getQuotes();
