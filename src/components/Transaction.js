import React, {useEffect, useState} from "react";

// const baseUrl= "http://localhost:8001/transactions";

export default function Transaction({index, date, category, amount, description}){
        const isEven= index%2===0
        return (
            <tr >
                <td>{date}</td>
                <td>{description}</td>
                <td>{category}</td>
                <td>{amount}</td>
            </tr>
        );
}





















//   
//   useEffect(() => {
//     fetch(baseUrl)
//       .then(res => res.json())
//       .then(data => setTransaction(data))
//   }, [])
//     return (

//       {transact.map((transaction,index)=>{
//           return <TransactionList
//           index={index}
//           Date={transaction.date}
//           category={transaction.category}
//           description={transaction.description}
//           amount={transaction.amount}
//           key={transaction.id}
//         />
//      )
  
// }
