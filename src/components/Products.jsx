import React from 'react'
import { ADD_CARD_ACTION, CATEGORY_STORE_ACTION } from "../context/actionType.js"
import { useDispatch, useSelector } from "react-redux"


export default function Products() {
    const dispatch = useDispatch()
    const products = useSelector(store => store.products)
    const productsCategory = useSelector(store => store.categoryFilter)


    const filteredProducts = productsCategory === "All" ? products : products.filter(item => item.category === productsCategory)
    console.log(filteredProducts)

    function changeCategoryFilter(event) {
        dispatch({
            type: CATEGORY_STORE_ACTION,
            payload: event.target.value
        })
    }

    function addToCard(product) {
        dispatch({
            type: ADD_CARD_ACTION,
            payload: product,
        })
    }

    return (
        <div className='products'>
            <h1>Products</h1>
            <select name="" id="" onChange={(e) => changeCategoryFilter(e)}>
                <option value="All">Hammasi</option>
                <option value="shim">Shim</option>
                <option value="bosh-kiyim">Bosh kiyim</option>
                <option value="tufli">Tufli</option>
            </select>
            {
                filteredProducts.map((item, id) => (
                    <div className='product' key={id}>
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>
                        <button onClick={() => addToCard(item)}>add to cart</button>
                    </div>
                ))
            }
        </div>
    )
}
