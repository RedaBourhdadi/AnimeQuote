const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const anime = document.getElementById('anime')
const characterText = document.getElementById('character')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')
const loader = document.getElementById('loader')




let apiQuote = [];
//show loading
function loading() {
    loader.hidden = false;
    quoteContainer.hidden = true;
}

//hide loading
function complete() {
    quoteContainer.hidden = false;
    loader.hidden = true;
}


async function getQoutes() {
    loading();
    try {
        const response = await fetch('https://animechan.vercel.app/api/random');
        apiQuote = await response.json();
    }
    catch (error) {
        //catch error
    }

    quoteText.textContent = apiQuote.quote;
    anime.textContent = apiQuote.anime;
    characterText.textContent = apiQuote.character;
    if (apiQuote.quote.length > 50) {
        quoteText.classList.add('long-quote');
    }
    else if (apiQuote.quote.length > 100) {
        quoteText.classList.add('long-Vquote');
        quoteText.classList.remove('long-quote');

    }
    else {
        quoteText.classList.remove('long-quote');
        quoteText.classList.remove('long-Vquote');
    }
    //set quote ;hide laoder
    complete();
}
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent}%0D%0A${characterText.textContent} %0D%0A${anime.textContent}`;
    window.open(twitterUrl, '_blank');
}

//on load
getQoutes();
// console.log(apiQuote);