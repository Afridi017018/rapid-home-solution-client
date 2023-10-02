import React from 'react';

import "./Card.css"

const Card = ({displayFilter}) => {
    return (
        <div>
            <div className={`card card-compact bg-base-100 shadowCustom shadow-black rounded-md ${displayFilter ? 'w-48 md:w-64' : 'md:w-72'}`}>
                <figure><img className='h-52 w-full' src="https://img.freepik.com/premium-photo/technician-man-repairing-cleaning-maintenance-air-conditioner_101276-183.jpg?w=740" alt="Shoes" /></figure>
                <div className="py-2 px-3 bg-red-50 rounded-md">
                    <div>
                        <h2 className=' bg-red-300 inline px-3 rounded font-medium text-red-900'>AC</h2>
                    </div>
                    <h2 className="py-2 font-bold text-lg">AC servicing</h2>

                </div>
            </div>
        </div>
    );
};

export default Card;