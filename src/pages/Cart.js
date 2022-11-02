import React, {useState, useContext} from "react"
import CartItem from "../components/CartItem"
import {Context} from "../Context"


function Cart(props) {
    const [isProcessing, setIsProcessing] = useState(false)
    const {cartItems, emptyCart} = useContext(Context)

    console.log(cartItems)
    const cartItemsEls = cartItems.map(cartItem => (
        <CartItem key={cartItem.id} item={cartItem}/>
    ))


    function placeOrder() {
        setIsProcessing(true);
        setTimeout(() => {
            console.log("Order placed!")
            setIsProcessing(false);
            emptyCart();
        }, 3000)
    }

    return (
        <div className="cart-page">
            <h1>Check out</h1>
            {cartItemsEls}
            <p className="total-cost">
                Total: {(cartItems.length * 5.99).toLocaleString("en-US", {style: "currency", currency: "USD"})}
            </p>
            
            <div className="order-button">
                {cartItems.length > 0 ?
                    <button onClick={placeOrder}> {isProcessing? "Ordering...." : "Place Order"}</button>
                    : <p>You have no items in your cart.</p>
                }
            </div>
        </div>
    )
}

export default Cart