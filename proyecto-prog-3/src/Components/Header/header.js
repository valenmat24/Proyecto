import React from 'react';
import './Header.css';

function Header(){
    return(
        <React.Fragment>
            <header>
                <h1>MovieW</h1> 
                <p className='orden'>Ordenar ASC/ DESC</p>  
                <i className="bi bi-grip-horizontal"></i>
                <i className="bi bi-grip-vertical"></i>            
            </header>
            
        </React.Fragment>
    )
}

export default Header