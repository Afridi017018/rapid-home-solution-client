import React, { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
import { getUser } from '../../apiCalls/users';


export const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
         const getUserData = async ()=>{
            const data = await getUser();
            setUser(data.userData);
            // console.log(data.userData);
            setLoading(false);
         }

         getUserData();
    },[])


    const authInfo = {
         user,
         loading,
         setLoading
    }


    return (
       
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
            
       
    );
};

export default AuthProvider;