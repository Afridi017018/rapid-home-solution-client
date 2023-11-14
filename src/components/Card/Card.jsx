import React from 'react';
import { useNavigate } from 'react-router-dom';

import './Card.css'


const Card = ({ displayFilter, element }) => {


    const navigate = useNavigate();

    return (
        <div>
            <div onClick={() => navigate(`/service-details/${element._id}`)} className={`card card-compact bg-base-100 shadowCustom shadow-black rounded-md cursor-pointer ${displayFilter ? 'w-48 md:w-64' : 'w-72'}`}>
                <figure><img className='h-56 w-full' src={element?.image[0]?.secure_url} alt="" /></figure>
                <div className="py-2 px-2 bg-red-50 rounded-md">
                    <div>
                        <h2 className=' bg-red-300 inline px-2 py-1 rounded font-medium text-xs text-red-900 capitalize'>{element.category.name}</h2>
                    </div>
                    <h2 className="py-2 font-medium">{element.title}</h2>

                </div>
            </div>
        </div>
    );
};

export default Card;