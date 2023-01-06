import React from 'react';
import CardList from './components/CardList';

const App = () => {
  const cards = [
    {
      imageUrl: './images/founder.png',
      title: 'Burmpf',
      link: 'https://twitter.com/Burmpf'
    }
    
  ];

  return (
    <div className="app">
      <CardList cards={cards} />
    </div>
  );
};

export default App;
