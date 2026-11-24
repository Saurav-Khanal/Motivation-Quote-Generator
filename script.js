let newQuote=document.getElementById("new-quote");
let copyButton=document.getElementById("copy-button");

newQuote.addEventListener("click",()=>{
    fetch("https://dummyjson.com/quotes/random")
    .then((response)=>{return response.json()})
    .then((data)=>{
        console.log(data);
    })
})