import React from 'react';
import ChooseUs from '../../ChooseUs/ChooseUs';
import Footer from '../../Footer/Footer';
import Review from '../../Review/Review';
import RoomSuit from '../../RoomSuit/RoomSuit';

const Home = () => {
    return (
        <div>
            <RoomSuit></RoomSuit>
            <Review></Review>
            <ChooseUs></ChooseUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;