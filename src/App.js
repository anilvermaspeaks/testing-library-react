import React from 'react';
import './App.css';
import {WrapperCom} from './context-test/Auth-Context'
import Auth from './context-test/Auth'

function App() {
  return (
    <div className="App">
 
    <WrapperCom>
<Auth/>
</WrapperCom>


    </div>
  );
}

export default App;
