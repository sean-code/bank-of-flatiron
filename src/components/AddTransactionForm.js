import React, {useState} from "react";

export default function AddTransactionForm(handleTransaction) {
  const [formData, setFormData] = useState({
    date: '',
    description: '',
    category: '',
    amount: ''
  })
  function updateForm(e){
    setFormData({...formData, [e.target.name]: e.target.value})
  }
  function handleSubmit(e){
    e.preventDefault()
    const dataInput = formValidate(formData)

  }
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input type="date" name="date" onChange={updateForm} value={formData.date}/>
          <input type="text" name="description" placeholder="Description" onChange={updateForm} value={formData.description}/>
          <input type="text" name="category" placeholder="Category" onChange={updateForm} value={updateForm.value}/>
          <input type="number" name="amount" placeholder="Amount" step="0.01" onChange={updateForm} value={formData.amount} />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

