import React from "react";
import Search from "./Search";
import TransactionsList from "./TransactionsList";
import AddTransactionForm from "./AddTransactionForm";

export default function AccountContainer({
	transactions,
	handleAddTransaction,
	handleSearchInput,
	handleDeleteTransaction,
}) {
	return (
      <>
        <Search handleSearch={handleSearchInput} />
        <AddTransactionForm
          handleAddTransaction={handleAddTransaction}
          transactions={transactions}
        />
        <TransactionsList
          transactions={transactions}
          handleDeleteTransaction={handleDeleteTransaction}
        />
      </>
	);
}