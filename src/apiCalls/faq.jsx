

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

export { getFaq };