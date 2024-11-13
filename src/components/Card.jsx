import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { REMOVE_STORE_ACTION } from "../context/actionType"


export default function Card() {
    const dispatch = useDispatch()
    const card = useSelector(store => store.card)

    function removeFromCart(productId) {
        dispatch({
            type: REMOVE_STORE_ACTION,
            payload: productId
        })
    }
    return (
        <div className='card'>
            <h3>Card</h3>
            {
                card.map(item => (
                    <div className='product' key={item.id}>
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>
                        <button onClick={() => removeFromCart(item.id)}>remove from cart</button>
                    </div>
                ))
            }
        </div>
    )
}
