import React, { useState } from 'react';
import Card from '../Card/Card';
import { BsFilterSquare } from "react-icons/bs";
import { useEffect } from 'react';
import { getAllServices } from '../../apiCalls/services';
import QuickCard from '../QuickCard/QuickCard';
import ReactPaginate from 'react-paginate';

const QuickCards = ({ searchItem }) => {

    const [services, setServices] = useState([])
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {

        const allServices = async () => {
            const data = await getAllServices(searchItem.trim(), "", page + 1, 12);
            setServices(data.services)
            // console.log(data)
            setTotalPages(data.totalPages);
        }

        allServices();
    }, [searchItem, page])

    const handlePageChange = (currentPage) => {
        setPage(currentPage.selected);

        // console.log(currentPage.selected)
    };



    return (
        <>

            <div className={`my-5 lg:my-3 md:my-10 container mx-auto flex justify-center gap-5`}>



                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 place-items-center gap-5'>
                    {
                        services.length > 0 &&
                        services.map((element) => (

                            <QuickCard key={element._id} element={element} serviceType="quick" />

                        ))
                    }



                </div>


            </div>



            {
                services.length > 0 &&
                <div className='my-10'>
                    <ReactPaginate
                        pageCount={totalPages}
                        pageRangeDisplayed={5}
                        marginPagesDisplayed={2}
                        onPageChange={handlePageChange}
                        containerClassName={'flex justify-center items-center mt-8'}
                        pageClassName={'mx-2'}
                        breakClassName={'mx-2'}
                        previousLabel={'Previous'}
                        nextLabel={'Next'}

                        activeClassName={'bg-red-600 px-1 rounded text-white border-solid border-2 border-red-500'}
                        disabledClassName={'text-gray-400'}

                    />
                </div>
            }


            {
                services.length === 0 &&
                <div className='flex justify-center items-center h-screen'>
                    <img className='h-full w-2/3' src="https://img.freepik.com/free-vector/flat-design-no-data-illustration_23-2150527130.jpg?w=360&t=st=1701724047~exp=1701724647~hmac=aab069220d5640aea3694ee3b1ee73d226eeedafd936dc5a4fe57329887ecb21" alt="" />
                </div>
            }
        </>


    );
};

export default QuickCards;