import React from "react";

export default function Product({ state, addToCard, product, removeFromCart }) { // addToCard emas, addToCart
    console.log(state);
    console.log(addToCard);
    console.log(product);
    return (
        <div className="product" key={product?.id}>
            <h1>{product?.name}</h1>
            <p>{product?.price}</p>
            {state === "products" ? (
                <button className="addCart" onClick={() => addToCard(product)}>
                    Add to Cart
                </button>
            ) : <button onClick={() => removeFromCart(product?.id)}>Remove from cart</button>}
        </div>
    );
}
