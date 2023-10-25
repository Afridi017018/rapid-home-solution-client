import React, { useState } from 'react';
import { useEffect } from 'react';
import { addComment, getComments } from '../../apiCalls/addComment';
import Comment from '../Comment/Comment';

const Comments = ({serviceId}) => {

    const [inputComment, setInputComment] = useState("");
    const [serviceComments, setServiceComments] = useState([]);


    useEffect(() => {
        const getAllComments = async () => {
            const data = await getComments(serviceId);
            setServiceComments(data.comment);
        }

        getAllComments();

    }, [inputComment])


    const handleAddComment = async () => {

        const obj = {
            userId: "652cc4f5f3c3167a19f8ec15",
            serviceId: serviceId,
            comment: inputComment
        }

        await addComment(obj);
        setInputComment("");


    }

    return (
        <div className='max-h-[420px] border my-10 overflow-auto px-1 rounded'>
            <div className='flex my-1'>
                <input onChange={(e) => setInputComment(e.target.value)} className='border w-full focus:border-red-500 px-2 outline-none' value={inputComment} type="text" />
                <button onClick={handleAddComment} className='bg-red-200 text-red-800 hover:bg-red-300 px-2 py-1 w-28 h-12 font-bold'>Comment</button>
            </div>


            <div>
                {
                    serviceComments.length > 0 ?
                        serviceComments.map((element) => (
                            <Comment key={element._id} element={element} />
                        ))
                        :

                        <div className='text-center font-bold text-gray-500 my-5'>
                            <h2>No comment has been made yet</h2>
                        </div>
                }
            </div>

        </div>
    );
};

export default Comments;