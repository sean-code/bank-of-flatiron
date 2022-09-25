import React from "react";



export default function Search(props) {
    return (
      <div className="ui large fluid icon input">
        <input type="text" placeholder="Search your Recent Transactions" onChange={props.handleChange}
        // onChange={(event) => {
        //     console.log("Searching...");
        //     handleData(event.target.value);
        //   }}
          
        />
        <i className="circular search link icon"></i>
      </div>
    );
}


