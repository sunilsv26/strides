import React from 'react';
import classes from './section_8.module.css'

const section8=props=>{
    return(
        <div className={classes.Section8}>
            <div className={classes.Brand}>
            <img src="https://www.strides.com/images/logo.jpg" alt="Logo"/>
            </div>
            <div className={classes.FooterMenu}>
                <div>Home</div>
                <div>About</div>
                <div>Coperate</div>
                <div>Investors</div>
                <div>Careers</div>
                <div>Contacts</div>
            </div>
        </div>
    )
}

export default section8