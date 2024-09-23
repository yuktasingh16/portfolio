import React from "react";

import './CategoriesPage.css';

const CategoriesPage = ({ categories, selectedCategory, onSelectCategory }) => {
    return (
        <div className="categories-bar">
            <ul>
                {categories.map((category) => (
                    <li
                        key={category}
                        className={selectedCategory === category ? "active" : ""}
                        onClick={() => onSelectCategory(category)}
                    >
                        {category}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoriesPage;