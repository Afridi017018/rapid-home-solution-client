import React from 'react';
import Banner from '../../components/Banner/Banner';
import Cards from '../../components/Cards/Cards';
import SearchBar from '../../components/SearchBar/SearchBar';

const Home = () => {
    return (
        <div>
            <Banner />
            <SearchBar />
            <Cards />

        </div>
    );
};

export default Home;