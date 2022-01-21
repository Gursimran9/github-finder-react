import React, { useState } from 'react';

const Search = ({ search }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    search(input);
    setInput('');
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
    </div>
  );
};

export default Search;
