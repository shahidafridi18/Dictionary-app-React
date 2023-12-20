import React, { useState } from 'react'

const Searchbar = ({ onSearch }) => {
    const [term, setTerm] = useState('');

    const handleInputChange = (e) => {
        setTerm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(term);
    };

    return (
        <div className='container my-5'>

            <form onSubmit={handleSubmit}>
                <input type="text" value={term} onChange={handleInputChange} />
                <button type="submit">Search</button>
            </form>

        </div>

    );
};

export default Searchbar;