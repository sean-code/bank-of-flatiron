import React, { useState } from "react";

export default function AddTransactionForm({addTransaction}) {
  const [transactionData, setTransactionData] = useState({
    data: "",
    description: "",
    category: "",
    amount: 0
  });

  function handleChange(event) {
    event.preventDefault();
    setTransactionData({
      ...transactionData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event){
    event.preventDefault()
    addTransaction(transactionData)
  }
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input type="date" name="date" onChange={handleChange} />
          <input type="text" name="description" placeholder="Description" onChange={handleChange} />
          <input type="text" name="category" placeholder="Category" onChange={handleChange} required />
          <input type="number" name="amount" placeholder="Amount" step="0.01" onChange={handleChange} />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}
