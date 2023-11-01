const userRegister = async (user) => {

    const response = await fetch(`http://localhost:4000/api/user/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });

    const data = await response.json();
    return data;

}


const userLogin = async (user)=>{

     const response = await fetch(`http://localhost:4000/api/user/login`,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)

        })

        const data = await response.json();
        return data;

}



const getUser = async()=>{
    const response = await fetch(`http://localhost:4000/api/user/get-user`,{
        method:'GET',
        headers:{
            'Content-Type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('token')}`
        },
        // body: JSON.stringify(user)

    })

    const data = await response.json();
    return data;

}



export { userRegister, userLogin, getUser };
