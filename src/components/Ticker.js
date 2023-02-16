import React, { Component } from 'react';
import Ticker from 'react-ticker';

class DoTicker extends Component {
    render() {
        return (
            <Ticker mode='smooth' speed={15}>
                {({ words }) => (
                    <>
                        <h1>The Auction is Live! check it out <a href='http://twitter.com'>HERE</a></h1>
                    </>
                )}
            </Ticker>
        );
    }
}

export default DoTicker;
