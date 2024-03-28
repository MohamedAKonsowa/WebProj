import React from 'react';

const Order = ({ orderData, street, city, country, phoneNumber, trackingNumber }) => {
    return (
        <div className="Order">
            <h2>Order Details:</h2>
            <p>Address: {street}, {city}, {country}</p>
            <p>Phone Number: {phoneNumber}</p>
            <p>Tracking Number: {trackingNumber}</p>

            <h2>Products:</h2>
            {orderData.map((item, index) => (
                <div key={index} className={"order-products"}>
                    <img src={item.imageSrc} alt="Product" className="order-image"/>
                    <div>
                        <h3>{item.productName}</h3>
                        <p>{item.description}</p>
                        <p>quantity: {item.quantity}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Order;

