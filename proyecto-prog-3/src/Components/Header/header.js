import React, {Component} from 'react';
import './Header.css';
import Search from '../Search/Search';

class Header extends Component{
render(){
    return(
        <React.Fragment>
            <header>
                <h1>MovieW</h1> 
                    <i class="fas fa-chevron-left"></i>
                    <i class="fas fa-chevron-right"></i>   
            </header>
            
        </React.Fragment>
    )
}
}

export default Header;