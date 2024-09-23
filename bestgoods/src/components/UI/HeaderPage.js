import React from 'react';

import classes from './HeaderPage.module.css';
import HeaderLinksPage from './HeaderLinksPage';

const HeaderPage = props => {
    return (
        <div>
            <header className={classes.header} >
                <h1>Best Goods E-commerce</h1>
                <HeaderLinksPage  isLoggedIn = { props.isLoggedIn } setIsLoggedIn = {props.setIsLoggedIn}/>
            </header>
        </div>
    );
};

export default HeaderPage;