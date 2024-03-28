import React from 'react';
import SearchSection from './SearchSection';
import ProductHolder from './ProductHolder';
import Product from './Product';

const SearchPage = ({
                        showSearchSection,
                        showProductSection,
                        productsData,
                        toggleSearchSections,
                        setClickedItem,
                        toggleProductDescriptionSection}) => {
    return (
        <div className="Search">
            {showSearchSection && <SearchSection />}
            {showProductSection && (
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
            )}
        </div>
    );
}

export default SearchPage;
