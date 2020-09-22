import React from 'react';

import './App.css';

//Add Components

import { Header } from './Components/Header'
import { Balance } from './Components/Balance'
import { AccountSummary } from './Components/AccountSummary'
import { TransactionHistory } from './Components/TransactionHistory'
import { AddTransaction } from './Components/AddTransaction'

function App() {
  return (
    <div>
      <Header />  
      <div className="Container" >
      <Balance />
      <AccountSummary />
      <TransactionHistory />
      <AddTransaction />
      </div>
    </div>
  );
}

export default App;
