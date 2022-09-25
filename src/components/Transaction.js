import React, {useEffect, useState} from "react";

const baseUrl= "http://localhost:8001/transactions";

export default function Transaction() {
  const [transact, setTransaction] = useState([''])
  useEffect(()=>{
    fetch(baseUrl)
      .then((res) => res.json())
      .then((completedata)=>{
      console.log(completedata);

     completedata.map((values)=>{
      return (
        <tr>
          <td>{values.date}</td>
          <td>{values.description}</td>
          <td>{values.category}</td>
          <td>{values.amount}</td>
      </tr>
      )
    })
    })
  }, [])
}
