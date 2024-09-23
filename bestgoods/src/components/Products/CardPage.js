import { FaRegBookmark, FaBookmark } from 'react-icons/fa';
import React, { useContext } from 'react';
import { useDispatch, useSelector } from "react-redux";
import {add ,remove} from "../../store/redux/WishListSlice";

import CartContext from '../../store/context/Context';

import './CardPage.css'

const CardPage = props => {
    const cartCtx = useContext(CartContext);

    const addToCartHandler = () => {
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: 1,
            price: props.price
        });
    };

    const {cart} = useSelector((state) => state);
    const dispatch = useDispatch();

    const addToWishList = () => {
        dispatch(add(props));
    }

    const removeFromWishList = () => {
        dispatch(remove(props.id));
    }

    return(
        <div className='productList'>
            <div key={props.id} className='productCard'>

                {
                    cart.some((p) => p.id === props.id) ?
                    (<FaBookmark onClick={removeFromWishList} className="bookmark" />) :
                    (<FaRegBookmark onClick={ addToWishList } className="bookmark" />)
                }

                <img src={props.image} alt='product-img' className='productImage'></img>

                <div className='productCard__content'>
                    <h3 className='productName'>{props.name}</h3>
                    <div className='display'>
                        <div className='productPrice'>₹ {props.price}</div>
                    </div>
                </div>
                
                <div> <button className="cart-button" onClick={ addToCartHandler }>Add To Cart</button> </div>
            </div>
        </div>
    )
}

export default CardPage;