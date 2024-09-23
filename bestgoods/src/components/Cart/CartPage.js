import React from 'react';
import './CartPage.css';
import CartProductPage from './CartProductPage';
import { useContext } from 'react';
import Context from '../../store/context/Context';
import { NavLink, useNavigate } from 'react-router-dom';

const CartPage = props => {
    const cartCtx = useContext(Context);

    const navigate = useNavigate();

    const totalAmount = `${cartCtx.totalAmount.toFixed(2)}`;

    const cartProductRemoveHandler = id => {
        cartCtx.removeItem(id);
    };

    const cartProductAddHandler = item => {
        cartCtx.addItem({ ...item, amount: 1});
    };



    const proceedHandler = () => {
        if(props.isLoggedIn) {
            navigate('/proceed');
        } else {
            navigate('/login');
        }
    }


return (
    <div className="cart-container">
        <h2 className="cart-title">Your Cart</h2>
        {cartCtx.items.length > 0 ? (<div>
        <div className="cart-items">
        { cartCtx.items.map((item) => (
                    <CartProductPage 
                        key={item.id}
                        name={item.name} 
                        amount={item.amount} 
                        price={item.price}
                        image={item.image}
                        onRemove={ cartProductRemoveHandler.bind(null, item.id) }
                        onAdd={ cartProductAddHandler.bind(null, item) }
                    />
                )) }      
        </div>
        <p className="cart-total">Total: ₹{ totalAmount }</p>
        <div className="button-container">
        <NavLink to="/"> <button className="button" > Cancel </button> </NavLink>
        <button className="button" onClick={ proceedHandler }>Proceed</button>
        </div>

        </div>) : (<h2 className="empty-cart">Your Cart is Empty</h2>) }

        </div>
    );
};

export default CartPage;