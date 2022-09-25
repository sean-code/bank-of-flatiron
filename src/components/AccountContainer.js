import React from "react";
import Search from "./Search";
import TransactionsList from "./TransactionsList";
import AddTransactionForm from "./AddTransactionForm";

export default function AccountContainer() {
  return (
    <div>
      <Search />
      <AddTransactionForm />
      <TransactionsList />
    </div>
  );
}