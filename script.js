let newQuote = document.getElementById("new-quote");
let copyButton = document.getElementById("copy-button");
let quote = document.getElementById("quote-line");
let author = document.getElementById("author");
let copyMessage = document.getElementById("copy");
newQuote.addEventListener("click", () => {
  fetch("https://dummyjson.com/quotes/random")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data.quote);
      quote.textContent = `${data.quote}`;
      author.textContent = data.author;
    });
});

copyButton.addEventListener("click", () => {
  navigator.clipboard.writeText(quote.textContent);
  copyMessage.textContent="Quote Copied Successfully";
});
