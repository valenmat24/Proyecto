import React, {Component} from 'react';
import './Search.css'

class Search extends Component{
    render(){
        return(
            <React.Fragment>
                        <form  action="" className='searcher'>
                            <input className='buscador' type="text" name="search" id="" placeholder="Search Movies/Series"/>
                            <button type="submit"><i class="fas fa-search"></i></button>
                        </form>
            </React.Fragment>
        )
    }
    
}

export default Search