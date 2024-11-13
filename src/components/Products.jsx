import React from "react"
import Product from "./Product.jsx"
import { useDispatch, useSelector } from "react-redux"
import { ADD_CARD_ACTION, CATEGORY_STORE_ACTION } from "../context/actionType.js"



export default function Products() {
    const dispatch = useDispatch()
    const products = useSelector(store => store.products)
    const categoryFilter = useSelector(store => store.categoryFilter)

    const filteredProducts = categoryFilter === "All" ? products : products.filter(item => item.category === categoryFilter)

    function addToCard(product) {
        dispatch(ADD_CARD_ACTION, product)
    }

    function changeCategoryFilter(category) {
        dispatch(CATEGORY_STORE_ACTION, category);
    }

    return (
        <div className="products">
            <div className="products-option">
                <select name="" id="" onSelect={(e) => { changeCategoryFilter(e.target.value) }}>
                    <option value="all">All</option>
                    <option value="tufli">Tufli</option>
                    <option value="bosh-kiyim">Bosh kiyim</option>
                </select>
                <h1>Products</h1>
            </div>
            {
                products.map(item => (
                    <>
                        <Product state={"products"} addToCard={addToCard} product={item} />
                    </>
                ))
            }
        </div>
    )
}