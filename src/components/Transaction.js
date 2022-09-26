import React from "react";



export default function Transaction({id, date, category, amount, description},
  transactionDelete,
  ){
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
