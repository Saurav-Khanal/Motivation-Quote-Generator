let newQuote=document.getElementById("new-quote");
let copyButton=document.getElementById("copy-button");
let quote=document.getElementById("quote-line");
newQuote.addEventListener("click",()=>{
    fetch("https://dummyjson.com/quotes/random")
    .then((response)=>{return response.json()})
    .then((data)=>{
        console.log(data.quote);
        quote.textContent=`${data.quote}`;
    })
})