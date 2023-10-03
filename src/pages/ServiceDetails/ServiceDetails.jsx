import React from 'react';

const ServiceDetails = () => {
    return (
        <div className='grid lg:grid-cols-2 gap-5 container px-5 lg:mx-auto my-10'>
            <div>
                <img className='h-96 w-full rounded-md' src="https://img.freepik.com/premium-photo/technician-man-repairing-cleaning-maintenance-air-conditioner_101276-183.jpg?w=740" alt="" />
            </div>

            <div>
                <div>
                    <h2 className='text-2xl text-red-900 font-bold mb-3' >AC Installation</h2>
                    <p className='text-gray-500 break-words'>Our expert technicians will professionally install your new air conditioning system, ensuring optimal performance and comfort in your home. Whether you're upgrading your current system or installing one for the first time, our team is well-equipped to handle the job. We'll assess your home's cooling needs, recommend the right AC unit, and install it efficiently. You can trust us to deliver a cool and comfortable living space for you and your family.</p>
                </div>

                <hr className='my-3' />

                <div>
                    <h2 className='text-2xl text-red-900 font-bold mb-3'>Service Details</h2>
                    <div className='text-lg font-medium text-gray-500'>
                        <div className='flex justify-between mb-2'>
                            <p>Category</p>
                            <p>AC</p>
                        </div>

                        <div className='flex justify-between mb-2'>
                            <p>Duration</p>
                            <p>5 hrs</p>
                        </div>

                        <div className='flex justify-between mb-2'>
                            <p>Price</p>
                            <p>$120</p>
                        </div>
                    </div>
                </div>

                <hr className='my-5' />


                <div>
                    <h2 className='text-2xl text-red-900 font-bold mb-3'>FAQ</h2>
                    <p className='text-gray-500 text-lg font-medium'>Coming soon ...</p>
                </div>


            </div>

        </div>
    );
};

export default ServiceDetails;