import React from 'react';
import './Header.css';

function Header(){
    return(
        <React.Fragment>
            <header>
                <h1>MovieW</h1> 
                <p className='orden'>Ordenar ASC/ DESC</p>                
            </header>
        </React.Fragment>
    )
}

export default Header