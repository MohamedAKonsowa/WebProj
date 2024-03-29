import React, { useState } from 'react';
import PriceSlider from "./PriceSlider";
import ClothesFilter from './ClothesFilter';
import './searchScreen.css'

export default function SearchSection() {
    const [selectedTypes, setSelectedTypes] = useState([]);
    const handleTypeChange = (types) => {
        setSelectedTypes(types);
    };
    return(
        <>
            <div class = "search-side">
                    <div>
                        <b>Search By:</b>
                        <input type={"text"} class = "Bar"/>
                        <PriceSlider/>
                    </div>
                    <div>
                        <ClothesFilter
                            types={['T-shirt', 'Hoodies', 'Jacket']}
                            handleTypeChange={handleTypeChange}
                        />
                    </div>
            </div>
        </>
    )
}