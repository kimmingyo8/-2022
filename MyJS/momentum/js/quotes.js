const quotes = [
    {
        quote:"The greatest day in your life and mine is when we take total responsibility for our attitudes. That's the day we truly grow up.",
        author: "John C. Maxwell"
    },
    {
        quote: "Life is not a problem to be solved, but a reality to be experienced.",
        author: "Soren Kierkegaard"
    },
    {
        quote: "What we think determines what happens to us, so if we want to change our lives, we need to stretch our minds.",
        author: "Wayne Dyer"
    },
    {
        quote: "Life is ten percent what happens to you and ninety percent how you respond to it.",
        author: "Lou Holtz"
    },
    {
        quote: "Believe that life is worth living and your belief will help create the fact." ,
        author: "William James"
    },
    {
        quote: "Too often we underestimate the power of a touch, a smile, a kind word, a listening ear, an honest compliment, or the smallest act of caring, all of which have the potential to turn a life around.",
        author: "Leo Buscaglia"
    },
    {
        quote: "The only disability in life is a bad attitude." ,
        author: " Scott Hamilton "
    },
    {
        quote: "Life isn't about finding yourself. Life is about creating yourself.",
        author: "George Bernard Shaw"
    },
    {
        quote: 'I never dreamed about success, I worked for it',
        author: 'Estee Lauder'
    },
    {
        quote: 'Do not try to be original, just try to be good.',
        author: 'Paul Rand'
    }
]
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]
quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
