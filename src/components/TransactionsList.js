import React from "react";
import Transaction from "./Transaction";

function TransactionsList({transactions,search}) {
const filteredData = transactions
.filter((transaction)=>
  {
    if({search} ==="") {return true;}
    if( transaction.description.includes(search))
    {return true;}})
  

  console.log(transactions)
  const components = filteredData.map((transaction) => {return <Transaction 
    key={transaction.id}
    date={transaction.date}
    name={transaction.name}
    description={transaction.description}
    category={transaction.category}
    amount={transaction.amount}
    transaction={transaction}
    />
  });

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {components}
      </tbody>
    </table>
  );
}

export default TransactionsList;