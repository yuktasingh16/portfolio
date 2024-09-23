import React from 'react';

const Context = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item)=>{},
    removeItem: (id) => {},
    clearCart: () => {}
});

export default Context;