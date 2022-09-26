import React from "react";

export default function AddTransactionForm({handleTransactionAdd}) {
  const [formData, setFormData] = React.useState({
		date: "",
		description: "",
		category: "",
		amount: null,
	});
  const handlePostingTransaction = async (event) => {
		event.preventDefault();
		console.log(formData);
		try {
			const response = await fetch("http://localhost:8001/transactions", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					date: formData.date,
					description: formData.description,
					category: formData.category,
					amount: formData.amount,
				}),
			});
			const jsonResponse = await response.json();
			handleTransactionAdd(jsonResponse);
			setFormData({
				date: "",
				description: "",
				category: "",
				amount: null,
			});
		} catch (error) {
			console.log(error);
		}
	};
	const handleChange = (event) => {
		setFormData({ ...formData, [event.target.name]: event.target.value });
	};

  
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handlePostingTransaction}>
        <div className="inline fields">
          <input type="date" name="date" value={formData.date} onChange={handleChange} />
          <input type="text" name="description" placeholder="Description" value={formData.description} onChange={handleChange} />
          <input type="text" name="category" placeholder="Category" value={formData.category} onChange={handleChange}/>
          <input type="number" name="amount" placeholder="Amount" step="0.01" value={formData.amount} onChange={handleChange}/>
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}