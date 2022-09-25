import React, { useState } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import AddTransactionForm from './AddTransactionForm'

function AccountContainer() {
  const [searchItem, setSearchItem] = useState('')

  const searchFilteredItems = (e) => {
    setSearchItem(e.target.value)
    console.log(searchItem)
  }

  // const filterdItems = 

  return (
    <div>
      <Search searchValue={searchItem} onSearchChange={searchFilteredItems} />
      <AddTransactionForm />
      <TransactionsList />
    </div>
  )
}

export default AccountContainer
