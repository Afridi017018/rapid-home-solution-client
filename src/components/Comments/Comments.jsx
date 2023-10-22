import React from 'react';
import Comment from '../Comment/Comment';

const Comments = () => {
    return (
        <div className='max-h-[420px] border my-10 overflow-auto px-1 rounded'>
            <div className='flex my-1'>
                <input className='border w-full focus:border-red-500 px-2 outline-none' type="text" />
                <button className='bg-red-200 text-red-800 hover:bg-red-300 px-2 py-1 w-28 h-12 font-bold'>Comment</button>
            </div>


            <div>
                <Comment />
                <Comment />
                <Comment />

                
            </div>

        </div>
    );
};

export default Comments;