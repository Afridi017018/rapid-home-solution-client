

const addJobReq = async (formData) => {
    const response = await fetch(`http://localhost:4000/api/user/add-job-req`, {
        method: 'POST',
        headers: {
            // 'Content-Type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem("token")}`
        },
        body: formData

    })

    const data = await response.json();
    return data;
}


const getAllApplications = async () => {
    const response = await fetch(`http://localhost:4000/api/user/get-all-applications`, {
        method: 'GET',
        headers: {
            // 'Content-Type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem("token")}`
        },

    })

    const data = await response.json();
    return data;
}




const updateApplicationStatus = async (obj) => {

    const response = await fetch(`http://localhost:4000/api/user/update-application-status`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(obj)

    })

    const data = await response.json();
    return data;
}




const getApplicationsByUser = async (id) => {
    const response = await fetch(`http://localhost:4000/api/user/get-applications-by-user/${id}`, {
        method: 'GET',
        headers: {
            // 'Content-Type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem("token")}`
        },

    })

    const data = await response.json();
    return data;
}



export { addJobReq, getAllApplications, updateApplicationStatus, getApplicationsByUser };