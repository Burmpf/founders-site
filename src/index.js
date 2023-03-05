import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarComponent from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Gallery from './components/Gallery';
import Home from './components/Home';
import App from './App';

// import DoTicker from './components/Ticker';

//info on each founder to display

// 'id' to iterate 
// 'title' is owner name 
// 'subtitle' is founder name
// 'imageUrl' is the still image that will be displayed
// 'link' is the link to the twitter
// 'hoverUrl' is the animated image that will be displayed when the mouse is over the still image
const cards = [
    {
        id: 1,
        title: 'Burmpf',
        subtitle: 'The Lengendary Sayian',
        imageUrl: './images/broly-founder.png',
        link: 'https://twitter.com/Burmpf',
        hoverUrl: '/images/broly.gif',
    },
    {
        id: 2,
        title: 'Zorq',
        subtitle: 'The Fisherman',
        imageUrl: './images/zorq-founder.png',
        link: 'https://twitter.com/Zorq100',
        hoverUrl: './images/zorq-founder.png',
    },
    {
        id: 3,
        title: 'Pyatibrat',
        subtitle: 'The Archangel',
        imageUrl: './images/archangel-pyatibrat.png',
        link: 'https://twitter.com/MuvDelay',
        hoverUrl: './images/archangel-pyatibrat.png',
    },
    {
        id: 4,
        title: 'Call Me T',
        subtitle: 'The Trader',
        imageUrl: './images/trader-T.png',
        link: 'https://twitter.com/theycallmet',
        hoverUrl: './images/trader-T.png',
    },
    {
        id: 5,
        title: 'xTowel',
        subtitle: 'The Soul Stealer',
        imageUrl: './images/blake-founder.png',
        link: 'http://twitter.com/S0Lblake',
        hoverUrl: './images/blake-founder.png'
    },
    {
        id: 6,
        title: 'Zykon',
        subtitle: 'The Skier',
        imageUrl: './images/skier-zykon.png',
        link: 'https://twitter.com/_Zykon',
        hoverUrl: './images/zykon-founder-animated.gif'
    },
    {
        id: 7,
        title: "Akke",
        subtitle: "The Psychic",
        imageUrl: "./images/teetree-founder.jpeg",
        link: "https://twitter.com/_Akkke",
        hoverUrl: './images/teetree-founder-animated.gif'
    },
    {
        id: 8,
        title: "Hustle",
        subtitle: "The Archer",
        imageUrl: "./images/hustle-founder.PNG",
        link: "https://twitter.com/Hustle_NFTs",
        hoverUrl: './images/hustle-founder.PNG',
    },
    {
        id: 9,
        title: "Hendrixx",
        subtitle: "The Glitch",
        imageUrl: "./images/glitch-hendrixx.png",
        link: "https://twitter.com/localgodofwar",
        hoverUrl: './images/glitch-hendrixx.png',
    },
    {
        id: 10,
        title: "Enzo",
        subtitle: "The Demon",
        imageUrl: "./images/demon-founder.png",
        link: "https://twitter.com/LitEnzoo",
        hoverUrl: '/images/demon-founder.png',
    },
    {
        id: 11,
        title: "TH",
        subtitle: "The Baghead",
        imageUrl: "./images/baghead-founder.png",
        link: "https://twitter.com/T_H_NFT",
        hoverUrl: './images/TH-founder-animated.gif'
    },
    {
        id: 12,
        title: "Phocking",
        subtitle: "The Curator",
        imageUrl: "./images/curator-founder.png",
        link: "https://twitter.com/phockingy",
        hoverUrl: './images/phocking-founder-animated.gif'
    },
    {
        id: 13,
        title: "Oldman",
        subtitle: "The Old Man",
        imageUrl: "./images/oldman-founder.png",
        link: "https://twitter.com/wmblore",
        hoverUrl: '/images/oldman-founder.png'
    },
    {
        id: 15,
        title: "Abeeku",
        subtitle: "The Solider",
        imageUrl: "./images/solider-founder.jpeg",
        link: "https://twitter.com/_Abeeku",
        hoverUrl: './images/solider-founder.gif',
    },
    {
        id: 16,
        title: "Domii",
        subtitle: "The Assasin",
        imageUrl: "./images/assassin-founder.png",
        link: "https://twitter.com/Domii_sol",
        hoverUrl: './images/assassin-founder.png',
    },
    {
        id: 17,
        title: "Red Trident",
        subtitle: "The Daiymo",
        imageUrl: "./images/daiymo-founder.png",
        link: "https://twitter.com/redtrident_sol",
        hoverUrl: './images/daiymo-founder.png',
    },
    {
        id: 18,
        title: "Yuno",
        subtitle: "The Lelouch",
        imageUrl: "./images/lelouch-founder.png",
        link: "https://twitter.com/yuno6510",
        hoverUrl: './images/lelouch-founder.png',
    },
    {
        id: 19,
        title: "Benny",
        subtitle: "The Pheonix",
        imageUrl: "./images/phoenix-founder.png",
        link: "https://twitter.com/Bennybambino17",
        hoverUrl: './images/phoenix-founder.png',
    },
    {
        id: 21,
        title: "Mr. Mooner",
        subtitle: "The Botooooor",
        imageUrl: "./images/botooooor-founder.png",
        link: "",
        hoverUrl: './images/botooooor-founder.png',
    },
    {
        id: 22,
        title: "Snijbrand",
        subtitle: "The Connoisseur",
        imageUrl: "./images/conisour-founder.png",
        link: "https://twitter.com/Sniberico",
        hoverUrl: './images/conisour-founder.png',
    },
    {
        id: 23,
        title: "Gogunane",
        subtitle: "The Proffesor",
        imageUrl: "./images/proffesor-founder.png",
        link: "https://twitter.com/gogunane",
        hoverUrl: './images/proffesor-founder.png',
    },
    {
        id: 24,
        title: "Milo",
        subtitle: "The Prophet",
        imageUrl: "./images/prophet-founder.png",
        link: "https://twitter.com/milodino_Sol",
        hoverUrl: './images/prophet-founder.png',
    },
    {
        id: 25,
        title: "Piembul",
        subtitle: "The Reaper",
        imageUrl: "./images/reaper-founder.png",
        link: "https://twitter.com/Piembull",
        hoverUrl: './images/reaper-founder.png',
    },
];



ReactDOM.render(

    <BrowserRouter>
        <App {...cards} />
        <NavbarComponent />
        {/* <DoTicker /> */}
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery cards={cards} />} />
        </Routes>
    </BrowserRouter>,
    document.getElementById('root')
);
