import React, { useState, useEffect } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
  const [query, setQuery] = useState("");
  const [transaction, setTransaction] = useState([]);

  useEffect(() => {
    let url = "http://localhost:3000/transactions"
    fetch(url)
      .then((response) => response.json())
      .then((data) => setTransaction(data));
  });

  const keys = ["description", "category"];
  const search = (data) => {
    return data.filter((item) =>
      keys.some((key) => item[key].toUpperCase().includes(query))
    );
  };
  return (
    <div>
      <Search input={setQuery} />
      <AddTransactionForm />
      <TransactionsList data={search(transaction)} />
    </div>
  );
}

export default AccountContainer;