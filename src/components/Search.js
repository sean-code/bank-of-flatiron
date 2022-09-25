import React from "react";

export default function Search({ handleSearchInput}) {
    return (
      <div className="ui large fluid icon input">
        <input
          type="text"
          placeholder="Search your Recent Transactions" onChange={(event) => {console.log('Searching...');
            handleSearchInput(event.target.value);
          }}
        />
        <i className="circular search link icon"></i>
      </div>
	);
}


