import React from 'react';
import './productDescription.css'
const ProductDescriptionSection = ({product, setSelectedItems, selectedItems}) => {
    const addItemToCart = () => {
        if (!selectedItems.some(item => item.id === product.id)) {
            // If not, add the product to selectedItems array
            setSelectedItems(prevItems => [...prevItems, product]);
        }
    };
    return (
        <div className="main-containerdes">
            <div className={"img-card"}>
                <img src={product.imageSrc} alt={product.productName} className="ProductDescription-image"/>

            </div>
            <div className="description-area">
                <h2>{product.productName}</h2>
                <p>{product.description}</p>
                <a href={"#"} onClick={addItemToCart}>Add to cart</a>
            </div>
        </div>
    );
}

export default ProductDescriptionSection;
