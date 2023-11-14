import React, { useState } from 'react';
import { useEffect } from 'react';
import { createContext } from 'react';
import { getUser } from '../../apiCalls/users';


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {

        const getUserData = async () => {
            // console.log("ami ar kiiiiiiiiiiiiiiii")
            const data = await getUser();
            setUser(data.userData);
            // console.log(data.success)
            // if(data.success === true)
            setLoading(false);

        }

        getUserData();
    }, [loading])


    const authInfo = {
        user,
        setUser,
        loading,
        setLoading,
    }


    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>


    );
};

export default AuthProvider;