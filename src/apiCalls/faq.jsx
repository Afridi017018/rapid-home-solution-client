const getFaq = async () => {
    const response = await fetch(`http://localhost:4000/api/services/get-faq`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // 'authorization': `Bearer ${localStorage.getItem("token")}`
        },
        // body: JSON.stringify(obj)

    })

    const data = await response.json();
    return data;
}



const addFaq = async (obj) => {
    const response = await fetch(`http://localhost:4000/api/services/add-faq`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            //'authorization': `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(obj)

    })

    const data = await response.json();
    return data;
}



const updateFaq = async (obj) => {
    const response = await fetch(`http://localhost:4000/api/services/update-faq`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            //'authorization': `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(obj)

    })

    const data = await response.json();
    return data;
}



const deleteFaq = async (id) => {
    const response = await fetch(`http://localhost:4000/api/services/delete-faq/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem("token")}`
        },
        // body: JSON.stringify(obj)

    })

    const data = await response.json();
    return data;
}





export { getFaq, addFaq, updateFaq, deleteFaq };