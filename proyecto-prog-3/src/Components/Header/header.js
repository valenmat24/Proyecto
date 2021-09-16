import React, {Component} from 'react';
import './Header.css';
import Search from '../Search/Search';

class Header extends Component{
    
render(){
    return(
        <React.Fragment>
            
            <header>
            <div className='partearriba'>
                <h1>MovieW</h1>             
            </div>
            </header>
            
        </React.Fragment>
    )
}
}

export default Header;