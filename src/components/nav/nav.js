import React from 'react';
import classes from './nav.module.css';
import ToggleIcon from './toggle_icon/toggle_icon'

const nav=props=>{
    return(
        <nav >
            <header className={classes.Nav}>
                <img src="https://www.strides.com/images/logo.jpg" alt="Logo"/>
                <ToggleIcon />
                <div className={classes.DesktopOnly}>Menu</div>
            </header>
        </nav>
    )
}

export default nav