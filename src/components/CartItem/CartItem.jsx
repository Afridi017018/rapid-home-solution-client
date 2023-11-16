import React from 'react';
import { useNavigate } from 'react-router-dom';

const CartItem = ({element}) => {

    const navigate = useNavigate()

    const handlePayment = (id)=>{
        navigate(`/paymentInfo/${id}`);
    }

    return (
        <div className='px-5 md:px-20 my-5'>
            <div className='flex h-56 w-full bg-red-50 border border-gray-300 rounded-md shadow-xl'>
                <div>
                    <img className='h-full w-44 md:w-96 rounded-l-md' src={element?.serviceId?.image[0].secure_url} alt="" />
                </div>
                <div className='rounded-r-md flex flex-col justify-center px-3 md:px-10 w-full'>
                    {/* <p className='bg-red-300 px-2 inline-block text-red-900 rounded'>AC</p> */}
                    <h2 className='text-lg md:text-xl font-bold my-1'>{element.serviceId.title}</h2>
                    <hr />
                    <h4 className='text-lg text-gray-500 my-1'>Estimate Duration: {element.serviceId.duration} Hours</h4>
                    <h4 className='text-lg text-gray-500 my-1'>Warranty: 7 days</h4>
                    <h4 className='text-lg text-gray-500 my-1'>Price: ${element.serviceId.price}</h4>
                    <hr />

                    <div className='flex gap-5 justify-center my-3 text-sm md:text-base'>
                        <button onClick={()=>handlePayment(element.serviceId._id)} className='bg-green-700 hover:bg-green-800 text-white px-2 md:px-3 py-1 rounded-md'>Proceed To Payment</button>
                        <button className='bg-red-700 hover:bg-red-800 text-white px-2 py-1 rounded-md'>Remove</button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default CartItem;