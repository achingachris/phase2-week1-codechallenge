import React, { useEffect, useState } from 'react'
import Transaction from './Transaction'

function TransactionsList() {
  const [transactions, setTransactions] = useState([])

  // get transations from API
  useEffect(() => {
    fetch('http://localhost:8001/transactions')
      .then((response) => response.json())
      .then((data) => {
        setTransactions(data)
      })
  }, [])

  return (
    <table className='ui celled striped padded table'>
      <tbody>
        <tr>
          <th>
            <h3 className='ui center aligned header'>Date</h3>
          </th>
          <th>
            <h3 className='ui center aligned header'>Description</h3>
          </th>
          <th>
            <h3 className='ui center aligned header'>Category</h3>
          </th>
          <th>
            <h3 className='ui center aligned header'>Amount</h3>
          </th>
        </tr>
        {/* render a list of <Transaction> components here */}
        {/* {peopleInSpace.map((person) => person.name)} */}
        {transactions.map((data) => (
          <Transaction
            key={data.id}
            date={data.date}
            description={data.description}
            category={data.category}
            amount={data.amount}
          />
        ))}
      </tbody>
    </table>
  )
}

export default TransactionsList
