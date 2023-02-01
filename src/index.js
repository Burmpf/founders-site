import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Gallery from './components/Gallery';
import Home from './components/Home';

//info on each founder to display
const cards = [
    {
        id: 1,
        title: 'Burmpf',
        subtitle: 'The Lengendary Sayian',
        imageUrl: './images/broly.gif',
        link: 'https://twitter.com/Burmpf',
    },
    {
        id: 2,
        title: 'Zorq',
        subtitle: 'The Fisherman',
        imageUrl: './images/zorq-founder.png',
        link: 'https://twitter.com/Zorq100',
    },
    {
        id: 3,
        title: 'Pyatibrat',
        subtitle: 'The Archangel',
        imageUrl: './images/archangel-pyatibrat.png',
        link: 'https://twitter.com/MuvDelay',
    },
    {
        id: 4,
        title: 'Call Me T',
        subtitle: 'The Trader',
        imageUrl: './images/trader-T.png',
        link: 'https://twitter.com/theycallmet',
    },
    {
        id: 5,
        title: 'xTowel',
        subtitle: 'The Soul Stealer',
        imageUrl: './images/blake-founder.png',
        link: 'http://twitter.com/S0Lblake',
    },
    {
        id: 6,
        title: 'Zykon',
        subtitle: 'The Skier',
        imageUrl: './images/zykon-founder-animated.gif',
        link: 'https://twitter.com/_Zykon',
    },
    {
        id: 7,
        title: "TeeTree",
        subtitle: "The Psychic",
        imageUrl: "./images/teetree-founder-animated.gif",
        link: "https://twitter.com/ratedteaz",
    },
    {
        id: 8,
        title: "Hustle",
        subtitle: "The Archer",
        imageUrl: "./images/hustle-founder.PNG",
        link: "https://twitter.com/Hustle_NFTs"
    },
    {
        id: 9,
        title: "Hendrixx",
        subtitle: "The Glitch",
        imageUrl: "./images/glitch-hendrixx.png",
        link: "https://twitter.com/localgodofwar"
    },
    {
        id: 10,
        title:"Enzo",
        subtitle: "The Doctor",
        imageUrl: "./images/doctor-founder.png",
        link: "https://twitter.com/LitEnzoo"
    },
    {
        id: 11,
        title: "TH",
        subtitle: "The Baghead",
        imageUrl: "./images/TH-founder-animated.gif",
        link: "https://twitter.com/T_H_NFT"
    },
    {
        id: 12,
        title: "Phocking",
        subtitle: "The Curator",
        imageUrl: "./images/phocking-founder-animated.gif",
        link: "https://twitter.com/phockingy",
    },
    {
        id: 13,
        title: "Oldman",
        subtitle: "The Old Man",
        imageUrl: "./images/oldman-founder.png",
        link: "https://twitter.com/wmblore",
    }
];

ReactDOM.render(
    <BrowserRouter>
        <NavbarComponent />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery cards={cards} />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);
