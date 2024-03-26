import React from 'react';
const SearchBar = ({value, isLoading, handleSubmit, onChange}) => {

    return(
        <div className="form-container">
        <form onSubmit={handleSubmit}>
            <input
            value={value}
            disabled = {isLoading}
            onChange={onChange}
            placeholder='Search for a recipe'
            className='form-control'

            />
            <input
            disabled = {isLoading|| !value}
            type='submit'
            className='btn'
            value='Search'
            />

        </form>
        </div>
    )
}
export default SearchBar;

