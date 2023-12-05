import React, { useState } from 'react';
import QuickCards from '../../components/QuicCards/QuickCards';
import SearchBar from '../../components/SearchBar/SearchBar';

const QuickServices = () => {

    const [searchItem, setSearchItem] = useState("")

    return (
        <div>
            <SearchBar setSearchItem={setSearchItem} />
            <QuickCards searchItem={searchItem} />
        </div>
    );
};

export default QuickServices;