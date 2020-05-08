import React from 'react';
import { SearchIcon } from '../../../svg';

const SearchInput = () => {
    return (
       <div className='relative mr-12'>
            <input
                placeholder="Поиск по проекту, контрагенту или счёту"
             className="block pl-5 h-11 w-100 appearance-none bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded-lg leading-tight focus:outline-none">
        </input>          
        <div style={{
            position: 'absolute',
            right: 15,
            top: 15
        }}>
        <SearchIcon />
        </div>
        
       </div>
    )
}

export default SearchInput;