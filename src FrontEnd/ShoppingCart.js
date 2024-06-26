import React, { useState, useEffect } from "react";

const ShoppingCart = ({ productsData, setClickedItem }) => {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        // Update cartItems whenever productsData changes
        setCartItems(productsData.map(product => ({
            id: product.id,
            productName: product.productName,
            imageSrc: product.imageSrc,
            description: product.description,
            quantity: product.quantity
        })));
    }, [productsData]);

    const removeFromCart = (index) => {
        const newCartItems = [...cartItems];
        if (newCartItems[index].quantity === 1) {
            // If quantity is 1, remove the item from cartItems
            newCartItems.splice(index, 1);
        } else {
            // Otherwise, decrement the quantity
            newCartItems[index].quantity--;
        }
        setCartItems(newCartItems);
        setClickedItem(newCartItems);
    };

    const increaseQuantity = (index) => {
        const newCartItems = [...cartItems];
        newCartItems[index].quantity++; // Increment the quantity of the item at the specified index
        setCartItems(newCartItems);
        setClickedItem(newCartItems);
    };

    return (
        <div className="shopping-cart">
            <h2>Order</h2>
            <div className="items">
                {cartItems.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <ul>
                        {cartItems.map((item, index) => (
                            <li key={item.id} className="item_inbox">
                                <div className="item-content">
                                    <img src={item.imageSrc} alt={item.name} className="product-image" />
                                    <span className="product-name">
                                        {item.productName} {item.quantity > 1 ? `x${item.quantity}` : ''}
                                    </span>
                                </div>
                                <div className="quantity-controls">
                                    <button onClick={() => increaseQuantity(index)}>+</button>
                                    <button onClick={() => removeFromCart(index)}>-</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default ShoppingCart;
