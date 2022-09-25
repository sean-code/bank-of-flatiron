import React from "react";
import AccountContainer from "./AccountContainer";

const baseUrl= "http://localhost:8001/transactions";

export default function App() {
  const [transact, setTransaction] = React.useState([]);
    React.useEffect(() => {
      fetchingTransactions();
  }, [])

  const fetchingTransactions = async () => {
      try {
        const response = await fetch (baseUrl);
        const jsonResponse = await response.json();
        setTransaction(jsonResponse);
      } catch (error) {
        console.error(error);

      };






    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer />
      </div>
    );
  }

}
