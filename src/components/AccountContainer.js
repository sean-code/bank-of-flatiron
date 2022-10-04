import React, { useEffect,useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer() {
 
  const [transactions,setTransactions ]= useState([]); 
  const [search,setSearch]= useState([]);

  useEffect(()=>{
     fetch ("http://localhost:8001/transactions")
    .then((res)=>res.json())
    .then((transactions)=>{
      
     setTransactions(transactions);
    });
    

  },[]);
  
  function handleAdd(newTransaction){
    const updatedData=[...transactions,newTransaction];
    setTransactions(updatedData);
  }
  return (
    <div>
      <Search search={search} setSearch={setSearch}/>
      <AddTransactionForm onAddTransaction={handleAdd } />
      <TransactionsList search={search} transactions={transactions} />
    </div>
  );
}

export default AccountContainer;