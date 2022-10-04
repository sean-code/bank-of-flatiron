import React from "react";

export default function Search({ input }) {
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={(event) => input(event.target.value.toLocaleUpperCase())}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}
