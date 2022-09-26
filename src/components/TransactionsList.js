import React from "react";
import Transaction from "./Transaction";

const baseUrl = 'http://localhost:8001/transactions/'

export default function TransactionsList() {
  const transactionDelete = async (transactionId) => {
		console.log(transactionId);
		try {
			const response = await fetch(baseUrl + transactionId, {
				method: "DELETE",
			});
			handleDeleteTransaction(transactionId);
		} catch (error) {
			console.log(error);
		}
	};
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
				{transactions.map((transaction, index) => (
					<Transaction
						key={transaction.id}
            transactionDelete={transactionDelete}
						transaction={transaction}
					/>
				))}
      </tbody>
    </table>
  );
}


