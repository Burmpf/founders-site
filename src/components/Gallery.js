import React from 'react';
import BasicNav from './Navbar';
import CardList from './CardList';


const Gallery = () => {
    const cards = [
        {
            imageUrl: './images/broly-founder.png',
            name: 'Burmpf',
            link: 'https://twitter.com/Burmpf',
            title: 'The Lengendary Sayian'
        },
        {
            imageUrl: './images/zorq-founder.png',
            name: 'Zorq',
            link: 'https://twitter.com/Zorq100',
            title: 'The Fisherman'
        },
        {
            imageUrl: './images/archangel-pyatibrat.png',
            name: 'Pyatibrat',
            link: 'https://twitter.com/MuvDelay',
            title: 'The Archangel'
        },
        {
            imageUrl: './images/trader-T.png',
            name: 'Call Me T',
            link: 'https://twitter.com/theycallmet',
            title: 'The Trader'
        },
        {
            imageUrl: './images/blake-founder.png',
            name: 'xTowel',
            link: 'http://twitter.com/S0Lblake',
            title: 'The Soul Stealer'
        },
        {
            imageUrl: './images/skier-zykon.png',
            name: 'Zykon',
            link: 'https://twitter.com/_Zykon',
            title: 'The Skier'
        }
    ];

    return (
        <div className="gallery">
            
            <BasicNav></BasicNav>
            <CardList cards={cards} />
        </div>
    );
};

export default Gallery;
