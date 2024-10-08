import React, { useReducer } from 'react';

import Context from './Context';

const defaultCartState = {
    items: [],
    totalAmount: 0
};

const cartReducer = (state, action) => {
    if(action.type === 'ADD'){
        const updatedTotalAmount = state.totalAmount + action.item.price * action.item.amount;

        const existingCartProductIndex = state.items.findIndex(
            (item)=> item.id === action.item.id
        );

        const existingCartProduct = state.items[existingCartProductIndex];
        let updatedItems;
        
        if(existingCartProduct){
            const updatedItem = {
                ...existingCartProduct,
                amount: existingCartProduct.amount + action.item.amount
            };
            updatedItems = [...state.items];
            updatedItems[existingCartProductIndex] = updatedItem;
        } else{
            updatedItems = state.items.concat(action.item);
        }

        return{
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }

    if(action.type === 'REMOVE') {
        const existingCartProductIndex = state.items.findIndex(
            (item) => item.id === action.id
        );
        const existingItem = state.items[existingCartProductIndex];
        const updatedTotalAmount = state.totalAmount - existingItem.price;
        let updatedItems;

        if(existingItem.amount === 1) {
            updatedItems = state.items.filter(item => item.id !==action.id );
        } else {
            const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
            updatedItems = [...state.items];
            updatedItems[existingCartProductIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        };
    }

    if(action.type === 'CLEAR') {
        return defaultCartState;
    }

    return defaultCartState;
};

const ContextProvider = props => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

    const addItemToCartHandler = (item) => {
        dispatchCartAction({type: 'ADD', item: item});
    };

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({type: 'REMOVE', id: id});
    };

    const clearCartHandler = () => {
        dispatchCartAction({type: 'CLEAR'});
    }

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
        clearCart: clearCartHandler
    }
    return(
        <Context.Provider value = { cartContext } >
            {props.children}
        </Context.Provider>
    );
};

export default ContextProvider;