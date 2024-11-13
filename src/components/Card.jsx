import React from "react"
import Product from "./Product.jsx"
import {
    REMOVE_STORE_ACTION
} from "../context/actionType.js"
import { useDispatch, useSelector } from "react-redux"


export default function Card() {
    const dispatch = useDispatch()
    const card = useSelector(store => store.card)
    console.log(card)

    function removeFromCart(productId) {
        dispatch(REMOVE_STORE_ACTION, productId)
    }
    return (
        <div className="card">
            <h1>Card</h1>
            {
                card.map(item => (
                    <>
                        <Product product={item} removeFromCart={removeFromCart} />
                    </>
                ))
            }
        </div>
    )
}