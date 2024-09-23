import PRODUCTS from './ProductDB.js';
import CardPage from './CardPage.js'

const AvailableProductsPage = (props) => {
    let filteredProducts = PRODUCTS;
    
    // Filter products based on the selected category
    if(props.category !== "All"){
        filteredProducts = PRODUCTS.filter((product) => product.category === props.category);
    }

    return(
        <div className='App'>
        {filteredProducts.map(product => (
            <CardPage 
                id={product.id} 
                key={product.id}
                name={product.name} 
                price={product.price} 
                image={product.image}
            />
        ))}
    </div>

    );
};

export default AvailableProductsPage;