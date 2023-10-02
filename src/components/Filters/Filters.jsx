import React from 'react';
import { AiOutlineCloseSquare } from "react-icons/ai";

const Filters = ({displayFilter, setDisplayFilter }) => {
    return (
        <div className='my-5 lg:my-3 md:my-10'>
            {
               displayFilter &&
               <div className='bg-blue-400 w-44 md:w-48 lg:w-52 h-[500px] mb-96'>

                <div className='text-4xl flex justify-end'>
                    <button onClick={() => setDisplayFilter(false)}><AiOutlineCloseSquare /></button>
                </div>

            </div>
            }
        </div>
    );
};

export default Filters;