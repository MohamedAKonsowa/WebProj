import React from 'react';

const ProductDescriptionSection = ({product, setSelectedItems, selectedItems}) => {
    const addItemToCart = () => {
        if (!selectedItems.some(item => item.id === product.id)) {
            // If not, add the product to selectedItems array
            setSelectedItems(prevItems => [...prevItems, product]);
        }
    };
    return (
        <div class="productDescription">
            <img src={product.imageSrc} alt={product.productName} className="ProductDescription-image"/>
            <div className="productDescription-text">
                <h1>{product.productName}</h1>
                <p>{product.description}</p>
                <button onClick={addItemToCart}>Add to cart</button>
            </div>
        </div>
    );
}

export default ProductDescriptionSection;
