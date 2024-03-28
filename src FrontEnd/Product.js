import React from 'react';

const Product = ({ id, imageSrc, productName, description, toggleSections, setClickedItem, quantity}) => {
    const handleClick = () => {
        setClickedItem({id: id, imageSrc: imageSrc, productName: productName, description: description, quantity: 1});
        toggleSections(true);
    };

    return (
        <div className="product" onClick={handleClick}>
            <img src={imageSrc} alt={productName} />
            <p>{productName}</p>
        </div>
    );
};

export default Product;
