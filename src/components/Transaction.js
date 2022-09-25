import React from "react";
import {useEffect} from 'react;'

let baseUrl = 'http://localhost:8001/transactions';

export default function Transaction() {
  useEffect(()=>{
    fetch(baseUrl)
    .then((data) => {return data.json()}).then((completeData)=>{
      console.log(completeData);
    completeData.map((values)=>{
      return (
        `<tr>
          <td>${values.date}</td>
          <td>${values.description}</td>
          <td>${values.category}</td>
          <td>${values.amount}</td>
        </tr>`
      );

    })
    })

  },  [])

}

