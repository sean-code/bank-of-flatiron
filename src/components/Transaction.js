import React from "react";
import {useEffect} from 'react;'

let baseUrl = 'http://localhost:8001/transactions'

export default function Transaction() {
  useEffect(()=>{
    fetch(baseUrl)
    .then((data) => {return data.json()}).then((completeData)=>{
      console.log(completeData);
    })



  })
  return (
    <tr>
      <td>{"your code here..."}</td>
      <td>{"your code here..."}</td>
      <td>{"your code here..."}</td>
      <td>{"your code here..."}</td>
    </tr>
  );
}

