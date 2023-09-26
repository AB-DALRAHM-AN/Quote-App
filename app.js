let quoteText = document.querySelector("#text");
let quoteAuthor = document.querySelector("#author");
let newQuoteBtn = document.querySelector("#new-quote");
let tweetBtn = document.querySelector("#tweet-quote");

newQuoteBtn.addEventListener("click", function getQuote() {
  fetch("https://api.quotable.io/quotes/random?maxLength=50")
    .then((res) => res.json())
    .then((data) => {
      quoteText.innerHTML = `"${data[0].content}"`;
      quoteAuthor.innerHTML = `- ${data[0].author}`;
    })
    .catch((err) => console.log(err));
});
tweetBtn.addEventListener("click", function tweetQuote() {
  let quote = quoteText.innerHTML;
  let author = quoteAuthor.innerHTML;
  let twitterUrl = `https://twitter.com/intent/tweet?text=${quote} ${author}`;
  window.open(twitterUrl, "_blank");
});
