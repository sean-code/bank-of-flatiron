import React from "react";
import AccountContainer from "./AccountContainer";

const baseUrl = 'http://localhost:8001/transactions'
export default function App() {
	const [transactions, setTransactions] = React.useState([]);

	React.useEffect(() => {
		fetchTransactions();
	}, []);

	const fetchTransactions = async () => {
		try {
			const response = await fetch(baseUrl);
			const jsonResponse = await response.json();
			setTransactions(jsonResponse);
		} catch (error) {
			console.log(error);
		}
	};
	const handleAddTransaction = (transaction) => {
		setTransactions([...transactions, transaction]);
	};
	const handleTransactionDelete = (transactionId) => {
		const filterTransactions = transactions.filter(
			(transaction) => transactionId.id !== transactionId
		);

		setTransactions(filterTransactions);
	};
	const handleSearchInput= (searchTerm) => {
		if (searchTerm) {
			const filteredTransactions = transactions.filter((trans) => {
				if (trans.description.toLowerCase().match(searchTerm.toLowerCase())) {
					return true;
				} else {
					return false;
				}
			});
			setTransactions(filteredTransactions);
		} else {
			fetchTransactions();
		}
	};
	return (
		<div className="ui raised segment">
			<div className="ui segment violet inverted">
				<h2>The Royal Bank of Flatiron</h2>
			</div>
			<AccountContainer
				handleAddTransaction={handleAddTransaction}
				transactions={transactions}
				handleSearchInput={handleSearchInput}
				handleTransactionDelete={handleTransactionDelete}
			/>
		</div>
	);
}
