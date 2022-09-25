import React from 'react'

function Search({ search, onSearchChange }) {
  return (
    <div className='ui large fluid icon input'>
      <input
        type='text'
        placeholder='Search your Recent Transactions'
        onChange={onSearchChange}
        value={search}
      />
      <i className='circular search link icon'></i>
    </div>
  )
}

export default Search
