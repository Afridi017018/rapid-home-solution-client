

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


const getCart = async (userId) => {
    const response = await fetch(`http://localhost:4000/api/services/get-cart/${userId}`, {
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



const getCartByCartId = async (cartId) => {
    const response = await fetch(`http://localhost:4000/api/services/get-cart-by-cart-id/${cartId}`, {
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


export { addToCart, getCart, getCartByCartId };