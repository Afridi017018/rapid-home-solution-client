

const addComment = async (obj) => {
    const response = await fetch(`http://localhost:4000/api/services/add-comment`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'authorization': `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(obj)

    })

    const data = await response.json();
    return data;
}


const getComments = async (serviceId) => {
    const response = await fetch(`http://localhost:4000/api/services/get-comments/${serviceId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // 'authorization': `Bearer ${localStorage.getItem("token")}`
        },


    })

    const data = await response.json();
    return data;
}





export { addComment, getComments};