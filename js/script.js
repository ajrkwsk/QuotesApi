let $quote;
let $author;
let $btn;

const url = 'https://quotable.io/random';

const prepareDOMElements = () => {
    $quote = document.querySelector('.quote');
    $author = document.querySelector('.author');
    $btn = document.querySelector('.btn');
}

const main = () => {
    prepareDOMElements();
    prepereDOMEvents();
}

function getQuote() {
    fetch(url)
    .then(resp => (resp.json()))
    .then(data => {
        $quote.innerHTML = data.content;
        $author.innerHTML = data.author;
        $quote.classList.add('style-animation');
        $author.classList.add('style-animation');
    })
    .catch(error => console.log(error))
    $quote.classList.remove('style-animation');
    $author.classList.remove('style-animation');
}

const prepereDOMEvents = () => {
    $btn.addEventListener('click', getQuote)
}

document.addEventListener('DOMContentLoaded', main);