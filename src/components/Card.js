import React, { useState } from 'react';
import './Cards.css';
import quotes from '../quotes.json';

function Card() {
  const [quote, setQuote] = useState(quotes[Math.floor(Math.random() * quotes.length)]);
  const [key, setKey] = useState(0); // Clave para forzar la actualización del componente

  const getRandomQuote = () => {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setQuote(randomQuote);
    // Incrementar la clave para forzar la actualización del componente
    setKey(prevKey => prevKey + 1);
  };

  return (
    <div className='card' id="quote-box" key={key}> {/* Cambiar la clave */}
      <div className='card-body'>
        <p className='card-text text-secondary fs-4 lh-lg' id="text"><i className="fa-solid fa-quote-left"></i>{quote.quote}<i className="fa-solid fa-quote-right"></i></p>
        <h4 className='card-title text-secondary text-end' id="author"><i className="fa-sharp fa-solid fa-minus"></i>{quote.author}</h4>
        <div className="card-footer text-body-secondary text-end">
            <a href={`https://twitter.com/intent/tweet?hashtags=quotes&text="${quote.quote}"%20-${quote.author}`} className='btn btn-outline-secondary' id='tweet-quote'><i className="fa-brands fa-twitter"></i>tweet</a>
            <button onClick={getRandomQuote} className='btn btn-outline-primary' id="new-quote"><i className="fa-solid fa-rotate"></i>Nueva cita</button>
        </div>
      </div>
    </div>
  )
}

export default Card;