import React from 'react';
import Card from '../Card/Card';
import { BsFilterSquare } from "react-icons/bs";

const Cards = ({displayFilter, setDisplayFilter }) => {
    return (
        <div className={`my-5 lg:my-3 md:my-10 bg-blue-800 container mx-auto ${displayFilter || 'flex justify-center gap-5'}`}>

            {
                displayFilter ||
                <div className='text-3xl'>
                <button onClick={()=>setDisplayFilter(true)}><BsFilterSquare /></button>
            </div>
            }
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-5'>
            <Card displayFilter={displayFilter} />
            <Card displayFilter={displayFilter} />
            <Card displayFilter={displayFilter} />
            <Card displayFilter={displayFilter} />
            <Card displayFilter={displayFilter} />
            <Card displayFilter={displayFilter} />
            <Card displayFilter={displayFilter} />
            <Card displayFilter={displayFilter} />
            <Card displayFilter={displayFilter} />
            <Card displayFilter={displayFilter} />
        </div>
        </div>
    );
};

export default Cards;