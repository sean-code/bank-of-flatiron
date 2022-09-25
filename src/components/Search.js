import React from "react";


// function handleData(event){
//   event.preventDefault

// }

export default function Search({search, setSearch}) {
  function handleData(et){
    setSearch(e.target.value)
  }
  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={(handleData)}
        value={search}
      />
      <i className="circular search link icon"></i>
    </div>
  );
}


