

const addToCart = async (obj) => {
    const response = await fetch(`http://localhost:4000/api/services/add-to-cart`, {
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

export { addToCart };