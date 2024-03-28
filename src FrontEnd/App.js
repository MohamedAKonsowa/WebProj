import React, { useState } from 'react';
import TopSection from './TopSection';
import HomePage from './HomePage';
import downloadImage from 'C:\\Users\\mkonm\\WebstormProjects\\front_end_my_part\\src\\hoddie.jpg';
import SearchPage from "./SearchPage";
import Cart from "./Cart";
import ProductDescriptionSection from "./ProductDescriptionSection";

function App() {
    const productsData = [
        { id: 0, imageSrc: downloadImage, productName: 'Product 1' , description: 'description', quantity: 0},
        { id: 1, imageSrc: downloadImage, productName: 'Product 2' , description: 'description', quantity: 0},
        { id: 2, imageSrc: downloadImage, productName: 'Product 3' , description: 'description', quantity: 0},
        { id: 3, imageSrc: downloadImage, productName: 'Product 4' , description: 'description', quantity: 0},
        { id: 4, imageSrc: downloadImage, productName: 'Product 5' , description: 'description', quantity: 0},
        { id: 5, imageSrc: downloadImage, productName: 'Product 6' , description: 'description', quantity: 0},
        { id: 6, imageSrc: downloadImage, productName: 'Product 7' , description: 'description', quantity: 0},
        { id: 7, imageSrc: downloadImage, productName: 'Product 8' , description: 'description', quantity: 0},
        { id: 8, imageSrc: downloadImage, productName: 'Product 9' , description: 'description', quantity: 0},
    ];
    const [orders, setOrders] = useState([]);
    const [clickedItem, setClickedItem] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const [showSearchSection, setSearchSection] = useState(false);
    const [showProductSection, setProductSection] = useState(false);
    const [showHomeSection, setHomeSection] = useState(false);
    const [showProductDescriptionSection, setProductDescriptionSection] = useState(false);
    const [showCartSection, setCartSection] = useState(false);


    const toggleSearchSections = (show) => {
        setSearchSection(show);
        setProductSection(show);
        setProductDescriptionSection(!show);
        setCartSection(!show);
        setHomeSection(!show);
    };
    const toggleHomeSearchSections = (show) => {
        setSearchSection(!show);
        setProductSection(!show);
        setHomeSection(show);
        setProductDescriptionSection(!show);
        setCartSection(!show);
    };
    const toggleProductDescriptionSection = (show) => {
        setProductDescriptionSection(show);
        setSearchSection(!show);
        setProductSection(!show);
        setHomeSection(!show);
        setCartSection(!show);
    };
    const toggleCartSection = (show) => {
        setCartSection(show);
        setProductDescriptionSection(!show);
        setSearchSection(!show);
        setProductSection(!show);
        setHomeSection(!show);
    };

    return (
        <>
            <div>
                <TopSection toggleSections={toggleSearchSections} toggleHomeSearchSections={toggleHomeSearchSections} toggleCartSection={toggleCartSection} />
            </div>
            <div>
                <SearchPage showSearchSection={showSearchSection} showProductSection={showProductSection} productsData={productsData}
                            toggleSearchSections={toggleSearchSections} toggleProductDescriptionSection={toggleProductDescriptionSection} setClickedItem={setClickedItem}>
                </SearchPage>
            </div>
            <div>
                {showHomeSection && (<HomePage productsData={productsData} toggleSections={toggleProductDescriptionSection} setClickedItem={setClickedItem}></HomePage>)}
            </div>
            <div>
                {showProductDescriptionSection && <ProductDescriptionSection product={clickedItem} setSelectedItems={setSelectedItems} selectedItems={selectedItems}></ProductDescriptionSection>}
            </div>
            <div>
                {showCartSection && (<Cart productsData={selectedItems} setClickedItem={setSelectedItems} setOrders={setOrders} orders={orders}></Cart>)}
            </div>
        </>
    );
}

export default App;
