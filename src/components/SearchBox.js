import React from 'react';

const SearchBox = ({searchfield, searchChange}) =>{
    return(
        <div className='pa2'>
            <form>
                <input type='search'
                     placeholder='search robots'
                      className='pa3 ba b--green bg-lightest-blue'
                      onChange={searchChange}></input>
            </form>
        </div>
        
    ) 
}

export default SearchBox;




