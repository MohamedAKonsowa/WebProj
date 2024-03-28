import React, { useState } from 'react';

export default function PriceSlider() {
    const [value, setValue] = useState(1); // Initial value

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <div>
            <label htmlFor="rangeSlider">MaxPrice:</label>
            <input
                type="range"
                class = "Bar"
                name="rangeSlider"
                min="1"
                max="10000"
                value={value}
                onChange={handleChange}
            />
            <p>Selected value: {value}</p>
        </div>
    );
}
