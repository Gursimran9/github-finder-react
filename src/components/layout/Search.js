import React, { useState } from 'react';

const Search = ({ search, clearUsers, showClear, handleAlert }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === '') {
      handleAlert('Please Enter Something', 'Light');
    } else {
      search(input);
      setInput('');
    }
  };
  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <input
          type='text'
          name='text'
          placeholder='Search Users...'
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <input
          type='submit'
          className='btn btn-dark btn-block'
          value='Search'
        />
      </form>
      {showClear && (
        <button
          type='button'
          className='btn btn-light btn-block'
          onClick={clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  );
};

export default Search;
