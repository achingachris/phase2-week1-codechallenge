import React, { useEffect, useState } from 'react'
import TransactionsList from './TransactionsList'
import Search from './Search'
import AddTransactionForm from './AddTransactionForm'

function AccountContainer() {
  const [searchItem, setSearchItem] = useState('')
  const [transactions, setTransactions] = useState([])

  // get transations from API
  useEffect(() => {
    fetch('http://localhost:8001/transactions')
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data)
      })
  }, [])

  const searchFilteredItems = (e) => {
    setSearchItem(e.target.value)
    console.log(searchItem)
  }

  return (
    <div>
      <Search searchValue={searchItem} onSearchChange={searchFilteredItems} />
      <AddTransactionForm />
      <TransactionsList transaction={transactions} />
    </div>
  )
}

export default AccountContainer
