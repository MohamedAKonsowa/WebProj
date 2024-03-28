// TopSection.js
import React from "react";
import titleImage from "C:\\Users\\mkonm\\WebstormProjects\\front_end_my_part\\src\\WebLogo.png";

export default function TopSection({ toggleSections, toggleHomeSearchSections, toggleCartSection }) {
    const handleSearchButtonClick = () => {
        toggleSections(true); // Show both search and product sections
    };

    const handleHomeButtonClick = () => {
        toggleHomeSearchSections(true); // Hide both search and product sections
    };
    const handleCartButtonClick = () => {
        toggleCartSection(true); // Hide both search and product sections
    };

    return (
        <>
            <div className="Top">
                <img src={titleImage} alt="Placeholder Logo" />
            </div>
            <div className="Top">
                <button onClick={handleSearchButtonClick}>Search</button>
                <button onClick={handleHomeButtonClick}>Home</button>
                <button onClick={handleCartButtonClick}>Cart</button>
                <button>Contact Us</button>
            </div>
        </>
    );
}
