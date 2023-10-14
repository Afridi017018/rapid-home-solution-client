import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { getCart } from '../../apiCalls/cart';
import CartItem from '../CartItem/CartItem';

const CartItems = () => {

    const [cart, setCart] =  useState([]);

    const getCartData = async()=>{
        const cartData = await getCart("65144e8a01dc79aa3134605d");
        setCart(cartData.cartData)
        // console.log(cartData.cartData)
      }

    useEffect(()=>{
          getCartData();
    },[])

    return (
        <div className='h-[553px]'>
            {
                cart.length > 0 ?
               cart.map((element)=>(
                <CartItem key={element._id} element={element} />
               ))
                :
               <div className='flex justify-center items-center h-full'>
                 <img className='h-96 w-96 opacity-50' src="/empty-cart.png" alt="" />
               </div>
            }
          
        </div>
    );
};

export default CartItems;