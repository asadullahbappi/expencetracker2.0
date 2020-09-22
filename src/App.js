import React from 'react';

import './App.css';

//Import Global Provider

import {GlobalProvider} from './Components/Context/GlobalState.js'

//Add Components

import { Header } from './Components/Header'
import { Balance } from './Components/Balance'
import { AccountSummary } from './Components/AccountSummary'
import { TransactionHistory } from './Components/TransactionHistory'
import { AddTransaction } from './Components/AddTransaction'

function App() {
  return (
    <GlobalProvider>
      <Header />  
      <div className="Container" >
      <Balance />
      <AccountSummary />
      <TransactionHistory />
      <AddTransaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
