import React, { useState } from 'react';

function ClothesFilter({ types, handleTypeChange }) {
    const [selectedTypes, setSelectedTypes] = useState([]);

    const handleCheckboxChange = (event) => {
        const { value, checked } = event.target;
        if (checked) {
            setSelectedTypes([...selectedTypes, value]);
        } else {
            setSelectedTypes(selectedTypes.filter(type => type !== value));
        }
        handleTypeChange(selectedTypes); // Notify parent component about the change
    };

    return (
        <div>
            <b>Clothes Types:</b>
            {types.map(type => (
                <div key={type}>
                    <input
                        type="checkbox"
                        id={type}
                        name={type}
                        value={type}
                        checked={selectedTypes.includes(type)}
                        onChange={handleCheckboxChange}
                    />
                    <label htmlFor={type}>{type}</label>
                </div>
            ))}
        </div>
    );
}

export default ClothesFilter;
