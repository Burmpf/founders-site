import React from 'react';
import CardList from './components/CardList';

const App = () => {
  const cards = [
    {
      imageUrl: './images/broly.gif',
      title: 'Burmpf',
      twitterUrl: 'https://twitter.com/Burmpf',
      description: 'This is the first card'
    }
    
  ];

  return (
    <div className="app">
      <CardList cards={cards} />
    </div>
  );
};

export default App;
