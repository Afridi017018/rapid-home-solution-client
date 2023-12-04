import React from 'react';
import { useState } from 'react';
import Banner from '../../components/Banner/Banner';
import Cards from '../../components/Cards/Cards';
import Filters from '../../components/Filters/Filters';
import SearchBar from '../../components/SearchBar/SearchBar';

const Home = () => {

    const [displayFilter, setDisplayFilter] = useState(true)

    const [filterItem, setFilterItem] = useState("")
    const [searchItem, setSearchItem] = useState("")

    return (
        <div>
            <Banner />
            <SearchBar setSearchItem={setSearchItem} />

            <div className='flex'>

                <Filters
                    displayFilter={displayFilter}
                    setDisplayFilter={setDisplayFilter}
                    filterItem={filterItem}
                    setFilterItem={setFilterItem}
                />

                <Cards
                    displayFilter={displayFilter}
                    setDisplayFilter={setDisplayFilter}
                    filterItem={filterItem}
                    searchItem={searchItem}
                />
            </div>

        </div>
    );
};

export default Home;