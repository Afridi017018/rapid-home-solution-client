import React from 'react';
import { useNavigate } from 'react-router-dom';

import "./Card.css"

const Card = ({displayFilter, element}) => {


    const navigate = useNavigate();

    return (
        <div>
            <div onClick={()=>navigate(`/service-details/${element._id}`)} className={`card card-compact bg-base-100 shadowCustom shadow-black rounded-md cursor-pointer ${displayFilter ? 'w-48 md:w-64' : 'md:w-72'}`}>
                <figure><img className='h-52 w-full' src="https://img.freepik.com/premium-photo/technician-man-repairing-cleaning-maintenance-air-conditioner_101276-183.jpg?w=740" alt="" /></figure>
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