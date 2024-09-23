import React, { useState } from 'react';

import CategoriesPage from '../Products/CategoriesPage';
import Products from '../Products/ProductsPage';

const HomePage = () => {
    const categories = ["All", "Smart Phones", "Laptop", "Smart Watches", "Head Phones"];
    const [selectedCategory, setSelectedCategory] = useState("All");

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

return (
    <div>
        <CategoriesPage
            categories={categories}
            selectedCategory={selectedCategory}
            onSelectCategory={handleCategorySelect}
        />      
        
        <Products category={ selectedCategory }/>        
    </div>
);
}

export default HomePage;