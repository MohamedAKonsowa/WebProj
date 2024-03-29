import React from 'react';
import SearchSection from './SearchSection';
import ProductHolder from './ProductHolder';
import Product from './Product';
import './searchScreen.css'

const SearchPage = ({
                        showSearchSection,
                        showProductSection,
                        productsData,
                        toggleSearchSections,
                        setClickedItem,
                        toggleProductDescriptionSection}) => {
    return (
        <div className="main-container">
            {showSearchSection && <SearchSection />}
            {showProductSection && (
                <div className={"product-search-screen"}>
                <ProductHolder products={productsData} toggleSections={toggleProductDescriptionSection} setClickedItem={setClickedItem}>
                    {productsData.map((product, index) => (
                        <Product
                            key={index}
                            imageSrc={product.imageSrc}
                            productName={product.productName}
                            description={product.description}
                            quantity={product.quantity}
                            toggleSections={toggleSearchSections}
                            setClickedItem={setClickedItem}
                        />
                    ))}
                </ProductHolder>
                </div>
            )}
        </div>
    );
}

export default SearchPage;
