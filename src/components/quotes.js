import React from 'react';
import useSWR from 'swr';
import './css/quotes.css';

function fetcher(url) {
  return fetch(url).then((res) => res.json());
}

function Quotes() {
  const { data: advice, error } = useSWR('https://api.adviceslip.com/advice', fetcher);

  if (error) return <div>Error loading advice.</div>;
  if (!advice) return <div>Loading...</div>;

  return (
    <div className="quotes-box">
      <p className="text">{advice.slip.advice}</p>
    </div>
  );
}

export default Quotes;
