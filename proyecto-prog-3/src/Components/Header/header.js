import React from 'react';
import './Header.css';

function Header(){
    return(
        <React.Fragment>
            <header>
                <h1>MovieW</h1> 
                <p className='orden'>Ordenar ASC/ DESC</p>  
                <i class="bi bi-grip-horizontal"></i>
                <i class="bi bi-grip-vertical"></i>            
            </header>
            
        </React.Fragment>
    )
}

export default Header