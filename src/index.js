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
        imageUrl: './images/skier-zykon.png',
        link: 'https://twitter.com/_Zykon',
    },
    {
        id: 7,
        title: "TeeTree",
        subtitle: "The Psychic",
        imageUrl: "./images/teetree-founder.jpeg",
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
