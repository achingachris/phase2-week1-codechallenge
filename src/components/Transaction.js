import React from 'react'

function Transaction({ date, description, category, amount }) {
  return (
    <tr>
      <td>{date}</td>
      <td>{description}</td>
      <td>{category}</td>
      <td>{amount}</td>
    </tr>
  )
}

export default Transaction

Transaction.defaultProps = {
  date: '01/01/2020',
  description: 'No description',
  category: 'No category',
  amount: 0,
}
