import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { getServiceById } from '../../apiCalls/services';
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


    return (
        <div>

            {
                service  &&

                <div className='grid lg:grid-cols-2 gap-10 container px-5 lg:mx-auto my-10'>
                    <div>
                        <img className='h-[400px] w-full rounded-md shadow-2xl' src="https://img.freepik.com/premium-photo/technician-man-repairing-cleaning-maintenance-air-conditioner_101276-183.jpg?w=740" alt="" />
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
                                    <p>{service.duration} hrs</p>
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