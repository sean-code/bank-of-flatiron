import React from "react";

export default function Transaction({ item }) {
  return (
    <div>
      {item.map((data) => (
        <tr key={data.id}>
          <td>{data.date}</td>
          <td>{data.description}</td>
          <td>{data.category}</td>
          <td>{data.amount}</td>
        </tr>
      ))}
    </div>
  );
}

