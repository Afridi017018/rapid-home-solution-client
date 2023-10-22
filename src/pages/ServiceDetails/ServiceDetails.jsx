import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addToCart } from '../../apiCalls/cart';
import { getServiceById } from '../../apiCalls/services';
import Comments from '../../components/Comments/Comments';
import Faq from '../../components/Faq/Faq';

const ServiceDetails = () => {

    const { id } = useParams();

    const [service, setService] = useState(null)

    useEffect(() => {
        const singleService = async () => {
            const data = await getServiceById(id);
            setService(data.service)

        }

        singleService();

    }, [id])


    const handleAddToCart = async (serviceId) => {
        const data = await addToCart({ serviceId, userId: "652cc4f5f3c3167a19f8ec15" });

        if (data.success) {
            toast.dismiss();
            toast.success(data.message)
        }

        else {
            toast.error(data.message);
        }
    }


    return (
        <div>

            {
                service &&

                <div className='grid lg:grid-cols-2 gap-10 container px-5 lg:mx-auto my-10'>
                    <div>
                        <div>
                            <img className='h-[400px] w-full rounded-t-md shadow-2xl' src="https://img.freepik.com/premium-photo/technician-man-repairing-cleaning-maintenance-air-conditioner_101276-183.jpg?w=740" alt="" />
                        </div>
                        <div className='text-center bg-red-300 rounded-b-md'>

                            <button onClick={() => handleAddToCart(service._id)} className='bg-red-900 hover:bg-red-950 text-white px-3 py-1 rounded-md text-xl font-semibold my-2'>Add To Cart</button>
                        </div>

                        <div>
                            <Comments />
                        </div>
                    </div>

                    <div>
                        <div>
                            <h2 className='text-2xl text-red-900 font-bold mb-3' >{service.title}</h2>
                            <p className='text-gray-500 break-words'>{service.description}</p>
                        </div>

                        <hr className='my-3' />

                        <div>
                            <h2 className='text-2xl text-red-900 font-bold mb-3'>Service Details</h2>
                            <div className='text-lg font-medium text-gray-500 capitalize'>
                                <div className='flex justify-between mb-2'>
                                    <p>Category</p>
                                    <p>{service.category.name}</p>
                                </div>

                                <div className='flex justify-between mb-2'>
                                    <p>Duration</p>
                                    <p>{service.duration} hours</p>
                                </div>

                                <div className='flex justify-between mb-2'>
                                    <p>Warranty</p>
                                    <p>7 days</p>
                                </div>

                                <div className='flex justify-between mb-2'>
                                    <p>Price</p>
                                    <p>${service.price}</p>
                                </div>
                            </div>
                        </div>

                        <hr className='my-5' />


                        <div>
                            <h2 className='text-2xl text-red-900 font-bold mb-3'>FAQ</h2>
                            {/* <p className='text-gray-500 text-lg font-medium'>Coming soon ...</p> */}
                            <Faq />
                        </div>


                    </div>

                </div>
            }

        </div>
    );
};

export default ServiceDetails;