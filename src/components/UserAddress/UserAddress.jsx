import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { getUser } from '../../apiCalls/users';

const UserAddress = () => {

    const [userInfo, setUserInfo] = useState([]);

    useEffect(()=>{
        
        const getUserInfo = async()=>{
            const data = await getUser("652cc4f5f3c3167a19f8ec15");
            setUserInfo(data.userData);
        }

        getUserInfo();

    },[])
    


    return (
        <div className='my-10 mx-10'>
            <div className='mb-3 text-2xl font-bold text-red-900'>
                Shipping Address
            </div>
           {
              userInfo.length > 0 &&

              <div className='text-gray-500 bg-red-50'>
                <div className='border border-gray-100 rounded px-5 shadow-2xl py-5'>
              <h2 className='text-xl font-medium my-2'>Name : {userInfo[0].name}</h2>
              <hr className='w-4/5' />
              <h2 className='text-xl font-medium my-2'>Email : {userInfo[0].email}</h2>
              <hr className='w-4/5' />
              <h2 className='text-xl font-medium my-2'>Phone : {userInfo[0].phone}</h2>
              <hr className='w-4/5' />
              <h2 className='text-xl font-medium my-2'>Region : {userInfo[0].region}</h2>
              <hr className='w-4/5' />
              <h2 className='text-xl font-medium my-2'>City : {userInfo[0].city}</h2>
              <hr className='w-4/5' />
              <h2 className='text-xl font-medium my-2'>Area : {userInfo[0].area}</h2>
              <hr className='w-4/5' />
              <h2 className='text-xl font-medium my-2'>Country : {userInfo[0].country}</h2>
              <hr className='w-4/5' />
              <h2 className='text-xl font-medium my-2'>Address: {userInfo[0].address}</h2>
            </div>
              </div>
           }
        </div>
    );
};

export default UserAddress;