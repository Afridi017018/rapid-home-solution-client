const getAllEmployees = async () => {

    const response =await  fetch(`https://rapid-home-solution-server.vercel.app/api/employees/get-all-employees`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem("token")}`
        },
        // body: JSON.stringify(obj)

    })

    const data =await  response.json();
    return data;

}


const getEmployeeById = async (id) => {
    
        const response =await  fetch(`https://rapid-home-solution-server.vercel.app/api/employees/get-employee-by-id/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem("token")}`
            },
            // body: JSON.stringify(obj)
    
        })
    
        const data =await  response.json();
        return data;
    
    }


const addEmployee = async (obj) => {

    const response =await  fetch(`https://rapid-home-solution-server.vercel.app/api/employees/add-employee`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(obj)

    })

    const data =await  response.json();
    return data;

}


const updateEmployee = async (obj) => {

    const response =await  fetch(`https://rapid-home-solution-server.vercel.app/api/employees/update-employee`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(obj)

    })

    const data =await  response.json();
    return data;

}


const deleteEmployee = async (id) => {

    const response =await  fetch(`https://rapid-home-solution-server.vercel.app/api/employees/delete-employee/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem("token")}`
        },
        // body: JSON.stringify(obj)

    })

    const data =await  response.json();
    return data;

}

export {getAllEmployees, getEmployeeById, addEmployee, updateEmployee, deleteEmployee};