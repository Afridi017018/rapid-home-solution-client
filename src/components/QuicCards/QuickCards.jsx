import React, { useState } from 'react';
import Card from '../Card/Card';
import { BsFilterSquare } from "react-icons/bs";
import { useEffect } from 'react';
import { getAllServices } from '../../apiCalls/services';
import QuickCard from '../QuickCard/QuickCard';

const QuickCards = () => {

    const [services, setServices] = useState([])

    useEffect(() => {

        const allServices = async () => {
            const data = await getAllServices();
            setServices(data.services)
        }

        allServices();
    }, [])



    return (
        <div className={`my-5 lg:my-3 md:my-10 container mx-auto flex justify-center gap-5`}>

          

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-5'>
                {
                    services.length > 0 &&
                    services.map((element) => (

                        <QuickCard key={element._id}  element={element} serviceType="quick" />

                    ))
                }
            </div>

        </div>
    );
};

export default QuickCards;