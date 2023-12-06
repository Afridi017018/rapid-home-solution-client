import React from 'react';
import { useContext } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { addToCart } from '../../apiCalls/cart';
import { getServiceById } from '../../apiCalls/services';
import Comments from '../../components/Comments/Comments';
import Faq from '../../components/Faq/Faq';
import { AuthContext } from '../../components/providers/AuthProvider';

const ServiceDetails = () => {

    const {user} = useContext(AuthContext);

    const navigate = useNavigate()

    const [searchParams] = useSearchParams();

    const id = searchParams.get('id');
    const serviceType = searchParams.get('serviceType');

    // console.log(id, serviceType)

    const [service, setService] = useState(null)

    useEffect(() => {
        const singleService = async () => {
            const data = await getServiceById(id, serviceType);
            // console.log(data.service)
            setService(data.service)

        }

        singleService();

    }, [id])


    const handleAddToCart = async (serviceId) => {

        let quick;

        if(serviceType === 'quick')
        {
            quick = true;
        }
        else{
            quick = false;
        }


        const data = await addToCart({ serviceId, userId: user[0]._id, quick});

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
                            <img className='h-[400px] w-full rounded-t-md shadow-2xl' src={service.image[0].secure_url} alt="" />
                        </div>
                        <div className='text-center bg-red-300 rounded-b-md'>
                        
                        {
                            user?.length > 0 ?
                             <button onClick={() => handleAddToCart(service._id)} className='bg-red-900 hover:bg-red-950 text-white px-3 py-1 rounded-md my-2'>Add To Cart</button>
                             :
                             <button onClick={() => navigate('/login')} className='bg-red-900 hover:bg-red-950 text-white px-3 py-1 rounded-md my-2'>Add To Cart</button>
                        }
                           
                        </div>

                        <div>
                            <Comments serviceId={service._id} />
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

                            <Faq />
                        </div>


                    </div>

                </div>
            }

        </div>
    );
};

export default ServiceDetails;