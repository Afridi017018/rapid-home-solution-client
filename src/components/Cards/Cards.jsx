import React, { useState } from 'react';
import Card from '../Card/Card';
import { BsFilterSquare } from "react-icons/bs";
import { useEffect } from 'react';
import { getAllServices } from '../../apiCalls/services';

const Cards = ({ displayFilter, setDisplayFilter }) => {

    const [services, setServices] = useState([])

    useEffect(() => {

        const allServices = async () => {
            const data = await getAllServices();
            setServices(data.services)
        }

        allServices();
    }, [])



    return (
        <div className={`my-5 lg:my-3 md:my-10 container mx-auto ${displayFilter || 'flex justify-center gap-5'}`}>

            {
                displayFilter ||
                <div className='text-3xl'>
                    <button onClick={() => setDisplayFilter(true)}><BsFilterSquare /></button>
                </div>
            }

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-5'>
                {
                    services.length > 0 &&
                    services.map((element) => (

                        <Card key={element._id} displayFilter={displayFilter} element={element} />

                    ))
                }
            </div>

        </div>
    );
};

export default Cards;