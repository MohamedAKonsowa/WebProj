import React, { useState } from 'react';
import PriceSlider from "./PriceSlider";
import ClothesFilter from './ClothesFilter';

export default function SearchSection() {
    const [selectedTypes, setSelectedTypes] = useState([]);
    const handleTypeChange = (types) => {
        setSelectedTypes(types);
    };
    return(
        <>
            <div class = "test">
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