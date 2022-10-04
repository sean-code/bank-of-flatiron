import React from "react";

export default function Transaction({date, description, category, amount }) {
  
  return (
    <div>
        <tr>
          <td>{date}</td>
          <td>{description}</td>
          <td>{category}</td>
          <td>{amount}</td>
        </tr>
      </div>
  );
}

