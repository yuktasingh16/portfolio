import AvailableItems from './AvailableProductsPage';
import '../../index.css'

const ProductsPage = props => {
    return (
        <div>
            <div className='product'>
                <AvailableItems category = { props.category }/>
            </div>
        </div>
    );
};

export default ProductsPage;