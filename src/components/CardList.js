import React from 'react';
import MyCard from './Card';

const CardList = ({cards}) => {
    return (

        cards.map(card => (
                <MyCard imageUrl={card.imageUrl} title={card.title} twitterUrl={card.twitterUrl}>
                </MyCard>
            ))
        

    );
};

export default CardList;
