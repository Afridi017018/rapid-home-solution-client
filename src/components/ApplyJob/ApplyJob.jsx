import React, { useContext, useEffect, useState } from 'react';
import { getAllCategories } from '../../apiCalls/category';
import Loading from '../../pages/Loading/Loading';
import { AuthContext } from '../providers/AuthProvider';

const ApplyJob = () => {

    const { user } = useContext(AuthContext);

    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);


    const getCategories = async () => {
        setIsLoading(true);
        const data = await getAllCategories();

        setCategories(data.categories);
        setIsLoading(false)
    }

    useEffect(() => {
        getCategories();

    }, [])

    if (isLoading) {
        return <div className='w-full col-span-3 h-[400px] flex justify-center items-center'><Loading /></div>
    }



    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(e.target.cv.value)
    }


    return (
        <div className='col-span-3 border px-5 md:px-16'>
            <div className='text-lg md:text-xl font-bold text-center underline underline-offset-4'>Candidate</div>
            <div className='md:text-lg md:font-bold space-y-5 my-5'>
                <p>Name: {user[0]?.name}</p>
                <p>Email: {user[0]?.email}</p>
                <p>Phone: {user[0]?.phone}</p>
                <p>Region: {user[0]?.region}</p>
                <p>City: {user[0]?.city}</p>
                <p>Address: {user[0]?.address}</p>
                <p>Country: {user[0]?.country}</p>

            </div>
            <hr className='my-3'/>

            <div>
                <form onSubmit={handleSubmit}>
                    <select
                        name="category"
                        defaultValue=""
                        className="w-full md:w-1/2 border border-gray-400 my-3 p-2 mb-2"
                        required
                    >
                        <option value="" disabled>Select Category</option>

                        {
                            categories.map((category) => (
                                <option key={category._id} value={category._id} > {category.name.charAt(0).toUpperCase() + category.name.slice(1)}</option>
                            ))
                        }
                    </select>

                    <div className="flex flex-col w-full md:w-1/2 my-3 mb-2 ">
                        <label htmlFor="image" className="mb-1 text-gray-700 font-bold">
                            CV
                        </label>
                        <input
                            type="file"
                            accept="application/pdf"
                            name="cv"
                            id="cv"
                            className="border border-gray-400 p-2"
                            required
                        />
                    </div>

                    <button
                        className="w-full bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 rounded my-5"
                        type="submit"
                    >
                        Apply
                    </button>
                </form>
            </div>


            <div>

            </div>

        </div>
    );
};

export default ApplyJob;