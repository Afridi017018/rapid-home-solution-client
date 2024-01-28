import React from 'react';

const Ongoing = () => {
    return (
        <div className='flex justify-center my-5 mx-20'>
            <div className='w-full h-[40rem] border border-gray-500'>

<div className='text-xl font-bold text-center mt-5'>Customer's Address</div>

                <div className='mx-10'>
                <p className='my-10 font-bold bg-green-200 h-10 flex justify-start items-center px-5 rounded'>Order ID  <span className='ml-3 text-gray-700'>1233audhaus</span></p>

                <p className='my-10 font-bold bg-green-200 h-10 flex justify-start items-center px-5 rounded'>Name  <span className='ml-6 text-gray-700'>1233audhaus</span></p>

                <p className='my-10 font-bold bg-green-200 h-10 flex justify-start items-center px-5 rounded'>Phone  <span className='ml-6 text-gray-700'>1233audhaus</span></p>

                <p className='my-10 font-bold bg-green-200 h-20 flex justify-start items-center px-5 rounded'>Address  <span className='ml-3 text-gray-700'>Access Road, Agrabad, Agrabad, Chattogram, Chittagong, Bangladesh</span></p>

                <p className='my-10 font-bold bg-green-200 h-10 flex justify-start items-center px-5 rounded'>Amount  <span className='ml-4 text-gray-700'>৳ 500</span></p>
                
                <p className='my-5 font-bold bg-green-200 h-10 flex justify-start items-center px-5 rounded'>Status  <span className='ml-6 text-gray-700'>1233audhaus</span></p>

                <div className='text-center'>
                <button className='px-2 py-1 rounded text-white bg-green-500'>Completed</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Ongoing;