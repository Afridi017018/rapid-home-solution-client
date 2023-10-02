import React from 'react';
import { useState } from 'react';
import Banner from '../../components/Banner/Banner';
import Cards from '../../components/Cards/Cards';
import Filters from '../../components/Filters/Filters';
import SearchBar from '../../components/SearchBar/SearchBar';

const Home = () => {

    const [displayFilter, setDisplayFilter] = useState(true)

    return (
        <div>
            <Banner />
            <SearchBar />
            <div className='flex'>
            <Filters
            displayFilter={displayFilter} 
            setDisplayFilter={setDisplayFilter} 
            />
            <Cards
            displayFilter={displayFilter}  
            setDisplayFilter={setDisplayFilter} 
            />
            </div>

        </div>
    );
};

export default Home;